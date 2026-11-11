(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      header.classList.toggle('menu-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  // Header turns solid once you scroll past the top
  var header = document.querySelector('.site-header');
  var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 40); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Fade sections in as they scroll into view
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Tall banner photos are shown whole rather than cropped
  document.querySelectorAll('.slide img').forEach(function (im) {
    var check = function () { if (im.naturalHeight > im.naturalWidth * 0.95) im.closest('.slide').classList.add('is-tall'); };
    if (im.complete && im.naturalWidth) check(); else im.addEventListener('load', check);
  });

  // Dates
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  var now = new Date();
  var today = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate());
  function niceDate(iso) {
    var p = iso.split('-');
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
  }
  function readJSON(id) {
    var el = document.getElementById(id);
    if (!el) return null;
    try { return JSON.parse(el.textContent); } catch (e) { return null; }
  }
  function upcoming(list) {
    if (!list) return null;
    for (var i = 0; i < list.length; i++) {
      if (String(list[i].date).slice(0, 10) >= today) return list[i];
    }
    return null;
  }

  // Highlight past and next rows in the programme and theme table
  document.querySelectorAll('[data-dated-list]').forEach(function (list) {
    var nextMarked = false;
    list.querySelectorAll('[data-date]').forEach(function (row) {
      var d = row.getAttribute('data-date');
      if (d < today) row.classList.add('is-past');
      else if (!nextMarked) { row.classList.add('is-next'); if (!row.id) row.id = 'next'; nextMarked = true; }
    });
  });

  // This week's competition theme
  var weekly = upcoming(readJSON('weekly-data'));
  document.querySelectorAll('[data-this-week]').forEach(function (card) {
    if (!weekly) return;
    card.querySelector('[data-theme]').textContent = weekly.theme;
    var when = card.querySelector('[data-when]');
    if (when) when.textContent = 'Week ' + weekly.week + ' · enter by 4pm on the Tuesday, voting closes 4pm ' + niceDate(String(weekly.date).slice(0, 10));
    card.hidden = false;
  });

  // Next club night
  var nextEvent = upcoming(readJSON('syllabus-data'));
  var nextCard = document.querySelector('[data-next-event]');
  if (nextCard && nextEvent) {
    nextCard.querySelector('[data-when]').textContent = niceDate(String(nextEvent.date).slice(0, 10));
    nextCard.querySelector('[data-what]').textContent = String(nextEvent.description).split('\n')[0];
    nextCard.hidden = false;
  }

  // Results filters
  var chips = document.querySelectorAll('.chip[data-filter]');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.getAttribute('data-filter');
      chips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
      document.querySelectorAll('.competition').forEach(function (c) {
        c.hidden = !(f === 'all' || c.getAttribute('data-category') === f);
      });
      document.querySelectorAll('.season-head').forEach(function (h) {
        var el = h.nextElementSibling, any = false;
        while (el && !el.classList.contains('season-head')) {
          if (el.classList.contains('competition') && !el.hidden) any = true;
          el = el.nextElementSibling;
        }
        h.hidden = !any;
      });
    });
  });

  // Rotating banner
  var banner = document.querySelector('.banner');
  if (banner) {
    var slides = banner.querySelectorAll('.slide');
    var dots = banner.querySelectorAll('.banner-dots button');
    var cur = 0, timer = null;
    var wait = (parseFloat(banner.getAttribute('data-interval')) || 6) * 1000;
    var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var go = function (i) {
      cur = (i + slides.length) % slides.length;
      slides.forEach(function (s, k) {
        s.classList.toggle('is-active', k === cur);
        if (k === cur) s.removeAttribute('aria-hidden'); else s.setAttribute('aria-hidden', 'true');
      });
      var cap = banner.querySelector('.slide-caption'), fc = slides[cur].querySelector('figcaption');
      if (cap) cap.innerHTML = fc ? fc.innerHTML : '';
      dots.forEach(function (d, k) { if (k === cur) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current'); });
    };
    var start = function () { if (!still && slides.length > 1) { clearInterval(timer); timer = setInterval(function () { go(cur + 1); }, wait); } };
    var stop = function () { clearInterval(timer); };
    dots.forEach(function (d, k) { d.addEventListener('click', function () { go(k); start(); }); });
    var p = banner.querySelector('.banner-prev'), n = banner.querySelector('.banner-next');
    if (p) p.addEventListener('click', function () { go(cur - 1); start(); });
    if (n) n.addEventListener('click', function () { go(cur + 1); start(); });
    banner.addEventListener('mouseenter', stop);
    banner.addEventListener('mouseleave', start);
    var bx = null;
    banner.addEventListener('touchstart', function (e) { bx = e.touches[0].clientX; }, { passive: true });
    banner.addEventListener('touchend', function (e) {
      if (bx === null) return;
      var dx = e.changedTouches[0].clientX - bx;
      if (Math.abs(dx) > 50) { go(dx < 0 ? cur + 1 : cur - 1); start(); }
      bx = null;
    });
    go(0);
    start();
  }

  // Lightbox
  var box = document.querySelector('.lightbox');
  if (!box) return;
  var img = box.querySelector('.lb-img');
  var items = [], index = 0;

  function set(sel, text) { box.querySelector(sel).textContent = text || ''; }
  function show(i) {
    index = (i + items.length) % items.length;
    var b = items[index], d = b.dataset;
    img.src = d.src;
    img.alt = (d.title || 'Photo') + (d.photographer ? ' by ' + d.photographer.replace('© ', '') : '');
    var award = box.querySelector('.lb-award');
    award.textContent = d.award || '';
    award.className = 'award lb-award' + (d.award ? ' award-' + d.award.toLowerCase().replace(/[^a-z0-9]+/g, '-') : '');
    set('.lb-title', d.title);
    set('.lb-photographer', d.photographer ? (d.photographer.charAt(0) === '©' ? d.photographer : '© ' + d.photographer) : '');
    set('.lb-gear', d.gear);
    set('.lb-settings', d.settings);
    set('.lb-comp', d.competition);
    var social = box.querySelector('.lb-social');
    social.innerHTML = '';
    var s = b.closest('.photo').querySelector('.social');
    if (s) social.appendChild(s.cloneNode(true));
    set('.lb-count', items.length > 1 ? (index + 1) + ' of ' + items.length : '');
    box.querySelector('.lb-prev').hidden = items.length < 2;
    box.querySelector('.lb-next').hidden = items.length < 2;
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('.photo-open');
    if (!b) return;
    items = Array.prototype.slice.call(b.closest('.gallery').querySelectorAll('.photo-open'));
    show(items.indexOf(b));
    box.showModal();
  });
  box.querySelector('.lb-close').addEventListener('click', function () { box.close(); });
  box.querySelector('.lb-prev').addEventListener('click', function () { show(index - 1); });
  box.querySelector('.lb-next').addEventListener('click', function () { show(index + 1); });
  box.addEventListener('click', function (e) {
    if (e.target === box || e.target.classList.contains('lb-stage')) box.close();
  });
  box.addEventListener('close', function () { img.removeAttribute('src'); });
  document.addEventListener('keydown', function (e) {
    if (!box.open) return;
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });

  // Swipe on phones
  var startX = null;
  box.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', function (e) {
    if (startX === null) return;
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50 && items.length > 1) show(dx < 0 ? index + 1 : index - 1);
    startX = null;
  });
})();
