---
title: "Editing effects"
date: 2026-11-12
topic: Editing
order: 32
summary: "Glow, dodging and burning, vignettes, colour grading and grain. Optional effects that can lift the right photograph, as long as nobody notices them."
challenge: "Choose one photograph you have already edited lightly. Add one effect from this lesson, no more, at the starting value in the list. Then halve it. Leave it overnight, compare all three versions with the backslash key, and keep the one where you notice the picture before the effect."
quiz: |-
  Q: In the Photoshop Orton method, which blend modes do you use, in order?
  * Screen on the first copy, then Multiply on the blurred copy
  - Multiply on the first copy, then Screen on the blurred copy
  - Overlay on both copies
  - Soft Light on the first copy, then Normal on the blurred copy

  Q: A 30 pixel Gaussian blur looks right on a file 4000 pixels wide. Roughly what radius gives the same look on a file 8000 pixels wide?
  * 60 pixels
  - 30 pixels
  - 15 pixels

  Q: You set up a Photoshop dodge and burn layer. Which blend mode and fill make it invisible until you paint?
  * Overlay, filled with 50% grey
  - Multiply, filled with white
  - Screen, filled with black

  Q: How do you check an edit for halos where the sky meets the land?
  * View it at 100 percent
  - View it as a small thumbnail
  - Turn up the screen brightness
---
Everything in this lesson is optional. These are effects to reach for now and then, on the right photograph, and to use sparingly.

## Starting values

- **Orton blur radius:** 15 to 30 pixels on a file around 4000 pixels wide; 30 to 60 pixels on a file around 8000 pixels wide
- **Orton opacity:** 10 to 30 percent on the blurred layer
- **Dodge and burn:** Exposure +0.1 to +0.3 to dodge, minus 0.1 to minus 0.3 to burn, in Lightroom; brush opacity 5 to 15 percent in Photoshop
- **Vignette amount:** minus 5 to minus 20
- **Colour grading saturation:** 5 to 15 on each wheel
- **Texture and Clarity:** +5 to +20
- **Dehaze:** +5 to +15
- **Grain amount:** 10 to 25

These are starting points. Make the change, then step away and look again before you keep it.

## The Orton effect

The Orton effect is a soft glow laid over a sharp picture. It is named after Michael Orton, who made it on slide film by sandwiching two overexposed slides of the same scene, one sharp and one out of focus. The sharp slide kept the detail; the blurred one spread the light around it. It suits misty woodland, soft morning light and flowers. It rarely suits architecture or anything that depends on crisp edges.

In Photoshop:

1. Duplicate the background layer (Ctrl or Cmd J)
2. Set the copy's blend mode to Screen. The picture brightens
3. Merge it down (Layer > Merge Down)
4. Duplicate the merged layer
5. Apply Filter > Blur > Gaussian Blur to the copy
6. Set the blurred copy's blend mode to Multiply. The brightness comes back down and the blur turns into a glow
7. Lower that layer's opacity until the glow is only just there

The blur radius is measured in pixels, so it has to scale with the file. A 30 pixel blur on a picture 8000 pixels wide spreads across about half as much of the frame as the same blur on a picture 4000 pixels wide, because 8000 is twice 4000. Larger files need a larger radius for the same look.

Lightroom has no true equivalent. You can approximate it with a mask: lower Clarity or Texture to soften, and add a little exposure. That gives softness and light, but not the layered glow of the Photoshop method.

## Dodging and burning

Dodging lightens part of a picture and burning darkens it. The names come from the darkroom, where printers held back or added light by hand. Use it to lead the eye: lighten the subject, darken what competes with it.

In Lightroom, add a mask with the Brush, a Linear Gradient or a Radial Gradient, and change Exposure by a small amount. Several gentle masks look better than one strong one.

In Photoshop:

