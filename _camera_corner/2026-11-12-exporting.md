---
title: "Exporting for screen and print"
date: 2026-11-12
topic: Editing
order: 36
summary: "The same edit can look right on one screen and wrong everywhere else. Choose the size, colour space and sharpening for where the photograph is going."
challenge: "Choose one photograph and make two exports from it: one at Long Edge 2048 for the web and one cropped to 4:5 at Long Edge 1350 for Instagram, both in sRGB with location removed. Save each as an export preset. Then work out the largest print the full-size file makes at 300 ppi and at 200 ppi, and write the sums down."
quiz: |-
  Q: A 6000 × 4000 pixel file is printed at 300 ppi. How large is the print?
  * 20 × 13.3 inches
  - 30 × 20 inches
  - 60 × 40 inches
  - 12 × 8 inches

  Q: Which colour space is the safe choice for photographs going on the web?
  * sRGB
  - ProPhoto RGB
  - Adobe RGB

  Q: You want an Instagram photo in the 4:5 portrait shape at 1080 pixels wide. What size should you export?
  * 1080 × 1350 pixels
  - 1080 × 1080 pixels
  - 1350 × 1080 pixels
  - 1080 × 565 pixels

  Q: You change the Resolution box from 72 to 300 ppi on a 2048 pixel export for a website. What changes on screen?
  * Nothing; screens only use the pixel dimensions
  - The picture becomes four times sharper
  - The picture displays four times larger
---
Editing is only half the job. A photograph still has to leave Lightroom as a file that suits where it is going: a phone, a website, Instagram or a print on the wall. When a picture looks sharp and rich on your screen and soft, dark or dull somewhere else, the cause is usually the export, not the edit.

In Lightroom Classic, choose File > Export, or press Ctrl or Cmd Shift E. The dialog is long, but only a few sections decide how the file looks.

## Starting settings

- **Image Format:** JPEG for almost everything; TIFF only when a lab or publisher asks for it
- **Quality:** 75 to 85 for the web, 90 to 100 for print; higher settings make much bigger files for little visible gain on a screen
- **Color Space:** sRGB, unless a print lab asks for Adobe RGB
- **Image Sizing:** Long Edge 2048 pixels for the web; 1080 pixels wide for Instagram; full size for print
- **Resolution:** 300 pixels per inch for print; screens ignore the number
- **Output Sharpening:** Screen, Standard for the web; Matte Paper or Glossy Paper to match the print
- **Metadata:** Copyright Only, with Remove Location Info ticked for anything public

These are starting points. Make the change, then step away and look again before you keep it.

## File Settings

JPEG throws away fine detail to make the file smaller. At a quality of 80 the loss is hard to see on a screen; at 100 the file is far larger and looks almost the same.

Color Space matters more than most people expect. sRGB is the colour space the web, phones and most labs assume. A file exported in Adobe RGB or ProPhoto RGB and viewed somewhere that ignores its profile looks flat and dull. Use sRGB unless someone asks for something else.

Limit File Size To lets you enter a maximum size in K. Lightroom lowers the quality until the file fits. It is useful when a competition or website sets an upload limit, but check the result: a tight limit on a large file can leave blocky patches in smooth skies.

## Image Sizing and Output Sharpening

Tick Resize to Fit, choose Long Edge, and set the unit to pixels. Long Edge works for upright and landscape photographs alike, because it sizes whichever side is longer. Tick Don't Enlarge so a tight crop is not stretched beyond the pixels it has.

The Resolution box, in pixels per inch, only matters for print. A screen shows pixels, nothing else. A file 2048 pixels wide looks identical on a screen whether it says 72 or 300 ppi.

Resizing softens a picture slightly, so Output Sharpening adds a little back. Sharpen For offers Screen, Matte Paper and Glossy Paper, each at Low, Standard or High. This sits on top of the capture sharpening you set in the Develop module, which has its own lesson, Sharpening and noise. Standard suits most photographs. If edges show bright rims on the exported file, drop to Low.

## Metadata, watermarks and presets

The Metadata section sets what travels with the file. Choose Copyright Only for public sharing, so your name goes with the picture and little else does. Tick Remove Location Info. Many phones and some cameras record GPS positions, and a photograph taken in your garden can show anyone where you live.

Watermarking adds your name to the picture. Simple Copyright Watermark uses the copyright line; Edit Watermarks lets you design your own. Keep it small and faint in a corner. A large watermark spoils the picture and can still be cropped out.

