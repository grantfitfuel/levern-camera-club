---
title: "GIMP: layers, clean-up and export"
date: 2026-11-23
topic: GIMP
permalink: /camera-corner/editing-tips/gimp/layers-and-cleanup/
course_step: 2
order: 101
level: Intermediate
summary: "Remove distractions on a separate layer, paint adjustments into one area with a layer mask, dodge and burn, and export at the right size."
challenge: "Remove three small distractions on a new layer with the Heal tool. Add an Overlay layer and dodge and burn gently. Then export a 2000 pixel JPEG and check its size."
---
## Clean-up on its own layer

1. In the **Layers** panel, click the **new layer** icon (or **Layer, New Layer**). Name it "Clean-up", set **Fill with** to **Transparency**, and click **OK**
2. Choose the **Heal** tool (**H**). In **Tool Options**, tick **Sample merged** so it can read the photograph beneath your empty layer
3. Hold **Ctrl** (Cmd on a Mac) and click a clean area to set the source
4. Paint over the dust spot, wire or blemish. Change brush size with **[** and **]**
5. For straight edges and patterns, use the **Clone** tool (**C**) in the same way; it copies exactly instead of blending

For larger removals, the free **Resynthesizer** plug-in adds a **Heal Selection** filter that fills a selected area from its surroundings.

Check the rules before entering a retouched photograph in a competition.

## Adjusting one area with a layer mask

1. Right-click the photograph's layer and choose **Duplicate Layer**
2. Make the change to the copy, for example **Colors, Curves** to brighten
3. Right-click the copy and choose **Add Layer Mask** (also in **Layer, Mask**). Choose **Black (full transparency)** and click **Add**. The change disappears
4. Choose the **Paintbrush** (**P**), a soft brush, and **Opacity** around 20% in Tool Options
5. Press **D** for black and white colours and **X** so **white** is in front. Paint where you want the change to show
6. Painted too much? Press **X** to swap to black and paint it back

White reveals, black conceals, just as in Photoshop.

## Dodge and burn

1. Make a new **transparent** layer called "Dodge and burn"
2. In the Layers panel, set its **Mode** to **Overlay** (or **Soft light** for a gentler effect)
3. With a soft **Paintbrush** at 5 to 10% opacity, paint **white** to lighten the subject and **black** to darken bright edges
4. Lower the layer's **Opacity** if it is too strong

## Resizing and exporting

Keep the full-size version as a .xcf file (**File, Save**). Then:

1. **Image, Scale Image.** Make sure the chain icon is linked, type the long edge, such as **2000**, and click **Scale**
2. **File, Export As.** Type a new name ending .jpg and click **Export**
3. Set **Quality** to around 90. Under **Advanced Options**, keep the colour profile (sRGB is standard for most photographs)
4. Click **Export**
5. **Undo** the scaling (Ctrl+Z) so your saved working file stays full size

Check each competition's size and naming rules.

> Separate layers for every job. Then nothing is ever final.
