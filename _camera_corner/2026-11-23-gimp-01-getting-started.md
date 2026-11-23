---
title: "GIMP: getting started"
date: 2026-11-23
topic: GIMP
permalink: /camera-corner/editing-tips/gimp/getting-started/
course_step: 1
order: 100
level: Beginner
summary: "GIMP is the free, open source answer to Photoshop. How to install it, find your way around, and make basic tonal and colour corrections."
challenge: "Open a JPEG in GIMP. Make a Curves adjustment, then open it again from the Layers panel and change it. Export the result as a JPEG with a new name, keeping the original."
---
GIMP (the GNU Image Manipulation Program) is free and runs on Windows, Mac and Linux. Version 3, released in 2025, brought a cleaner look and, at last, **non-destructive filters**: adjustments that can be changed later. It does the job of Photoshop for photographers: layers, retouching, combining photographs.

It does not process RAW files itself. Use darktable (also free) or another RAW editor first, then open the result in GIMP. If darktable or RawTherapee is installed, GIMP will hand RAW files to it automatically.

## Getting it

Download it from **gimp.org** and install it as usual. On a Mac, if it will not open the first time, right-click the app and choose **Open**.

## The layout

- **Left: the Toolbox.** One icon per tool group. Click and hold (or right-click) an icon to see the tools in its group. Hover for names and shortcut keys
- **Under the Toolbox: Tool Options.** The settings for the chosen tool, such as brush size and opacity
- **Right: the docks.** **Layers** is the most important. If anything is missing, find it under the **Windows, Dockable Dialogs** menu
- **Middle:** the photograph

If you lose the layout, choose **Windows, Hide Docks** (Tab) to toggle them, or reset it in **Edit, Preferences, Window Management**.

## Opening, zooming and undoing

- **File, Open** (Ctrl+O, Cmd+O on a Mac)
- **1** shows 100%; **Shift+Ctrl+J** (Shift+Cmd+J) fits the photograph to the window
- Hold the **Space bar** and move the mouse to pan
- **Ctrl+Z** (Cmd+Z) undoes. **Edit, Undo History** lists every step

## Basic corrections

All are in the **Colors** menu:

- **Levels:** drag the black and white triangles under the histogram in to the ends of the graph. This sets the darkest and brightest points
- **Curves:** drag the middle of the line up to brighten, down to darken. A gentle S shape adds contrast
- **Color Temperature** or **Color Balance:** to correct a colour cast
- **Hue-Saturation** and **Saturation**

### Changing them later (GIMP 3)

In GIMP 3 most of these are applied as **non-destructive filters**. In the Layers panel an **fx** icon appears beside the layer. Click it to see the filters, switch them off with their eye icon, or double-click one to change its settings. If you want the old behaviour, tick **Merge filter** in the filter's window.

## Saving and exporting

GIMP keeps two things separate:

- **File, Save** saves a GIMP file (ending .xcf) with all its layers, to change later
- **File, Export As** (Shift+Ctrl+E, Shift+Cmd+E on a Mac) makes a JPEG, PNG or TIFF. Type the file name ending .jpg, click **Export**, then set **Quality** to around 90

If GIMP warns about unsaved changes after you export, that is only the .xcf file; your JPEG is safe.

> Free does not mean basic. It means yours.
