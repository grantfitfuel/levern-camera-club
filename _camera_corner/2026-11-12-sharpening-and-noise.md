---
title: "Sharpening and noise"
date: 2026-11-12
topic: Editing
order: 31
summary: "Where noise comes from, how to remove it with Denoise or the sliders, how to sharpen without halos, and the order to do it in."
challenge: "Take a photograph shot at ISO 3200 or higher. Make two versions: one with only the manual Luminance slider at 25, and one using Denoise at 50. Sharpen both with the same settings, holding Alt or Option on the Masking slider until the sky or background is black. Compare them at 100 percent and note which keeps more fine detail."
quiz: |-
  Q: You underexpose by two stops at ISO 1600 and raise Exposure by +2 in Lightroom. How noisy will it look, roughly?
  * About as noisy as a correctly exposed frame at ISO 6400, sometimes worse
  - As clean as ISO 1600
  - As clean as ISO 400

  Q: What does raising the Masking slider in the Detail panel do?
  * Stops smooth areas such as sky and skin from being sharpened
  - Sharpens only the sky
  - Removes colour noise
  - Adds grain to edges

  Q: How do you see a halo from over-sharpening?
  * View at 100 percent along a high contrast edge
  - View the whole picture at fit-to-screen size
  - Turn on clipping warnings

  Q: In what order should you work?
  * Denoise first, then capture sharpening, then output sharpening on export
  - Output sharpening first, then Denoise
  - Capture sharpening first, then Denoise
  - Sharpening and Denoise in any order
---
Sharpening and noise reduction pull in opposite directions. Sharpening adds contrast along edges; noise reduction smooths small specks away. Too much of either ruins a photograph, and they are best judged together, close up, in the right order.

This lesson uses Lightroom Classic's names. Everything here lives in the Detail panel of the Develop module, in the Enhance dialog, and in the Export dialog.

## Starting values

- **Denoise Amount:** 40 to 60 for high ISO RAW files; lower if skin or stone starts to look waxy
- **Manual Luminance:** 10 to 30 for moderate noise, with Detail left near its default
- **Color noise reduction:** about 25, Lightroom's usual default for RAW files
- **Sharpening Amount:** 30 to 60
- **Radius:** 0.8 to 1.2 pixels; under 1 for fine detail such as foliage, a little over 1 for portraits
- **Detail:** 15 to 35
- **Masking:** 30 to 80, higher for skies and skin
- **Output sharpening:** Screen, Standard, for most web use

These are starting points. Make the change, then step away and look again before you keep it.

## What noise is

Noise is the fine, random speckle you see in dark, smooth areas: a grainy night sky, a gritty shadow under a bridge. There are two kinds. Luminance noise is speckles of light and dark. Colour noise is blotches of red, green and magenta.

Noise comes mainly from too little light reaching the sensor. High ISO is what you use when light is short, which is why high ISO photographs are noisier. Raising ISO from 1600 to 6400 is two stops, because 1600 × 2 × 2 is 6400.

Lifting shadows in editing shows the same noise. Raise Exposure by +2 and you make the picture four times as bright, noise included. A photograph underexposed by two stops at ISO 1600 and brightened by +2 in Lightroom will usually look roughly as noisy as one taken at ISO 6400, sometimes worse. Expose well in the camera and there is less to fix later.

## Denoise

Lightroom Classic's Denoise uses an AI model to remove noise while keeping fine detail. It works on RAW files. In current versions of Lightroom Classic it sits in the Noise Reduction section of the Detail panel: turn on Denoise and set the Amount. It is applied to the RAW file itself and can be changed or turned off later, like any other slider.

Versions from before mid 2025 work differently. There you choose Photo > Enhance, and Lightroom creates a separate DNG file alongside the original, much larger than the RAW. If your version does that, use Denoise on the frames that need it, not on every photograph from a shoot. Either way it takes some seconds per photograph, so it is still worth saving for the frames that need it.

Start around 50 and look at the preview at 100 percent. Raise it if the speckle remains; lower it if fur, hair, grass or stone starts to look painted.

## Manual noise reduction

For mild noise, or on files Denoise will not accept, use the sliders in the Noise Reduction section of the Detail panel.

