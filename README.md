# Levern Camera Club website

The club website, published free with GitHub Pages at
**https://grantfitfuel.github.io/levern-camera-club/**

Everything day to day (competition results, Camera Corner articles, the logo,
weekly themes and the syllabus) is edited through a simple web form at
**[app.pagescms.org](https://app.pagescms.org)**. You never need to touch the files here.

## Adding competition results

1. Go to [app.pagescms.org](https://app.pagescms.org) and sign in with GitHub.
2. Open **levern-camera-club**, then **Competition results**.
3. Tap **Add an entry**. Fill in the competition name, the date and the type
   (Seasonal or Inter-club; weekly competition winners are not shown).
4. Under **Photos**, tap **Add an entry** for each photo:
   upload the photo, type the photographer's name and choose the placing.
   Photo title, social media and camera settings are all optional;
   anything left blank simply isn't shown.
5. Tap **Save**. The website updates by itself within a minute or two.

Photos are shown at their true shape, never cropped. Tap any photo on the site
to open it full screen; swipe or use the arrow keys to move between photos.

Tip: phone and camera photos are often 5 to 15 MB. Exporting at around
2000 pixels on the long edge keeps the site fast and is plenty for screens.

## Camera Corner

Under **Camera Corner lessons**, add a lesson: title, topic, a short summary and the lesson
itself. Optional extras: a level, a "Try this" exercise, and a quiz. To put a lesson on the
**Start here** path, give it a position (1 for the first lesson a newcomer should read).
Quiz format: start each question with `Q:`, put the right answer on a line starting with `*`
and wrong answers on lines starting with `-`, with a blank line between questions.

## Home page banner and "Out and about"

- **Home page banner (rotating photos):** add a photo for each genre (landscape,
  portrait, macro and so on), with the photographer's name. They rotate every
  few seconds at the top of the home page. Wide, landscape-shaped photos fill
  it best; taller ones are shown whole with a soft blurred border.
- **Out and about (candid shots):** add behind-the-scenes photos from club
  outings, with an optional caption, place and date. The newest six also
  appear on the home page.

Both stay hidden on the site until the first photo is added.

## Logo and club details

Under **Club details and logo**, upload the logo and (optionally) add a
contact email and the club's Facebook page link. They appear across the site.

## Letting committee members upload

1. On GitHub, open this repository, then **Settings → Collaborators → Add people**.
2. Invite the committee member by their GitHub username or email.
3. Once they accept, they can sign in to app.pagescms.org and see the same forms.

They need a free GitHub account. You can remove someone at any time from the same page.

## New season

Update **Weekly competition themes** and **Club syllabus** in
Pages CMS with the new dates. Results from earlier seasons stay on the site,
grouped by season.

## For anyone technical

A plain [Jekyll](https://jekyllrb.com) site built by GitHub Pages.
`_competitions/` and `_camera_corner/` hold the content, `_data/` holds the
syllabus, themes and settings, and `.pages.yml` defines the Pages CMS forms.
If the club moves to its own web address, set `baseurl: ""` in `_config.yml`.
