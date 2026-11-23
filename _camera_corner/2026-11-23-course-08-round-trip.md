---
title: "Taking a photograph into Photoshop"
date: 2026-11-23
topic: Editing tips
permalink: /camera-corner/editing-tips/round-trip/
course_step: 8
order: 67
level: Intermediate
summary: "Do most of the work in Lightroom. When you need layers, careful retouching or to combine photographs, send it to Photoshop and bring it back."
challenge: "Send one Lightroom edit to Photoshop. Add a Curves adjustment layer, invert its mask, and paint it in over one area with a soft white brush at low opacity. Save, close, and find the -Edit file next to the original in Lightroom."
---
Lightroom is quick and keeps everything organised. Photoshop does things Lightroom cannot: layers, precise retouching, combining photographs. The usual approach is to edit in Lightroom first, then make a round trip to Photoshop and back.

If the Photoshop screen is unfamiliar, the Finding your way around lesson (tip 2) shows where everything is.

## Sending it across

1. Finish your Lightroom edit
2. Right-click the photograph (in the grid or filmstrip) and choose **Edit In**, then **Edit in Adobe Photoshop**. The shortcut is **Ctrl+E** (Cmd+E on a Mac)
3. For a RAW file, Photoshop opens with your Lightroom edits applied. For a JPEG or TIFF, Lightroom asks what to do: choose **Edit a Copy with Lightroom Adjustments** and click **Edit**

The file type it creates is set in Lightroom's Preferences (Settings on newer Macs), on the **External Editing** tab. The defaults (TIFF, ProPhoto RGB, 16 bit) keep the most quality, so leave them unless you have a reason.

## Layers, in brief

Think of layers as clear sheets laid over the photograph. The **Layers** panel is at the bottom right; if you cannot see it, choose **Window, Layers**.

- The **Background** layer is your photograph. Leave it alone
- **Ctrl+J** (Cmd+J on a Mac) duplicates the selected layer. Do retouching on the copy, so the original is always underneath
- Click the **eye** beside a layer to hide it and compare

## Adding an adjustment layer, step by step

Adjustment layers change everything below them, but can be changed or deleted at any time.

1. At the bottom of the Layers panel, click the **half-black, half-white circle**
2. Choose **Curves** (for brightness and contrast), **Levels**, **Hue/Saturation** or another adjustment
3. A new layer appears in the Layers panel, and its settings open in the **Properties** panel. If Properties does not appear, choose **Window, Properties**
4. Make the change. For Curves: click on the diagonal line near the middle and drag up to brighten, or down to darken
5. To change it later, double-click the layer's left-hand icon to open its settings again

## Layer masks: applying it to one area

Every adjustment layer comes with a **mask**, the white rectangle to the right of the layer's icon. White means the adjustment shows everywhere.

- **Black conceals.** Painting black on the mask hides the adjustment there
- **White reveals.** Painting white shows it again

To apply a Curves brightening to just one area:

1. Click the white **mask thumbnail** on the adjustment layer, so it has a frame around it
2. Press **Ctrl+I** (Cmd+I on a Mac). The mask turns black and the adjustment disappears
3. Press **B** for the Brush tool. In the options bar along the top, set **Opacity** to about 20%. Right-click the photograph and choose a soft round brush, with **Hardness** at 0%
4. Press **D**, then **X** if needed, so the top colour square at the bottom of the toolbar is **white**
5. Paint over the area you want brightened. Each stroke adds a little more. Change brush size with **[** and **]**
6. Painted too much? Press **X** to switch to black and paint it back

## Camera Raw inside Photoshop

To use Lightroom-style sliders on a layer in Photoshop:

1. Right-click the layer in the Layers panel and choose **Convert to Smart Object**. This keeps the settings editable
2. Choose **Filter, Camera Raw Filter** (Shift+Ctrl+A, or Shift+Cmd+A on a Mac)
3. Use the sliders, then click **OK**. Double-click **Camera Raw Filter** under the layer to change it later

## Coming back to Lightroom

1. Choose **File, Save** (**Ctrl+S**, or Cmd+S on a Mac). Do not use Save As, and do not change the file name or folder
2. Close the photograph in Photoshop
3. In Lightroom, the file appears next to the original with **-Edit** in its name, layers and all

To change it later, select the -Edit file in Lightroom, press **Ctrl+E** again and choose **Edit Original**, so the layers are kept.

Do any final Lightroom tweaks, such as sharpening for output, on the -Edit file.

> Lightroom for most things, Photoshop for the things only Photoshop can do.