- **Luminance:** smooths light and dark speckle. Its **Detail** and **Contrast** sliders below it hold back fine detail and texture
- **Color:** removes colour blotches. Its **Detail** and **Smoothness** sliders refine the result

Colour noise is the uglier of the two, and removing it costs little. Luminance noise often looks like film grain, and removing all of it costs fine detail. Accept a little.

## Capture sharpening

Every digital photograph is slightly soft when it leaves the sensor. Capture sharpening restores the crispness. In the Sharpening section of the Detail panel there are four sliders.

- **Amount:** how strong the sharpening is
- **Radius:** how wide the edge contrast spreads, in pixels. Small for fine detail, larger for broad shapes
- **Detail:** how much it sharpens fine texture. Low values sharpen only clear edges; high values sharpen everything, including noise
- **Masking:** which areas it sharpens at all. At 0 it sharpens everywhere. Raise it and smooth areas, such as sky and skin, are left alone while edges stay sharp

Hold Alt or Option while dragging any of these sliders to see a greyscale preview of what it is doing. On Masking, the preview is the most useful: white areas are sharpened, black areas are protected. Drag Masking until the sky is black and only the edges you care about are white.

## Halos

A halo is a bright outline along an edge where dark meets light, often with a dark line on the other side: a pale rim around a tree against the sky, a white edge around a roofline. It comes from too much Amount, too large a Radius, or both. Halos are the surest sign of over-sharpening, and they also come from Clarity and Dehaze.

To find them, view at 100 percent. Press Z to zoom, or click 1:1 in the Navigator panel, and move to an edge where a dark subject meets a bright sky. At fit-to-screen size halos are often invisible, which is why so many over-sharpened photographs get shared.

If you see a halo, lower Radius first, then Amount.

## Output sharpening

Capture sharpening restores what the sensor lost. Output sharpening makes up for what resizing and printing lose. Set it in the Export dialog under Output Sharpening: tick Sharpen For and choose Screen, Matte Paper or Glossy Paper, then Low, Standard or High.

Screen at Standard suits most web use. Matte paper softens fine detail more than glossy, so it takes more. It is applied only to the exported file, so judge it on the export, not in the Develop module. For sizes and formats, see Exporting for screen and print.

## The order of work

1. **Denoise first.** It works on the RAW data, before anything else
2. **Edit as normal.** Exposure, contrast, colour and masks
3. **Check noise again.** Lifted shadows may have brought some back
4. **Capture sharpening.** Set Masking first to protect smooth areas, then Amount, Radius and Detail
5. **Output sharpening on export.**

Lightroom always applies Denoise before sharpening, whatever order you set them in, but sharpening judged on a noisy picture is usually set wrong. Denoise first, then set sharpening on the clean result.

## Worked scenarios

- **A city street at night, ISO 6400.** Run Denoise at 50. Keep Color near 25. Sharpen with Amount 40, Radius 1.0, Detail 25, Masking 60, so the wet road and dark sky stay smooth while the signs stay crisp
- **A woodland at ISO 100.** Little noise to remove. Sharpen with Amount 50, Radius 0.8, Detail 35, Masking 20, so leaves and bark keep their texture. Check for halos where branches cross bright sky
- **A portrait by a window, ISO 800.** Leave Luminance at 10 to 15. Sharpen with Amount 35, Radius 1.1, Masking 70, so the eyes and eyelashes sharpen while the skin stays smooth

## Common mistakes

- **Judging at fit-to-screen size.** Halos and noise hide. Always check at 100 percent
- **Sharpening the noise.** Detail and Amount too high with Masking at 0 turn a clean sky gritty. Raise Masking
- **Waxy skin and stone.** Too much Luminance or Denoise. Lower it and accept a little grain
- **Sharpening twice for the screen.** Heavy capture sharpening plus High output sharpening on a small web export. Pick one to ease off
- **Sharpening a soft photograph.** Sharpening cannot fix missed focus or camera shake. It only makes the blur look crunchy

## Checking your work

- View at 100 percent along the highest contrast edges and look for halos
- Hold Alt or Option on the Masking slider to confirm the sky and skin are protected
- Look at a smooth area, such as sky, for speckle, blotches or a waxy look
- Export, then view the exported file at the size people will see it

> Sharpen until the edges are crisp at 100 percent. Then take a little back.
