---
title: "Affinity: layers, retouching and export"
date: 2026-11-23
topic: Affinity
permalink: /camera-corner/editing-tips/affinity/layers-and-export/
course_step: 3
order: 77
level: Intermediate
summary: "Adjustment layers, masks, clean-up and dodge and burn in the Pixel studio, then exporting the finished JPEG."
challenge: "Add a Curves adjustment layer and paint it into one area only. Remove one distraction with the Inpainting Brush on a new layer. Export a 2000 pixel sRGB JPEG and check its size."
---
The Pixel studio is where Affinity works like Photoshop. Everything here is done on layers, so it can all be changed later.

## Adjustment layers

1. In the **Layers** panel (right), click the **Adjustments** icon (a half-filled circle) at the bottom, or open the **Adjustments** panel
2. Choose **Curves**, **Levels**, **HSL**, **Brightness / Contrast**, **White Balance** or any of the others
3. A settings window opens. Make the change. For Curves, drag the middle of the line up to brighten or down to darken
4. Close the settings. The adjustment appears as a layer. Double-click its icon to change it again

## Applying it to one area

Adjustment layers have a built-in mask.

1. Select the adjustment layer
2. Choose **Layer, Invert** so the adjustment is hidden everywhere
3. Press **B** for the **Paint Brush**. In the context toolbar, set a soft brush with **Opacity** around 20%
4. Paint in **white** to reveal the adjustment where you want it; paint in **black** to hide it again. Press **X** to swap colours

The **Adjustment Brush** (in the toolbar) is a shortcut: paint, and it creates the adjustment layer and mask for you. It starts as Exposure; change the type in the context toolbar.

## Clean-up

Make a new empty layer first (**Layer, New Pixel Layer**, or the + icon in the Layers panel), and set the tools to **Current Layer & Below** in the context toolbar so they work on the empty layer.

- **Healing Brush (J):** hold **Alt** (Option on a Mac) and click to choose a clean area, then paint over the problem. It blends texture and colour
- **Inpainting Brush:** paint over a distraction and Affinity fills it in. Good for wires, people in the distance and litter. It is in the same group as the Healing Brush
- **Clone Brush (K):** copies exactly. Alt-click (Option-click) to set the source, then paint. Best near straight edges and patterns

Check the rules before entering a retouched photograph in a competition.

## Dodge and burn

1. Choose **Layer, New Pixel Layer**
2. In the Layers panel, set its blend mode (the menu at the top) to **Overlay**
3. With a soft **Paint Brush** at 5 to 10% opacity, paint **white** to lighten and **black** to darken
4. Lower the layer's opacity if it goes too far

The **Filter Brush** in the toolbar paints effects such as clarity or blur onto just one area.

## Exporting

1. Choose **File, Export**
2. Choose **JPEG**
3. Set the size: type the long edge, such as **2000**, into the width or height box (keep the lock on so the other updates)
4. **Quality:** High or Best
5. If there is a colour profile setting (often under more or advanced options), choose **sRGB**
6. Click **Export**, choose a folder and a file name

Keep the .af file as well, so you can change the edit later.

> Every change on its own layer. Then nothing is ever final.
