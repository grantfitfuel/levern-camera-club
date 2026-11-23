---
title: "darktable: masks, retouch and export"
date: 2026-11-23
topic: darktable
permalink: /camera-corner/editing-tips/darktable/masks-and-export/
course_step: 3
order: 97
level: Intermediate
summary: "Every darktable module can be applied to part of the photograph with a mask. Then clean up with retouch and export a JPEG."
challenge: "Add a second instance of the exposure module, mask it with a drawn gradient over the sky and darken it slightly. Remove a dust spot with retouch, then export a 2000 pixel sRGB JPEG."
---
## Masks

At the bottom of most modules is a row of **mask icons**. Choose one, and that module's effect is limited to the masked area:

- **uniformly:** no mask; the whole photograph
- **drawn mask:** draw shapes on the photograph: a **brush**, **circle**, **ellipse**, **path** or **gradient**
- **parametric mask:** chooses pixels by brightness or colour, such as "only the bright parts"
- **drawn & parametric:** both together

### Example: darken the sky

1. Open the **exposure** module. Click the **multiple instances** icon (two overlapping rectangles) in its header and choose **new instance**, so the main exposure stays as it is
2. At the bottom of the new instance, click **drawn mask**, then the **gradient** shape
3. Click on the photograph where the sky meets the land. Drag the line to angle it; the area above gets the effect
4. Lower **exposure** to around −0.3
5. Use **feathering radius** and **blurring radius** in the mask options to soften the edge
6. Click the **display mask** icon (yellow) to see what is covered

Rename the instance (choose **rename** from the multiple instances menu) so you remember what it does.

### Dodge and burn

Use more instances of **exposure** with brush masks: one lifting the subject by +0.3, another darkening bright edges by −0.3. Lower the module's **opacity** if it is too strong.

## Retouch

The **retouch** module removes dust and small distractions:

1. Choose **heal** (or **clone**) in the module
2. Choose a shape, such as the **circle**, and click on the problem
3. darktable picks a source area and shows it with an arrow. Drag the source to a better spot if needed

For larger removals, export a TIFF and use GIMP, Affinity or Photoshop.

## Export

In the **lighttable**, find the **export** module on the right:

1. **storage options:** **file on disk**. Set the folder and file name pattern
2. **format options:** **JPEG**, quality around 90
3. **global options:** set the size **in pixels**. Enter the long edge in both boxes, such as 2000 × 2000, and darktable fits the photograph inside. Set the **profile** to **sRGB**
4. Select the photographs and click **export**

Save the settings as a preset with the **presets** menu (the hamburger icon) at the module's top right.

> Free software, professional results.
