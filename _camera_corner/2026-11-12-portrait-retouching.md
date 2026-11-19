---
title: "Portrait retouching"
date: 2026-11-12
topic: Editing
order: 38
summary: "Light, respectful retouching that keeps skin looking like skin. Remove what is temporary, keep what is theirs, and ask first."
challenge: "Retouch one portrait in three passes, using only the starting values. First, a facial skin mask with Texture at minus 15. Second, an iris and pupil mask with Exposure at +0.2. Third, remove only temporary blemishes. Compare with the original using the backslash key, then check at 100 percent that the pores are still there. If you can, show the person both versions."
quiz: |-
  Q: Which of these should you usually leave unless the person asks you to remove it?
  * A mole
  - A spot
  - A stray hair across the cheek
  - A crumb on the chin

  Q: Why lower Texture rather than Clarity to soften skin?
  * Texture works on fine detail and leaves the shape of the face alone
  - Texture removes blemishes automatically
  - Clarity only works on black and white photographs

  Q: In Photoshop, why use the Spot Healing Brush on a new empty layer with Sample All Layers ticked?
  * The repair sits on its own layer, so you can lower its opacity or erase it later
  - It makes the brush work faster
  - It is the only way the tool will work on skin

  Q: You lift the eye sclera exposure and the whites now catch your eye first in a small view. What do you do?
  * Lower the exposure until the eyes sit in the face again
  - Raise Texture on the eyes
  - Add the same lift to the teeth to match
---
Portrait retouching should leave the person looking like themselves on a good day. Take away what is temporary, keep what is theirs, and leave the skin looking like skin.

Light editing is the right approach for portraits. Most of the work below takes a few minutes, and none of it needs to be heavy.

## Starting values

- **Texture on facial skin:** minus 10 to minus 25, enough to soften without losing pores
- **Clarity on facial skin:** 0 to minus 10, if at all; more looks waxy
- **Iris and pupil exposure:** +0.1 to +0.3, to bring a little light into the eyes
- **Eye sclera exposure:** +0.1 to +0.2, with saturation minus 5 to minus 15 to calm redness
- **Teeth saturation:** minus 5 to minus 15, to ease yellow without bleaching
- **Hair texture:** 0 to +15, to bring back detail
- **Remove brush size:** just larger than the blemish

These are starting points. Make the change, then step away and look again before you keep it.

## Ask first

Before you remove anything, ask the person what they are comfortable with. Some people want a spot taken out; some want nothing touched. Some will ask you to remove a scar or a mole; most will not. Their face is not yours to redesign.

A useful line to draw:

- **Temporary:** spots, scratches, a bruise, redness from a cold, a crumb, a stray hair. Usually fine to remove
- **Permanent:** moles, freckles, scars, birthmarks, wrinkles, the shape of the face and body. Leave them unless the person asks

If you cannot ask, keep to the temporary list.

## People masks in Lightroom Classic

Lightroom Classic can find people in a photograph and mask parts of them for you. Open the Masking tool in the Develop module. Under People, Lightroom shows a thumbnail for each person it has found. Choose one, then tick the parts you want:

- Facial skin and body skin
- Eyebrows
- Eye sclera (the whites of the eyes)
- Iris and pupil
- Lips and teeth
- Hair

Tick **Create separate masks** if you want each part on its own mask, so you can adjust the eyes and the skin differently. Then click Create Mask.

Check every mask before you adjust it. Turn on the mask overlay and look at the edges, especially where hair crosses the face and around glasses. Add to or subtract from a mask with the brush where it has missed.

## Skin

Skin has texture: pores, fine lines, small hairs. Remove all of it and the face looks plastic. The aim is to calm the skin, not to replace it.

On a facial skin mask, lower **Texture** by 10 to 25. Texture works on fine detail, so it softens pores and roughness without blurring the shape of the face. Look at 100 percent. If the pores have gone, you have gone too far.

Clarity also softens when lowered, but it works on larger shapes and quickly makes a face look smeared. Leave it alone, or use only a few points.

Uneven colour, such as a red nose or blotchy cheeks, often responds better to a small change in the orange and red colour controls than to softening. Small moves only.

## Blemishes and stray hairs

For temporary blemishes, use Lightroom's **Remove** tool (press Q). Set the brush just larger than the spot and click once. Lightroom fills it from the surrounding skin. If the result looks smudged or picks up the wrong texture, switch the tool to Heal and drag the source to a clean patch of skin nearby with the same tone.

Stray hairs that cross the face or stand out against a plain background can be removed the same way, painting along the hair with a small brush. Leave the hair that frames the face. Removing every loose strand makes hair look like a helmet.

For anything Lightroom struggles with, such as a hair crossing an eye, finish in Photoshop. Add a new empty layer, choose the **Spot Healing Brush** (J), tick Sample All Layers in the options bar, and paint over the problem in short strokes. Working on its own layer keeps the original untouched below, so you can lower the opacity or erase a stroke later.

## Eyes, teeth and lips

Eyes carry a portrait, which is why they are the easiest part to overdo.

- **Iris and pupil.** A small Exposure lift, +0.1 to +0.3, and perhaps a few points of Texture, brings life into the eyes
- **Eye sclera.** A very small lift and a little less saturation calms red veins. Do not push the whites to white. Real eyes are slightly off white and have shading towards the edges
- **Teeth.** Lower saturation a little to ease yellow. Raise exposure very slightly, if at all. Bright white teeth look false straight away
- **Lips.** Usually best left alone. A small saturation change is enough if they look washed out

## Shape and light

To give a face more shape, lighten the areas the light already touches and darken the edges that fall away from it. This is dodging and burning, and the methods are in Editing effects. Keep it subtle: a few tenths of a stop at most.

Do not change the shape of a face or body. Photoshop's Filter > Liquify can pull and push features, and that is exactly why it is easy to misuse. Leave it alone unless the person has asked for a specific change.

## Street portraits

Pictures of strangers in public are a different matter. Keep them honest: correct exposure and colour, and leave the person as they were. Removing or reshaping anything about a real person in a candid picture changes the record of what happened. See Street.

## Worked scenarios

- **A head and shoulders portrait in window light.** Create separate masks for facial skin and iris and pupil. Texture minus 15 on the skin; Exposure +0.2 on the eyes. Remove two temporary spots with the Remove tool. Leave the freckles and a small scar
- **A family group outdoors.** Several faces in different light. Lightroom lists each person. Add a facial skin mask for each and lower Texture by 10 on all of them, so one face is not smoother than the rest. Lift the eyes of the person in shade by +0.3 and the others by +0.1
- **A portrait with slightly yellow teeth and bloodshot eyes after a long day.** On the teeth mask, saturation minus 10 and exposure +0.05. On the eye sclera mask, saturation minus 12 and exposure +0.1. Compare with the original before you keep either

## Common mistakes

- **Plastic skin.** Pores gone and the face looks like a doll. Bring Texture back towards minus 10
- **Glowing eyes.** Whites brighter than the rest of the face. Lower the sclera exposure until they sit in the face again
- **White teeth.** A bright white smile in a warm-lit photograph. Restore some saturation
- **Removing permanent features.** A mole or scar the person did not ask you to remove. Put it back
- **Uneven work across a group.** One face retouched and the others not. Treat everyone the same

## Checking your work

- Compare before and after with the backslash key in the Develop module. The person should look rested, not different
- View at 100 percent to check that skin still has pores and texture
- View the whole picture small. If the eyes or teeth catch your eye first, they are too bright
- Show the person, where you can, and listen to what they say

> Take away what is temporary. Keep what is theirs.
