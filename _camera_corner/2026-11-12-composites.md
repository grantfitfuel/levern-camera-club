---
title: "Composites and sky replacement"
date: 2026-11-12
topic: Editing
order: 39
summary: "Blending frames from one moment is one thing. Dropping in a sky from another day is another. How to match the light, and how to be straight about it."
challenge: "Find one photograph with a dull sky and look at its shadows. Note which side the sun was on and how high it was. Then look through your own photographs for a sky that matches both. Try Edit > Sky Replacement with it, output to new layers, and check every edge at 100 percent. Keep the result only if the light on the ground matches the sky, and caption it as a composite."
quiz: |-
  Q: Which of these is generally accepted even in many competitions that ban sky replacement?
  * Blending two exposures taken a minute apart from the same tripod position
  - Adding a sky from a different evening
  - Adding a moon from another photograph
  - Replacing the sky with one from a stock collection

  Q: The shadows in your foreground are short and fall to the right. What sky fits?
  * A sky with a high sun on the left
  - A sunset sky with the sun on the right
  - A low sun on the left, just above the horizon

  Q: Why might clouds look too big in a composite?
  * The sky was shot with a much longer lens than the foreground
  - The sky was shot at a lower ISO
  - The foreground was shot in RAW

  Q: You replace the sky over a lake with Sky Replacement. What should you check that the tool does not change?
  * The reflection in the water
  - The colour of the new sky
  - The join between sky and land
---
A composite is a photograph made from more than one picture. That covers a lot: two exposures of the same scene blended so the sky and the ground both hold detail, a sky from one evening dropped into a foreground from another, or a figure added to a landscape it was never in.

Some of these are standard practice and some change what the picture says. This lesson covers how to do it well, and how to be straight about it when you do.

## Starting values

- **Time between frames for a blend:** seconds to a few minutes, from the same tripod position
- **Sun direction:** the same side and roughly the same height in sky and foreground
- **Focal length of the sky:** close to the foreground's, so clouds are the right size
- **Shift Edge in Sky Replacement:** start near zero and move a few points at a time
- **Fade Edge in Sky Replacement:** raise it until the join disappears, then stop
- **Edge check:** 100 percent, along every treeline, roof and outline of hair
- **Sky brightness:** no brighter than the light on the foreground suggests

These are starting points. Make the change, then step away and look again before you keep it.

## Two kinds of composite

There is a clear difference between these two:

- **A blend from one moment.** You take two or more frames from the same tripod position, seconds or minutes apart, and combine them. One is exposed for the sky and one for the ground. The result shows what was there; you have only worked around the limits of the sensor. Exposure blending is covered in Editing effects
- **A sky from somewhere else.** You take a sky from another day, another place, or a stock collection, and put it over your foreground. The result shows something that did not happen

Both are composites. The first is widely accepted, even in many competitions that ban the second. The second is a creative choice, and it carries more responsibility.

## Sky Replacement in Photoshop

Photoshop has a tool built for the second kind: **Edit > Sky Replacement**. It finds the sky, masks it and drops in a new one.

1. Open the photograph and choose Edit > Sky Replacement
2. Pick a sky from the list. Photoshop includes a set of skies, and you can add your own from the + button. Your own skies are the better choice; at least you know when and where they were taken
3. Use the **Sky Move tool** in the dialog to position the sky, and the **Sky Brush** to add to or take away from the sky area
4. Adjust **Shift Edge** to move the boundary between sky and foreground, and **Fade Edge** to soften the join
5. Under the sky adjustments, set **Brightness**, **Temperature** and **Scale**, and tick **Flip** if the sun is on the wrong side
6. Under the foreground adjustments, choose a **Lighting Mode** and set **Foreground Lighting** and **Edge Lighting**, so the new sky's colour falls on the land. **Color Adjustment** sets how strongly the foreground takes on the sky's colour
7. Output to New Layers. That keeps the sky, the mask and the adjustments separate, so you can refine each one later

Lightroom Classic has no sky replacement. It can select the sky with a mask, which is enough for darkening or warming the sky you already have.

## Matching the light

Most failed composites fail on light, not edges. Check these before anything else:

- **Direction.** Look at the shadows on the ground. If they fall to the right, the sun is on the left. A sky with the sun on the other side, or a sunset glow where the ground is lit from overhead, gives it away
- **Height of the sun.** Long shadows mean a low sun and a warm sky. Short shadows at midday under a sunset sky do not belong together
- **Colour.** A warm sky over cool, blue-tinted ground looks pasted in. Match the temperature, or let Foreground Lighting carry some of the sky's colour into the land
- **Brightness.** The sky is usually the brightest part of a daylight scene. A dark, dramatic sky over a bright, evenly lit field is a common giveaway
- **Reflections.** Water reflects the sky. Sky Replacement does not change the reflection, so a lake can end up reflecting a sky that is not there

## Matching perspective and scale

A sky shot with a wide lens looks different from one shot with a long lens. Wide lenses make clouds look small and stretched towards the horizon; long lenses make them large and flat. Put a long lens sky over a wide lens foreground and the clouds look too big.

The horizon matters too. Clouds near the horizon look smaller and closer together. Keep the sky's own horizon near the foreground's, and use Scale sparingly. Match noise and sharpness as well: a clean, crisp sky over a grainy foreground does not hold together.

## Edges

Trees, hair and fine detail against the sky are where masks struggle. Look at 100 percent along every edge for:

- **Halos.** A bright or dark rim where the old sky shows through
- **Lost branches.** Fine twigs cut off or turned to mush
- **Old sky in gaps.** Patches of the original sky showing between leaves

In Sky Replacement, Shift Edge moves the boundary and Fade Edge softens it. On new layers, refine the mask with a soft brush at low opacity. For hair, Photoshop's Select > Select and Mask gives finer control at the edge. Some edges cannot be saved; a dense wood against a bright sky is often one of them.

## When to choose not to

Not every photograph wants a new sky. A grey day has its own mood, and a plain sky can be the right one for a minimal picture. Ask whether the new sky makes the photograph better, or only louder. If you would not want people to know you had replaced it, take that as an answer.

## Honesty

Say when a picture is a composite. It costs nothing, and people who find out later feel misled.

Documentary, news and many competitions forbid replacing skies or adding elements. Many nature competitions allow only minor adjustments and expect the original file on request. Read the rules each time, because they differ. A portfolio or a print for your own wall is your choice, but a caption that says how it was made is still fair.

## Worked scenarios

- **A sunset over a loch.** You took one frame at minus 2 stops for the sky and one at 0 for the foreground, a minute apart, from the same tripod. Blend them. This is one moment, recorded twice
- **A castle under a blank white sky.** Shadows on the walls fall to the right and are short, so the sun was high and on the left. Choose one of your own skies from another midday with the sun on the left. Set Temperature to match the walls. Check the reflection in the moat and caption it as a composite
- **A wood against a bright sky.** The mask loses half the branches at 100 percent. Leave the sky as it is and lower its highlights instead

## Common mistakes

- **Light from two directions.** Match the shadows to the sun
- **Clouds too big.** Use a sky shot at a similar focal length
- **Halos round trees and hair.** Adjust Shift Edge and refine the mask at 100 percent
- **Unchanged reflections.** Fix the water, or do not replace the sky
- **Entering a composite where it is banned.** Read the rules first

## Checking your work

- Cover the sky with your hand and ask whether the light on the ground matches it
- View every edge at 100 percent
- Look at it small. If the sky is the first thing you notice, it is too strong
- Leave it overnight and look again

> If the light on the ground does not match the sky, nobody will believe either.