1. Add a new layer and set its blend mode to Overlay
2. Fill it with Edit > Fill, choosing 50% Gray. In Overlay mode mid-grey is invisible
3. Choose a soft brush at low opacity
4. Paint with white to dodge and black to burn, building up in passes

Because the work sits on its own layer, you can lower its opacity or erase a stroke later.

## Vignettes

A vignette darkens the edges so the eye settles towards the middle. In Lightroom it is in the Effects panel under Post-Crop Vignetting. Move Amount to the left to darken; Midpoint, Roundness and Feather shape the fall-off.

When the subject is not in the centre, use a Radial Gradient mask instead. Draw it around the subject, invert it, and lower the exposure outside. A good vignette is one nobody notices until you switch it off.

## Colour grading

Colour grading adds a tint to particular tones. In Lightroom the Color Grading panel has three wheels, Shadows, Midtones and Highlights, plus Blending and Balance. Blending sets how much the ranges overlap; Balance moves the point where shadows end and highlights begin. Older versions called this split toning.

The classic grade is warm highlights and cool shadows, which suits golden light and night streets. Keep the saturation low. Toning a black and white photograph uses the same panel; see Black and white.

## Texture, Clarity and Dehaze

These three sliders sit in the Basic panel and do different jobs.

- **Texture** acts on fine detail: bark, stone, fabric. It leaves larger shapes alone
- **Clarity** adds contrast to the midtones. It gives punch, but too much draws halos along edges and makes skin look rough
- **Dehaze** cuts haze and adds contrast and saturation. Pushed far, skies go dark and crunchy and colours oversaturate

Negative values soften. A little negative Texture is kind to skin.

## Exposure blending and masks

When a scene is too bright at one end for a single frame, take a bracket and blend it. Blending exposures avoids the artefacts graduated filters can give. Bracketing in the field is covered in Shooting into the sun.

In Lightroom, select the bracket and choose Photo > Photo Merge > HDR. The result is a RAW file you edit as normal.

For more control, restrict an adjustment by brightness. In Lightroom, add a Luminance Range mask, or intersect an existing mask with one, so the change only touches the brightest or darkest tones. In Photoshop, open the Channels panel and Ctrl or Cmd click the RGB thumbnail. That loads the bright tones as a selection, which you can use as a layer mask.

Lightroom's Masking panel also has Select Sky and Select Subject. One click makes a mask, and you then apply any of the effects above to that area alone: burn the sky, dodge the subject, add Texture to a rock. Check the mask edge at 100 percent, especially around trees and hair, and refine it with the brush.

## Grain

Grain adds a film-like texture. It is in the Effects panel, with Amount, Size and Roughness. It suits gritty street photographs and black and white; see Black and white. Add it last and judge it at the size the picture will be seen.

## Worked scenarios

- **A misty woodland.** Add an Orton glow at around 15 percent opacity so the light through the trees softens without the trunks losing their edges
- **A seascape at dusk.** Burn the four corners by minus 0.2 exposure with Radial or Linear Gradient masks, so the eye stays on the rocks and the water
- **A city street at night.** Warm the highlights slightly and cool the shadows in Color Grading, with saturation under 15 on each wheel, so street lights glow against a blue dusk

## Common mistakes

- **Halos.** Bright rims where sky meets land, from Clarity, Dehaze or a heavy mask. Reduce the slider or refine the mask edge
- **Overcooked glow.** An Orton layer at full strength turns everything to fog. Lower the opacity
- **Obvious vignettes.** Dark grey corners on a bright sky. Ease the amount and widen the feather
- **Colour casts.** A grade that tints whites and skin. Lower the saturation, or move Balance
- **Stacking everything.** Glow, vignette, grade, Clarity and grain on one picture. Choose one or two

## Checking your edit

- View at 100 percent to look for halos and noisy masks
- Look at the picture small. If the effect is the first thing you see, it is too strong
- Compare it with the original using the backslash key in Lightroom
- Come back the next day before you share it

> An effect is working when nobody notices it. Turn it down until they do not.
