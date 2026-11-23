---
title: "Taking a photograph into Photoshop"
date: 2026-11-23
topic: Editing course
course_step: 7
order: 66
level: Intermediate
summary: "Do most of the work in Lightroom. When you need layers, careful retouching or to combine photographs, send it to Photoshop and bring it back."
challenge: "Send one Lightroom edit to Photoshop. Add a Curves adjustment layer, invert its mask, and paint it in over one area with a soft white brush at low opacity. Save, close, and find the -Edit file next to the original in Lightroom."
quiz: |-
  Q: Which shortcut sends a photograph from Lightroom Classic to Photoshop?
  * Ctrl+E (Cmd+E on a Mac)
  - Ctrl+J (Cmd+J on a Mac)
  - Ctrl+Shift+E (Cmd+Shift+E on a Mac)

  Q: On a layer mask, what does painting with black do?
  * Hides that layer in the area you paint
  - Darkens the photograph
  - Deletes the layer

  Q: Why use an adjustment layer instead of adjusting the photograph directly?
  * It can be changed, masked or removed later without harming the photograph
  - It makes the file smaller
  - Photoshop cannot adjust photographs directly

  Q: What happens when you save and close in Photoshop after a round trip?
  * The edited file appears in Lightroom next to the original
  - The original RAW file is overwritten
  - Nothing, you must import it again
---
Lightroom is quick and keeps everything organised. Photoshop does things Lightroom cannot: layers, precise retouching, combining photographs. The usual approach is to edit in Lightroom first, then make a round trip to Photoshop and back.

## Sending it across

1. Finish your Lightroom edit
2. Press **Ctrl+E** (Cmd+E on a Mac), or right-click and choose Edit In, then Adobe Photoshop
3. For a RAW file it opens straight away with your Lightroom edits applied. For a JPEG or TIFF, Lightroom asks: choose **Edit a Copy with Lightroom Adjustments**

Lightroom's External Editing preferences decide the file type. The defaults (TIFF, ProPhoto RGB, 16 bit) keep the most quality, so leave them unless you have a reason.

## Layers, in brief

Think of layers as clear sheets laid over the photograph:

- The **Background** layer is your photograph. Leave it alone
- **Ctrl+J** (Cmd+J on a Mac) duplicates a layer. Do retouching on the copy, so the original is always underneath
- **Adjustment layers** (the half-filled circle at the bottom of the Layers panel) such as Curves, Levels or Hue/Saturation change everything below them, but can be changed or deleted at any time

## Layer masks

Every adjustment layer comes with a white mask. Paint on it with a soft brush (**B**):

- **Black conceals.** Painting black hides the layer in that area
- **White reveals.** Painting white shows it again

Press **D** for black and white colours, and **X** to swap them. To apply an adjustment to only one area, select the mask and press **Ctrl+I** (Cmd+I) to invert it to black, then paint white where you want the effect. Keep brush opacity low, around 10 to 20%, and build up gradually.

## Camera Raw inside Photoshop

**Filter, Camera Raw Filter** (Shift+Ctrl+A, or Shift+Cmd+A on a Mac) gives you Lightroom's sliders inside Photoshop. Convert the layer to a Smart Object first (right-click the layer) so the settings stay editable.

## Coming back

Press **Ctrl+S** (Cmd+S on a Mac) and close. The file appears in Lightroom next to the original with -Edit in its name, layers and all. To change it later, select the -Edit file and press Ctrl+E again, choosing **Edit Original** so the layers are kept.

Do any final Lightroom tweaks, such as sharpening for output, on the -Edit file.

> Lightroom for most things, Photoshop for the things only Photoshop can do.
