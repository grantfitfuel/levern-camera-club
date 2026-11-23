---
title: "Clean-up and dodge and burn in Photoshop"
date: 2026-11-23
topic: Editing course
permalink: /camera-corner/editing-course/photoshop-cleanup/
course_step: 9
order: 68
level: Intermediate
summary: "Remove distractions and shape the light by hand, without ever touching the original pixels."
challenge: "In Photoshop, remove three small distractions on an empty layer with the Spot Healing Brush. Then add a 50% grey Overlay layer and dodge and burn gently. Hide both layers to compare. Has the photograph improved, or just changed?"
quiz: |-
  Q: Why do clean-up on a new empty layer with Sample All Layers ticked?
  * So the fixes sit separately and can be changed or removed
  - Because healing tools do not work on the background
  - To make the file smaller

  Q: On a 50% grey layer in Overlay mode, what does painting with white do?
  * Lightens that area (dodging)
  - Darkens that area (burning)
  - Removes that area

  Q: Before using Generative Fill on a competition entry, what should you check?
  * The competition's rules on AI-generated content
  - Whether the photograph is in colour
  - The file size limit

  Q: What does the stamp visible shortcut (Ctrl+Alt+Shift+E, or Cmd+Option+Shift+E on a Mac) do?
  * Merges everything visible into a new layer, keeping the layers below
  - Flattens and saves the file
  - Exports a JPEG
---
These are the two jobs most photographers use Photoshop for: tidying up distractions and shaping the light. Both are done on separate layers, so nothing is permanent.

Start by sending the photograph from Lightroom to Photoshop, as in step 8.

## Clean-up, step by step

### Make a layer to work on

1. Click the **new layer** icon (a square with a plus) at the bottom of the Layers panel, or press **Ctrl+Shift+N** (Cmd+Shift+N on a Mac) and click OK
2. Double-click the new layer's name and type "Clean-up"

### Spot Healing Brush: dust and small distractions

1. In the toolbar on the left, click the **Spot Healing Brush** (a plaster with a dotted circle) or press **J**. If another tool is showing in its place, click and hold it to choose Spot Healing Brush from the list
2. In the options bar along the top, set **Type** to **Content-Aware** and tick **Sample All Layers**. This lets it work on your empty layer using the photograph underneath
3. Make the brush slightly bigger than the spot with **[** and **]**
4. Click on a dust spot, or paint over a twig or wire. Photoshop blends it away

### Remove tool: larger objects

1. Click and hold the Spot Healing Brush icon and choose the **Remove tool** (a plaster with sparkles). Pressing **Shift+J** also cycles through this group
2. Tick **Sample All Layers** in the options bar
3. Paint roughly over the whole object, such as a person, a bin or a sign. When you let go, Photoshop fills it in

### Clone Stamp: edges and patterns

The healing tools can smudge near straight edges and repeating patterns. The Clone Stamp copies exactly.

1. Press **S**, or click the **rubber stamp** icon
2. In the options bar, set **Sample** to **Current & Below**
3. Hold **Alt** (Option on a Mac) and click on a clean area to copy from
4. Let go of Alt and paint over the problem. A small cross shows where it is copying from

### Content-Aware Fill: bigger patches

1. Click on the **Background** layer (Content-Aware Fill needs real pixels to work on)
2. Press **L** for the Lasso and draw loosely around the area to remove
3. Choose **Edit, Content-Aware Fill**. A preview appears on the right
4. At the bottom right, set **Output To** to **New Layer**, then click **OK**

### Generative Fill

Draw a selection with the Lasso, then click **Generative Fill** on the small bar that appears under it. Leave the box empty and click **Generate** to remove, or type what should be there. It needs an internet connection and uses Adobe generative credits.

Check the rules before entering a cleaned-up photograph in a competition. Many allow removing dust and small distractions but not adding things, and some do not allow generative AI at all.

The Cleaning up a photograph and Portrait retouching lessons go into more detail.

## Dodge and burn, step by step

### Set up the layer

1. Click the top layer in the Layers panel
2. Choose **Layer, New, Layer** (or Alt-click, Option-click on a Mac, the new layer icon) to open the New Layer box
3. Name it "Dodge and burn". Set **Mode** to **Overlay**
4. Tick **Fill with Overlay-neutral color (50% gray)** and click **OK**

The layer is grey, but in Overlay mode grey is invisible, so the photograph looks unchanged.

### Paint the light

1. Press **B** for the Brush. Right-click the photograph and choose a soft round brush with **Hardness 0%**
2. In the options bar, set **Opacity** to 5 to 10%
3. Press **D** for black and white. Press **X** so **white** is on top: painting now **dodges** (lightens)
4. Paint over the subject and the paths you want the eye to follow. Build it up with many light strokes
5. Press **X** to switch to **black**: painting now **burns** (darkens). Paint over bright edges and distractions
6. Hide the layer with its **eye** to compare. Too strong? Lower the layer's **Opacity** at the top of the Layers panel

## Finishing

- Hide each layer in turn to check it is actually helping
- For effects that need everything merged into one layer, use **stamp visible**: Ctrl+Alt+Shift+E (Cmd+Option+Shift+E on a Mac). It creates a merged layer on top and keeps the rest
- Choose **File, Save** and close to send it back to Lightroom

The Composites and sky replacement lesson takes layers further, for combining several photographs.

> If anyone notices the retouching, it was too much.
