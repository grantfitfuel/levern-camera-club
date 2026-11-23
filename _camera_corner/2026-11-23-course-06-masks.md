---
title: "Local edits with masks"
date: 2026-11-23
topic: Editing tips
permalink: /camera-corner/editing-tips/masks/
course_step: 6
order: 65
level: Intermediate
summary: "Global edits change the whole photograph. Masks change one part: a sky, a face, a path of light. This is where an edit starts to look considered."
challenge: "Pick a landscape. Use Select Sky to darken the sky a little, then use a Radial Gradient to lift the exposure gently on your main subject. Turn on the overlay to check each mask, then compare before and after."
---
After the global edit, look at the photograph and ask where the eye goes first. If it goes somewhere other than your subject, masks fix that.

A mask is a selection: it decides which part of the photograph a set of sliders affects.

## Opening masks

1. In the **Develop** module, click the **Masking** icon under the histogram (a dashed circle, the last icon in the row), or press **Shift+W**
2. A **Create New Mask** list appears, with the AI selections at the top and the manual tools below
3. Click a type. Lightroom makes the mask, shows it as a **red overlay**, and shows a full set of sliders underneath: Exposure, Contrast, Highlights, Clarity, Temp, Saturation and more. These sliders now affect only the masked area
4. When you have finished, click **Close** at the bottom of the panel

Press **O** to show or hide the red overlay. To change its colour (useful on red subjects), click the coloured square beside **Show Overlay** in the masks panel.

## Types of mask

**AI selections** (Lightroom finds the area for you):

- **Subject:** the main subject
- **Sky:** the sky
- **Background:** everything except the subject
- **Objects:** brush roughly over something and Lightroom finds its edges
- **People:** faces, skin, eyes, hair and clothing as separate parts
- **Landscape:** water, vegetation, mountains, buildings and more, on recent versions

**Manual tools:**

- **Linear Gradient (M):** a gradual change across the frame, like a graduated filter
- **Radial Gradient (Shift+M):** an oval, feathered at the edge
- **Brush (K):** paint exactly where you want
- **Color Range** and **Luminance Range:** select by colour or brightness

## Example: darken the sky

1. Press **Shift+W** and click **Sky**. Wait a few seconds; the sky turns red
2. Drag **Exposure** to around −0.3 and **Highlights** to around −20
3. If the mask has spilled onto a hill or building: under the mask's name, click **Subtract**, choose **Brush**, and paint over the area where the effect should not be. Tick **Auto Mask** in the brush settings so it follows edges
4. Press **O** to hide the overlay and judge the result

## Example: lift the subject with a radial gradient

1. In the masks panel, click **Create New Mask** (the + button), then **Radial Gradient**
2. Click and drag on the photograph to draw an oval around the subject
3. Drag the small squares on its edge to change its size; drag the middle dot to move it; drag just outside the edge to rotate it
4. Set **Feather** to around 75 so the edge is soft
5. Drag **Exposure** to around +0.3

To do the opposite, and darken everything outside the oval, tick **Invert** under the sliders.

## Example: paint with the brush

1. **Create New Mask**, then **Brush**
2. In the brush settings: **Size** sets how big it is (or use the **[** and **]** keys); **Feather** sets how soft the edge is; **Flow** sets how strong each stroke is, so a low flow lets you build up gradually
3. Paint over the area. Hold **Alt** (Option on a Mac) to switch to the eraser
4. Set the sliders, for example Exposure −0.3 to darken a bright distraction

## Combining selections

Every mask can be built from more than one piece. Under the mask's name, use **Add** and **Subtract**. Hold **Alt** (Option) while clicking Subtract to choose **Intersect**, which keeps only where two selections overlap. For example, a Linear Gradient over the sky, intersected with a Luminance Range, darkens only the bright parts of the sky.

## Dodging and burning

This is the oldest trick in photography: lighten (dodge) the areas you want people to look at, darken (burn) the ones you do not.

- A Radial Gradient with +0.3 exposure on the subject
- A Brush with −0.3 exposure on bright distractions near the edges
- A Linear Gradient darkening the bottom of a landscape slightly

Small amounts across several masks look natural. One big move looks like an edit.

## Common mistakes

- Haloes where a sky mask meets the land. Press **Z** to check the edges at 100%
- Masks that are too strong. Try halving the amount and see if it still works
- Losing track of masks. Double-click a mask's name to rename it, such as "Sky darker". Click the eye beside it to hide its effect

> Light leads the eye. Masks let you decide where.
