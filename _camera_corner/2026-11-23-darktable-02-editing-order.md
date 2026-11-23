---
title: "darktable: a sensible editing order"
date: 2026-11-23
topic: darktable
permalink: /camera-corner/editing-tips/darktable/editing-order/
course_step: 2
order: 96
level: Intermediate
summary: "darktable's modern 'scene-referred' way of working, step by step: exposure, tone mapping, white balance, then colour and detail."
challenge: "Edit one landscape using only these modules in order: crop, lens correction, exposure, color calibration, your tone mapper, tone equalizer and color balance rgb. Switch each off and on with its power button to see what it did."
---
darktable applies a sensible starting point to every RAW file: lens and camera corrections, a small exposure boost and a **tone mapper**, which squeezes the wide range of light in a RAW file into what a screen can show. The order below builds on that. Use the module **search box** to find each one.

## 1. Framing

- **crop:** drag the edges in the photograph, choose an **aspect** ratio in the module, then click into another module to apply
- **rotate and perspective:** straighten the horizon (right-click and drag a line along it) and fix leaning buildings
- **lens correction:** usually already on; check it has found your lens

## 2. Exposure

In the **exposure** module, drag **exposure** until the mid-tones, especially your subject, look right. Do not worry if the brightest parts look too bright; the tone mapper deals with that.

The **clipping indicator** button below the photograph shows areas that are too bright or too dark.

## 3. Tone mapping

darktable uses one of three tone mappers, depending on version and preference: **filmic rgb**, **sigmoid** or **AgX**. Whichever is switched on in your history:

- Raise its **contrast** for more punch, lower it for softer light
- If highlights look too bright, adjust its **white** (or range) setting so detail returns

Use only one tone mapper at a time.

## 4. White balance

Modern darktable does white balance in **color calibration**. In its **CAT** tab, choose a setting from the illuminant menu, or use the **picker** and select a neutral area of the photograph. Leave the separate **white balance** module on its default ("camera reference").

## 5. Shadows and highlights

**tone equalizer** brightens or darkens chosen tones without flattening the photograph. Use a preset such as **compress shadows/highlights**, or in the **simple** tab raise the sliders on the left (shadows) and lower those on the right (highlights).

## 6. Colour

**color balance rgb** is the main colour module:

- **vibrance** and **saturation** in the master tab
- Its **4 ways** tab tints shadows, mid-tones and highlights
- Its presets, such as **basic colorfulness**, are good starting points

## 7. Detail and noise

- **denoise (profiled):** switch it on for high ISO photographs. darktable has profiles for most cameras
- **local contrast:** adds clarity
- **diffuse or sharpen:** sharpening, using a preset such as **sharpen demosaicing**. Zoom to 100% first

## Copying the edit

In the lighttable, select the edited photograph and press **Ctrl+C** (copy the history stack), then select the others and press **Ctrl+V** (Cmd on a Mac). **Ctrl+Shift+C** lets you choose which modules to copy.

> Exposure for the subject, tone mapping for the rest.
