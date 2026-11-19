---
title: "Presets and a consistent look"
date: 2026-11-12
topic: Editing
order: 35
summary: "A preset saves slider settings so a set of photographs starts from the same place. It is a starting point, not a finished edit."
challenge: "Edit one photograph lightly and save it as a preset that leaves out White Balance, Exposure, Crop, masks and spot removal. Apply it to five photographs taken on the same day, then set White Balance and Exposure for each one by hand. View all six in Survey view, find the one that stands out, and bring it into line."
quiz: |-
  Q: Which settings should usually be left out of a preset meant for many photographs?
  * White Balance and Exposure
  - Contrast and Clarity
  - Color Grading and Effects
  - Profile and Texture

  Q: What is the difference between a profile and a preset?
  * A profile sets how raw colour and tone are rendered; a preset moves the sliders
  - A profile is always bought; a preset is always free
  - A preset can only be applied on import

  Q: You select fifty frames, switch on Auto Sync, then raise Exposure on the active photograph. What happens?
  * The change applies to every selected photograph
  - Only the active photograph changes
  - Lightroom asks which settings to synchronise

  Q: A bought preset turns your overcast photographs orange. What is the best first step?
  * Lower its Amount and set White Balance by hand
  - Apply it twice
  - Raise Saturation to balance it
  - Delete the RAW files and shoot again
---
A set of photographs looks like a set when the pictures share the same light, the same colour and the same shape. Getting there one photograph at a time is slow, and each one drifts a little from the last.

Presets and copied settings do the repetitive part for you. They are not a style in a box. A preset is a starting point, and every photograph still needs a look of its own.

## Starting settings

- **Settings to include in a general preset:** Profile, Contrast, Highlights, Shadows, Whites, Blacks, Texture, Clarity, Color Grading, Effects
- **Settings to leave out:** White Balance and Exposure, which change from photograph to photograph
- **Also leave out:** Crop, masks and spot removal, which belong to one photograph only
- **Preset Amount:** 50 to 100; 100 is the preset exactly as saved
- **Contrast and Clarity in a preset:** keep them small, +5 to +20, so the preset suits a range of light
- **Colour grading saturation in a preset:** 5 to 15 on each wheel
- **Series crop ratio:** one ratio for the whole set, such as 4:5 or 3:2

These are starting points. Make the change, then step away and look again before you keep it.

## What a preset is

A preset is a saved set of slider positions. Applying it moves those sliders on another photograph to the same places. It does not analyse the picture, and it does not know whether the photograph is bright or dark, warm or cool.

That is why a preset made on one photograph can look perfect on its twin and wrong on a picture taken an hour later. The same rule holds however much you edit: the preset gets you near, and you finish by hand.

## Making your own preset

1. Edit one photograph that represents the set well
2. In the Develop module, find the Presets panel on the left
3. Click the + button at the top of the panel and choose Create Preset
4. Name it and choose a group, so you can find it later
5. Click Check None, then tick only the settings you want the preset to carry
6. Click Create

Leave White Balance and Exposure unticked for a preset you mean to use on many photographs. A sunset preset that also sets 7000 K and +0.7 exposure ruins every photograph taken in different light. Without those two, it carries your tone and colour choices and leaves the light to you.

## Applying presets on import

The Import dialog has an Apply During Import panel. Under Develop Settings, choose a preset, and every photograph arrives with it already applied. This suits a light, general preset, such as a lens correction and a gentle tone curve. A strong look applied on import makes every thumbnail look finished before you have looked at any of them properly.

## Profiles and presets

A profile and a preset are different things. A profile, chosen at the top of the Basic panel, decides how the raw colours and tones are rendered before any slider is touched. Adobe Color and Adobe Landscape are examples. A preset moves the sliders.

Many creative profiles have their own Amount slider. Presets do too: after you apply one, an Amount slider appears at the top of the Presets panel for most presets. It runs from 0 to 200, and 100 is the preset as saved. Pulling it back to 60 or 70 is often all a strong preset needs.

## Copying, pasting and syncing

Lightroom gives you several ways to move settings from one photograph to others.

- **Copy Settings and Paste Settings.** Press Ctrl or Cmd Shift C on an edited photograph, tick the settings to copy, then select another photograph and press Ctrl or Cmd Shift V
- **Previous.** With one photograph selected, the Previous button at the bottom right of the Develop module applies all the settings of the photograph you selected just before it
- **Sync.** Select several photographs in the Filmstrip, with the edited one as the active photograph, and click Sync. Choose the settings in the dialog and they spread to the rest
- **Auto Sync.** Flip the switch beside the Sync button and every change you make applies to all the selected photographs at once. Turn it off when you finish, or you will edit pictures you did not mean to

Copied settings carry everything you tick, including crops and masks. Untick what belongs to one photograph only.

## Matching a series

A consistent series depends on a few things matching, more than on any preset.

- **Same white balance** for pictures taken in the same light. If one was 5600 K, the rest from that hour should be close to it
- **Same black point.** The Blacks slider decides how deep the darkest tones go. If one picture has true black and the next has grey, the set looks uneven
- **Same crop ratio.** Mixing 4:5, 3:2 and square in one series looks careless unless it is deliberate; see Cropping and aspect ratios
- **Same grade.** One colour grading treatment for the whole set

To see the set together, select it and press N in the Library module for Survey view. The odd one out usually stands out at once. Fix it in the Develop module, where Reference View shows a chosen photograph beside the one you are editing so you can match them directly.

For a sequence shot in steady light where the camera's settings changed, such as frames taken with auto ISO, Settings > Match Total Exposures in the Develop module evens out the exposure. It works from the settings recorded in each file, not from how bright the picture looks, so it cannot correct light that changed while you shot.

## Bought presets

Bought presets are made on someone else's photographs: their camera, their light and their subjects. They work on photographs similar to the ones they were made for and often look strange on everything else. A preset built on golden coastal light turns an overcast city street orange.

If you use one, read it as a list of decisions. Open it, see which sliders it moves and by how much, and take what suits your pictures. Lower the Amount, then adjust White Balance and Exposure for each photograph.

## Worked scenarios

- **A day of city photographs.** You edit one picture taken in soft morning light and save a preset with Contrast +10, Blacks minus 15, Clarity +10 and a gentle grade at 8 saturation. Apply it to the rest, then set White Balance and Exposure for each one. The set holds together, and no photograph is forced into the wrong light
- **Fifty frames from one tripod position at sunset.** The light changes over twenty minutes. Edit the first, Sync everything except White Balance and Exposure, then set Exposure by hand on a few frames as the light fades and check them together in Survey view
- **A bought preset on overcast pictures.** The preset makes everything orange. Lower its Amount to 50, set White Balance by hand, and save the result as your own preset for grey days

## Common mistakes

- **Including White Balance and Exposure in a general preset.** Every photograph inherits light it never had. Leave them out
- **Leaving Auto Sync on.** Later changes spread to photographs you did not mean to edit. Turn it off when you finish
- **Pasting crops and masks.** Untick them in the Copy Settings or Synchronize Settings dialog
- **Strong presets on import.** Every thumbnail looks finished. Keep the import preset light
- **Treating a preset as the finished edit.** Check every photograph after applying it

## Checking your work

- View the whole set in Survey view. If one photograph jumps out, fix it, unless it is meant to
- Press the backslash key in the Develop module to compare each photograph with its original
- Check that whites and skin tones look natural across the set, not just in the first picture
- Look at the set again the next day before you share it

> A preset starts the edit. Your eye finishes it.
