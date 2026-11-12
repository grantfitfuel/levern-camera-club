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

/* Camera Corner: topics, search, reading progress and quizzes */
(function () {
  var KEY = 'lccLearn';
  var prog = { read: {}, quiz: {} };
  try { var v = JSON.parse(localStorage.getItem(KEY) || 'null'); if (v) prog = { read: v.read || {}, quiz: v.quiz || {} }; } catch (e) {}
  var save = function () { try { localStorage.setItem(KEY, JSON.stringify(prog)); } catch (e) {} };
  var pad = function (n) { return n < 10 ? '0' + n : '' + n; };

  /* ----- lesson list ----- */
  var learn = document.querySelector('[data-learn]');
  if (learn && learn.querySelector('[data-list]')) {
    var items = Array.prototype.slice.call(learn.querySelectorAll('.lesson'));
    var tabs = learn.querySelectorAll('.ltopics button');
    var input = learn.querySelector('[data-search]');
    var note = learn.querySelector('[data-note]');
    var list = learn.querySelector('[data-list]');
    var idx = [];
    try { idx = JSON.parse(document.getElementById('learn-index').textContent); } catch (e) {}
    var byUrl = {}; idx.forEach(function (x) { x.t = x.title.toLowerCase(); x.s = (x.summary || '').toLowerCase(); x.b = (x.body || '').toLowerCase(); byUrl[x.url] = x; });
    var sel = learn.querySelector('.ltopics [aria-selected="true"]');
    var topic = sel ? sel.getAttribute('data-topic') : 'all';
    var original = items.slice();

    items.forEach(function (li) {
      var id = li.getAttribute('data-id');
      if (prog.read[id]) { li.classList.add('is-read'); li.querySelector('.done').hidden = false; }
      if (prog.quiz[id]) { var q = li.querySelector('.qdone'); q.textContent = 'Quiz ' + prog.quiz[id]; q.hidden = false; }
    });
    var readCount = items.filter(function (li) { return prog.read[li.getAttribute('data-id')]; }).length;
    var pl = learn.querySelector('[data-progress]');
    if (readCount) { pl.innerHTML = 'You have read <b>' + readCount + '</b> of ' + items.length + ' lessons'; pl.hidden = false; }

    var esc = function (s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
    var terms = function (q) { return q.toLowerCase().replace(/[^a-z0-9/.\s-]/g, ' ').split(/\s+/).filter(function (w) { return w.length > 1; }); };

    function render() {
      var q = input ? input.value.trim() : '';
      var ws = terms(q);
      learn.querySelector('.ltopics').classList.toggle('muted', ws.length > 0);
      var shown;
      if (ws.length) {
        shown = original.map(function (li) {
          var x = byUrl[li.getAttribute('data-id')]; if (!x) return null;
          var score = 0;
          for (var k = 0; k < ws.length; k++) {
            var w = ws[k], t = x.t.indexOf(w) > -1, s = x.s.indexOf(w) > -1, n = x.b.split(w).length - 1;
            if (!t && !s && !n) return null;
            score += (t ? 20 : 0) + (s ? 6 : 0) + Math.min(n, 12);
          }
          return { li: li, x: x, score: score };
        }).filter(Boolean).sort(function (a, b) { return b.score - a.score; });
        note.hidden = false;
        note.textContent = shown.length ? shown.length + (shown.length === 1 ? ' lesson matches' : ' lessons match') + ' \u201c' + q + '\u201d' : 'No lessons match \u201c' + q + '\u201d. Try another word, such as tripod, sunset or editing.';
        shown.forEach(function (r) {
          var sn = r.li.querySelector('.lsnip');
          var inHead = ws.some(function (w) { return r.x.t.indexOf(w) > -1 || r.x.s.indexOf(w) > -1; });
          var i = r.x.b.indexOf(ws[0]);
          if (!inHead && i > -1) {
            var a = Math.max(0, i - 60), b = Math.min(r.x.body.length, i + 110);
            var text = (a ? '\u2026' : '') + r.x.body.slice(a, b).trim() + (b < r.x.body.length ? '\u2026' : '');
            var re = new RegExp('(' + ws.map(function (w) { return w.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&'); }).join('|') + ')', 'gi');
            sn.innerHTML = esc(text).replace(re, '<mark>$1</mark>'); sn.hidden = false;
          } else { sn.hidden = true; }
        });
        shown = shown.map(function (r) { return r.li; });
      } else {
        note.hidden = true;
        original.forEach(function (li) { li.querySelector('.lsnip').hidden = true; });
        if (topic === 'start') {
          shown = original.filter(function (li) { return li.hasAttribute('data-start'); })
            .sort(function (a, b) { return a.getAttribute('data-start') - b.getAttribute('data-start'); });
        } else {
          shown = original.filter(function (li) { return topic === 'all' || li.getAttribute('data-topic') === topic; });
        }
      }
      original.forEach(function (li) { li.hidden = true; });
      shown.forEach(function (li, i) { li.hidden = false; li.querySelector('.ln').textContent = pad(i + 1); list.appendChild(li); });
    }

    tabs.forEach(function (b) {
      b.addEventListener('click', function () {
        topic = b.getAttribute('data-topic');
        tabs.forEach(function (x) { x.setAttribute('aria-selected', x === b ? 'true' : 'false'); });
        if (input) input.value = '';
        try { history.replaceState(null, '', '#' + topic); } catch (e) {}
        render();
      });
    });
    if (input) input.addEventListener('input', render);
    var h = location.hash.slice(1);
    if (h) { var t = learn.querySelector('.ltopics [data-topic="' + h + '"]'); if (t) { topic = h; tabs.forEach(function (x) { x.setAttribute('aria-selected', x === t ? 'true' : 'false'); }); } }
    render();
  }

  /* ----- lesson page ----- */
  var art = document.querySelector('[data-lesson]');
  if (!art) return;
  var id = art.getAttribute('data-lesson');
  var bar = document.querySelector('[data-read-progress] span');
  var end = art.querySelector('[data-read-end]');
  var onScroll = function () {
    var r = art.getBoundingClientRect();
    var total = r.height - window.innerHeight;
    var p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1;
    if (bar) bar.style.width = (p * 100) + '%';
  };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if (end && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (en) {
      if (en[0].isIntersecting) { prog.read[id] = 1; save(); io.disconnect(); }
    });
    io.observe(end);
  }

  /* quiz: "Q: question" then "* right answer" and "- wrong answer" lines */
  var qd = document.getElementById('quiz-data');
  var box = art.querySelector('[data-quiz]');
  if (!qd || !box) return;
  var raw = ''; try { raw = JSON.parse(qd.textContent) || ''; } catch (e) {}
  var qs = [];
  raw.replace(/\r/g, '').split('\n').forEach(function (line) {
    line = line.trim(); if (!line) return;
    if (/^Q:\s*/.test(line)) qs.push({ q: line.replace(/^Q:\s*/, ''), opts: [] });
    else if (/^[*-]\s+/.test(line) && qs.length) qs[qs.length - 1].opts.push({ t: line.replace(/^[*-]\s+/, ''), ok: line.charAt(0) === '*' });
  });
  qs = qs.filter(function (q) { return q.opts.length > 1; });
  if (!qs.length) { box.hidden = true; return; }
  var body = box.querySelector('.quiz-body'), score = box.querySelector('.quiz-score'), answered = 0, right = 0;
  qs.forEach(function (q, n) {
    var wrap = document.createElement('div'); wrap.className = 'quiz-q';
    var p = document.createElement('p'); p.textContent = (n + 1) + '. ' + q.q; wrap.appendChild(p);
    var ol = document.createElement('ol');
    var opts = q.opts.slice().sort(function () { return Math.random() - 0.5; });
    var btns = [];
    opts.forEach(function (o) {
      var li = document.createElement('li'), b = document.createElement('button');
      b.type = 'button'; b.textContent = o.t; btns.push(b);
      b.addEventListener('click', function () {
        btns.forEach(function (x, k) { x.disabled = true; if (opts[k].ok) x.classList.add('right'); });
        if (!o.ok) b.classList.add('wrong'); else right++;
        answered++;
        if (answered === qs.length) {
          score.textContent = 'You scored ' + right + ' out of ' + qs.length + (right === qs.length ? '. Perfect!' : '.');
          var prev = prog.quiz[id]; var best = prev ? Math.max(+prev.split('/')[0], right) : right;
          prog.quiz[id] = best + '/' + qs.length; prog.read[id] = 1; save();
        }
      });
      li.appendChild(b); ol.appendChild(li);
    });
    wrap.appendChild(ol); body.appendChild(wrap);
  });
})();

/* Camera Corner diagrams */
(function () {
  var NS = 'http://www.w3.org/2000/svg';
  var FLIP = { a: [1, 1], b: [-1, 1], c: [1, -1], d: [-1, -1] };
  var HARMONY = { comp: [0, 6], ana: [11, 0, 1], tri: [0, 4, 8] };
  function show(el, on) { if (el) { if (on) el.removeAttribute('display'); else el.setAttribute('display', 'none'); } }
  function apply(fig, v) {
    var kind = fig.getAttribute('data-dg');
    if (kind === 'thirds') {
      show(fig.querySelector('.g-thirds'), v === 'thirds');
      show(fig.querySelector('.g-phi'), v === 'phi');
    } else if (kind === 'golden') {
      var sp = fig.querySelector('.g-spiral'), f = FLIP[v];
      show(sp, !!f);
      show(fig.querySelector('.g-phi'), v === 'phi');
      if (f) sp.setAttribute('transform', 'translate(' + (f[0] < 0 ? 600 : 0) + ' ' + (f[1] < 0 ? 400 : 0) + ') scale(' + f[0] + ' ' + f[1] + ')');
    } else if (kind === 'colourwheel') {
      var pick = HARMONY[v] || [];
      fig.querySelectorAll('.cw-seg').forEach(function (s) {
        s.style.opacity = pick.indexOf(+s.getAttribute('data-i')) > -1 ? 1 : 0.22;
      });
      fig.querySelectorAll('.cw-legend text').forEach(function (t) {
        t.classList.toggle('on', t.getAttribute('data-for') === v);
      });
      var marks = fig.querySelector('.cw-marks');
      while (marks.firstChild) marks.removeChild(marks.firstChild);
      var pts = pick.map(function (i) {
        var a = (-90 + 30 * i) * Math.PI / 180;
        return (210 + 117 * Math.cos(a)).toFixed(1) + ',' + (200 + 117 * Math.sin(a)).toFixed(1);
      });
      var shape = document.createElementNS(NS, pick.length > 2 && v === 'tri' ? 'polygon' : 'polyline');
      shape.setAttribute('points', pts.join(' '));
      marks.appendChild(shape);
      pts.forEach(function (p) {
        var c = document.createElementNS(NS, 'circle'), xy = p.split(',');
        c.setAttribute('cx', xy[0]); c.setAttribute('cy', xy[1]); c.setAttribute('r', 7);
        c.setAttribute('fill', '#fff');
        marks.appendChild(c);
      });
    }
  }
  document.querySelectorAll('.dg[data-dg]').forEach(function (fig) {
    var btns = fig.querySelectorAll('.dg-chips button');
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        btns.forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
        apply(fig, b.getAttribute('data-v'));
      });
    });
    var on = fig.querySelector('.dg-chips button[aria-pressed="true"]');
    if (on) apply(fig, on.getAttribute('data-v'));
  });
})();