Once the settings are right, click Add at the bottom left of the dialog and name the preset, for example Web 2048, Instagram 4:5 or Lab print. Next time choose it from the list, or use File > Export with Preset.

## The web and Instagram

A long edge of 2048 pixels is a safe general size for the web.

Instagram displays photographs 1080 pixels wide and accepts photos from 4:5 portrait to 1.91:1 landscape. Since 2025 its app also takes 3:4 portrait, 1080 × 1440 pixels, but 4:5 is still the safe tall shape for scheduling tools and older apps. Anything outside that range is cropped when you post it, so crop it yourself first; see Cropping and aspect ratios.

- **4:5 portrait:** 1080 × 5 ÷ 4 = 1350, so 1080 × 1350 pixels. It fills the most space in the feed
- **Square:** 1080 × 1080 pixels
- **1.91:1 landscape:** 1080 ÷ 1.91 = about 565, so 1080 × 565 pixels

## Sizing for print

For print, the sum is pixels divided by pixels per inch gives inches. A file of 6000 × 4000 pixels at 300 ppi prints at 6000 ÷ 300 = 20 inches by 4000 ÷ 300 = 13.3 inches, about 51 by 34 cm.

300 ppi is the usual standard for prints seen close up. A large print viewed from across a room is often fine at about 200 ppi. The same file at 200 ppi makes 6000 ÷ 200 = 30 by 4000 ÷ 200 = 20 inches.

Work it backwards when you know the print size. An A4 sheet is about 8.3 by 11.7 inches, so at 300 ppi it needs about 2480 by 3508 pixels. Typing a higher ppi into the Resolution box does not add detail; it only makes the print smaller.

Most labs work happily from sRGB. Some ask for Adobe RGB, which holds more saturated greens and cyans that their printers can use. Follow the lab's instructions, and download their printer profile if they offer one.

## Soft proofing

Soft proofing shows on screen roughly how a print will look on a given paper. In the Develop module tick Soft Proofing in the toolbar below the photograph, or press S. The background turns paper white and a Soft Proofing panel appears.

1. Choose the lab's or your printer's paper profile under Profile
2. Try Perceptual and Relative under Intent, and keep whichever looks closer to your edit
3. Tick Simulate Paper & Ink. Whites go creamy and blacks go grey, as they will on paper
4. Click Create Proof Copy, so the original edit is left alone
5. Adjust the proof copy, usually a little more brightness and contrast, and print from that

## Why prints come out dark

A screen gives out light; paper only reflects it. Most screens are set far brighter than a sheet of paper under room light, so an edit that looks right on a bright screen prints dark. The fix is a dimmer, calibrated screen; see Monitor calibration.

Before a large print, make a test. Crop an important part of the picture, such as a face or a patch of shadow detail, and print it at its final size on a small sheet. Or print three small versions at Exposure +0, +0.2 and +0.4 side by side. Judge them in daylight, away from direct sun.

## Worked scenarios

- **A website gallery.** A 6000 × 4000 file at Long Edge 2048 becomes 2048 × 1365 pixels, because 4000 × 2048 ÷ 6000 = 1365. JPEG quality 80, sRGB, Sharpen For Screen at Standard, Copyright Only, location removed
- **An Instagram portrait.** Crop to 4:5 in the Develop module, then export at Long Edge 1350. The file comes out 1080 × 1350 pixels and is not cropped again when you post it
- **A 24 × 16 inch print from a 6000 × 4000 file.** 6000 ÷ 24 = 250 ppi, comfortably enough for a print on a wall. Soft proof with the lab's profile, print a small test of the darkest area, then order the full size

## Common mistakes

- **Exporting for the web in Adobe RGB or ProPhoto RGB.** Colours look washed out on many sites. Export in sRGB
- **Sharpening twice, hard.** Heavy capture sharpening plus High output sharpening gives crunchy edges. Ease one of them
- **Leaving location data in.** Tick Remove Location Info for anything public
- **Uploading huge files.** Sites recompress them, often badly. Size them yourself
- **Printing straight from a bright screen.** The print comes back dark. Soft proof and test first
- **Expecting a higher ppi to make a better print.** It only changes the print size

## Checking your work

- Open the exported file in another app and check its pixel dimensions
- View it on a phone as well as the computer
- Look at it at 100 percent for halos from output sharpening and blocky skies from heavy compression
- Check the file's details to confirm the location has gone
- Hold a test print beside the screen in good light before you order the full size

> Edit for the picture. Export for the place it is going.
