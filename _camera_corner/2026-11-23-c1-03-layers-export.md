---
title: "Capture One: layers, masks and export"
date: 2026-11-23
topic: Capture One
permalink: /camera-corner/editing-tips/capture-one/layers-and-export/
course_step: 3
order: 82
level: Intermediate
summary: "Local edits in Capture One are done on layers, each with its own mask. Then export with a process recipe."
challenge: "Add a layer, draw a linear gradient over the sky and darken it a little. Add a second layer with an AI subject mask and lift its exposure slightly. Then set up a process recipe for club competitions and export the result."
---
In Capture One, any adjustment can be applied to just part of the photograph by putting it on a **layer** with a **mask**. It works rather like Lightroom's masks, with Photoshop-style layers.

## Adding a layer

1. Find the **Layers** tool (at the top of most tool tabs)
2. Click the **+** at the bottom of the Layers tool. Choose **New Adjustment Layer**, or a **Filled** layer if you want the effect everywhere and will erase it from places
3. Double-click the layer name and rename it, such as "Sky darker"

With the layer selected, the tools you change (Exposure, Clarity, Color Balance and so on) affect only that layer. Select **Background** to go back to editing the whole photograph.

## Making the mask

Use the mask tools in the top toolbar, with the layer selected:

- **Brush (B):** paint where you want the effect. Right-click the photograph to set size, hardness and opacity. Tick **Auto Mask** to follow edges
- **Eraser (E):** remove from the mask
- **Linear Gradient (L):** drag across the photograph, such as down from the top for a sky
- **Radial Gradient (T):** drag an oval round the subject; its centre gets the effect, fading outward
- **Magic Brush:** click on an area of similar colour and brightness
- **AI masking:** on recent versions, look for **Select Subject**, **Select Background** or **Select Sky** in the mask tools or the Layers tool menu

Press **M** to show or hide the red mask overlay. **Refine Mask** in the Layers tool menu tightens a rough mask to the edges.

## Dodge and burn

Make a layer called "Dodge" and brush over the subject with **Exposure** at +0.3. Make another called "Burn" and brush over bright edges with Exposure at −0.3. Lower the layer's **Opacity** in the Layers tool if it is too strong.

## Cleaning up

Click the **+** in the Layers tool and choose **New Heal Layer** (or **New Clone Layer**), then paint over dust and small distractions; Capture One picks a source area, which you can drag somewhere better. For bigger removals you may still need Photoshop, Affinity or GIMP: right-click the photograph and choose **Edit With** to send a copy.

## Exporting with a process recipe

A **process recipe** is a saved export setting.

1. Open the **Process Recipes** tool (Output tool tab)
2. Click **+** and name it, such as "Club competition"
3. **Basic** tab: **Format** JPEG, **Quality** 85 to 90, **ICC Profile** sRGB, **Scale** to **Long Edge** and type the size, such as 2000 pixels
4. **File** tab: choose the output folder and naming
5. **Metadata** tab: choose what to include
6. Select the photographs, tick the recipe and click **Process** (or press **Ctrl+D**, Cmd+D on a Mac)

For a quick one-off, **File, Export, Images** lets you set everything in one window.

Check each competition's size and naming rules. The Exporting for screen and print lesson goes into more detail.

> Layers for the parts, recipes for the output.
