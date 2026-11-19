---
title: "Editing lightly"
date: 2026-11-12
topic: Editing
order: 28
summary: "Editing is not cheating, and it does not have to take hours. A few small adjustments bring a photograph back to what you saw."
challenge: "Edit one photograph using only the first five steps on the list, in order. Then compare it with a version you have edited before and see which you prefer. Use the backslash key to check before and after, and press J to check for clipping."
quiz: |-
  Q: Why does a RAW file look flat straight from the camera?
  * It has none of the camera's own processing applied
  - The camera recorded it badly
  - RAW files are always underexposed

  Q: You raise the exposure slider by +1. What happens to the brightness?
  * It doubles
  - It rises by 10 percent
  - It halves

  Q: You crop an 8192 by 5464 pixel file to 4:5 at full height. Roughly how many pixels remain?
  * About 24 million
  - About 45 million
  - About 12 million

  Q: Which of these is a sign of overediting?
  * Halos where the sky meets the land
  - A level horizon
  - Accurate white balance
---
Light editing goes a long way. The aim is to bring the photograph back to what you saw, not to turn it into something it was not. This lesson uses Lightroom, with Photoshop for the occasional small tweak.

Some photographers love editing and some would rather be out shooting. Either way, the same few steps do most of the work.

## What you need

- **Editing software.** Lightroom does everything in this lesson
- **RAW files,** for the most room to adjust
- **A screen that is not too bright.** A screen at full brightness makes every photograph look brighter than it is, and you will edit them too dark
- **Somewhere without glare** on the screen

## Starting settings

- **Mode:** Aperture priority, exposing so the brightest sky keeps detail; shadows lift cleanly from RAW later
- **Aperture:** f/8 to f/11 for scenes like a coast at sunset; wider only when you want shallow focus
- **Shutter speed:** 1/125 s to 1/500 s handheld; slower on a tripod once the light fades
- **ISO:** Lowest native ISO, usually 100, for the cleanest shadows to lift in editing
- **Focal length:** Frame slightly wider than the final picture, leaving room to straighten and crop
- **File format:** RAW, 14-bit if offered, for 16,384 levels per channel instead of a JPEG's 256

These are starting points. Take a frame, check the histogram, and adjust one thing at a time.

## Why RAW files look flat

A RAW file holds everything the sensor recorded, without the camera's own processing. That gives you room to adjust, but it means the file looks dull until you do. A little contrast and colour is not exaggeration; it is finishing the job.

The room is real. A 14-bit RAW file records 16,384 levels of brightness in each colour channel, because 2 multiplied by itself 14 times is 16,384. An 8-bit JPEG has 256. That is why you can lift shadows in a RAW file without the tones breaking into bands.

## A simple order of work

- **Straighten and crop.** Level the horizon first
- **White balance.** Make whites look white, or warm or cool the photograph on purpose
- **Exposure.** Set the overall brightness
- **Highlights and shadows.** Recover detail at both ends
- **Contrast and texture.** Add a little, then back off
- **Colour.** Small changes to saturation or individual colours
- **Spot removal.** Dust spots and small distractions

## The order in practice

Here is the same list worked through on one photograph: a coast at sunset that looks dull and slightly dark straight from the camera.

1. **Straighten.** The horizon tilts down to the right. Use the straighten tool and drag along the horizon. Then crop to remove any distraction at the edges
2. **White balance.** The camera chose a neutral setting and the sunset looks grey. Warm it a few hundred kelvin, for example from 5200 K to 5800 K. For reference, daylight is around 5500 K, shade around 7000 K, and household tungsten bulbs around 3000 K
3. **Exposure.** Raise it until the mid-tones look right. Each whole step on the exposure slider is one stop: +1 doubles the brightness. Here +0.7 is enough
4. **Highlights and shadows.** Pull highlights down until the sky near the sun shows detail again, and lift shadows until the rocks are no longer black holes
5. **Contrast and texture.** Add a little contrast to counter the lifted shadows
6. **Colour.** Use vibrance rather than saturation. Vibrance boosts muted colours more than strong ones and protects skin tones
7. **Spot removal.** Turn on the dust spot view and clean the sky, where dust shows most

Do the steps in this order. Each one changes the next, and going back and forth wastes time.

## Cropping without losing too much

Cropping throws pixels away, so it helps to know how many. A 45-megapixel file from a Canon EOS R5 is 8192 by 5464 pixels.

- **4:5 crop at full height:** 5464 × 4 ÷ 5 = about 4371 pixels wide. 4371 × 5464 is about 23.9 million pixels, roughly half the file
- **Square crop:** 5464 × 5464 is about 29.9 million pixels

Either is still plenty for screens and for most prints. A tight crop from a small part of the frame is where quality starts to suffer.

## Converging verticals

For buildings, the Transform tool in Lightroom straightens converging verticals. Use it only when the photograph calls for it. When the lean is the point of the picture, leave it.

## Signs you have gone too far

- Halos along the edges where sky meets land
- Skies darker than the ground in daylight
- Colours that look like no real place
- Shadows lifted until the picture looks grey

A useful habit: leave an edit overnight and look at it again before you share it.

## Common mistakes

- **Editing on a bright screen.** Photographs look fine on your screen and dark everywhere else. Turn the brightness down to around the middle
- **Starting every photograph from scratch.** Photographs taken in the same light need the same edit. Edit one, then copy or sync its settings to the rest and adjust from there
- **Over-sharpening.** Fine white lines along edges and a gritty sky. Look at 100 percent and reduce the amount
- **Too much noise reduction.** Skin and stone go smooth and waxy. Accept a little grain
- **Saturation instead of vibrance.** Saturation pushes strong colours over the edge first. Vibrance is gentler

## Checking your edit

- Press the backslash key in Lightroom's Develop module to flip between before and after. If the after looks nothing like the place, step back
- Press J to show clipping warnings. Red areas have lost highlight detail and blue areas have lost shadow detail
- View at 100 percent to check for halos, noise and over-sharpening
- View small, as a thumbnail, to check the overall balance of light and dark

> Edit until it looks like the moment. Then stop.
