---
title: "Monitor calibration"
date: 2026-11-12
author: Grant Anthony
topic: Editing
order: 4
start_here: 4
summary: "If your screen is too bright or too blue, every edit corrects a fault that is not in the photograph. Set the screen right before you trust it."
challenge: "Turn off automatic brightness and any night mode, set your screen to about half brightness and a plain grey desktop background, and leave it for a day. Then open three photographs you edited before the change. Note whether each now looks too dark, too light or right, and compare the histogram for each with what you see. If you have a printer or a lab you use, print one and hold it beside the screen in daylight."
quiz: |-
  Q: What white point is the standard target for screen calibration?
  * D65, about 6500 K
  - 5000 K
  - 9300 K
  - 3200 K

  Q: What does a colorimeter do?
  * Measures colour patches on the screen so software can build a profile
  - Sharpens the screen's pixels
  - Changes the colour space of your photographs

  Q: A photograph looks right in Lightroom but oversaturated in another app on a wide-gamut screen. What is the most likely cause?
  * The other app is not colour managed
  - The photograph was exported in sRGB
  - The screen needs a higher brightness
  - The edit has too much vibrance

  Q: Without a calibration device, what is the most reliable way to judge exposure?
  * The histogram
  - The screen at full brightness
  - The operating system's calibration assistant
  - A night mode setting
---
Every edit you make is a judgement about what you see on a screen. If the screen is too bright, too blue or too saturated, you correct for a fault that is not in the photograph, and the picture looks wrong everywhere else.

No two screens agree out of the box. Calibration brings yours close to an agreed standard, so the brightness and colour you set are the ones other people see, and the ones a printer puts on paper.

## Starting values

- **White point:** D65, which is 6500 K, the standard for screens and the web
- **Gamma:** 2.2, the standard tone curve for computer screens
- **Brightness for print work:** about 80 to 120 candelas per square metre, close to how bright paper looks under good room light
- **Brightness for screen-only work:** a little higher is fine, around 120 to 140
- **How often:** every month or so, since screens drift as they age
- **Before you start:** let the screen warm up for about 30 minutes
- **Desktop background:** plain mid grey

These are starting points. Make the change, then step away and look again before you keep it.

## Why screens disagree

Screens leave the factory set to look bright and punchy in a shop, not accurate on a desk. Brightness is often near maximum, and the colour leans blue.

Laptop screens change with the angle you view them from: tilt the lid and the picture darkens or shifts colour. Phones adjust brightness automatically to the room, and night modes warm the colour in the evening. Some screens also shift their colour to match the room light. All of that is comfortable for reading and unhelpful for editing.

Your eyes make it worse. They adapt quickly, so a screen that is too blue or too bright looks normal after a few minutes. You cannot judge a screen by looking at it alone.

## What calibration does

Calibration uses a colorimeter, a small measuring device that rests flat on the screen. Software shows a series of colour and grey patches, the colorimeter measures each one, and the software compares what the screen produced with what it should have.

It then does two things. It adjusts the screen towards your targets, and it builds a profile: a file describing exactly how your screen shows colour. The computer loads that profile, and colour-managed software such as Lightroom and Photoshop uses it to show your photographs correctly.

The targets in the list above mean:

- **D65 or 6500 K** is the colour of white. Lower numbers look warmer and more yellow; higher numbers look bluer
- **Gamma 2.2** sets how quickly tones step from black to white. It controls how dark the mid-tones and shadows look
- **Candelas per square metre** measure brightness. Many screens are far brighter than 120 at full brightness, which is why prints so often look dark next to them

## Calibrating with a colorimeter

The calibration software differs from device to device, but the steps are much the same.

1. Let the screen warm up for about 30 minutes, and dim the room lights
2. Reset the screen to its default settings, and turn off any automatic brightness or eco mode
3. Choose your targets in the software: D65, gamma 2.2 and your chosen brightness
4. Hang the colorimeter over the screen as the software shows, with its sensor flat against the glass
5. Adjust the screen's own brightness controls when the software asks, until the reading matches the target
6. Let the measurements run, then save the profile and let the software set it as the default
7. Set a reminder to repeat it in about a month

## The room you edit in

A calibrated screen in a bad room still misleads you. Strong coloured light, such as a warm lamp or a bright window, changes how you see the screen.

- Keep windows out of the reflection and from behind the screen
- Use soft, even, neutral light that does not fall directly on the glass
- Avoid brightly coloured walls close to the screen
- Set a plain mid-grey desktop background, so no strong colour sits beside the photograph

Lightroom helps here: its background around the photograph is grey by default.

## Without a device

You can improve a screen without a colorimeter, but you cannot make it accurate. Software methods rely on your eyes, which adapt and are easily fooled. Treat them as a rough guide only.

- **Turn the brightness down from maximum.** Around half is a sensible start on most laptops
- **Turn off night modes and automatic brightness** while you edit
- **Use the operating system's built-in calibration assistant.** It walks you through brightness, contrast and grey balance by eye. It is better than nothing, and it can also make things worse, so compare before and after
- **Judge exposure with the histogram, not the screen.** The histogram measures the file; the screen only shows it. Press J in Lightroom to see clipping warnings
- **Check on a second screen,** such as a phone at moderate brightness. If the photograph looks too dark on both, it is too dark

## Wide-gamut screens

A wide-gamut screen can show more saturated colours than sRGB, the colour space most photographs on the web use. That is useful for print work, but it creates a trap.

A colour-managed app, such as Lightroom, Photoshop or most current web browsers, reads the profile in the file and translates sRGB colours correctly for the screen. An app that is not colour managed sends the numbers straight to the screen. The screen stretches them over its wider range, so reds glow, greens look electric and skin turns orange.

If a photograph looks right in Lightroom and oversaturated somewhere else on the same screen, the other app is the problem, not your edit. Some wide-gamut screens have an sRGB mode, which limits their colours to sRGB. It can help when all your work is for screens.

## Checking a print against the screen

A print is the most honest test of a calibrated screen. Hold it beside the screen under good, daylight-balanced light. Print viewing standards use about 5000 K. Daylight from a window, out of direct sun, is a fair substitute.

The print will never glow like the screen, because paper reflects light rather than giving it out. But the overall brightness, the depth of the shadows and the colour of the whites should be close. If prints keep coming back darker, lower the screen brightness rather than brightening every photograph. Exporting for screen and print covers soft proofing, which shows the effect of the paper before you print.

## Worked scenarios

- **Prints that keep coming back dark.** A laptop at full brightness measures around 300 candelas per square metre. Lowering it to 100 makes the screen a third as bright, close to paper under room light. Edited at that level, the photographs get slightly brighter mid-tones, and the next prints match the screen more closely
- **Oversaturated pictures in one app.** On a wide-gamut screen, a sunset looks right in Lightroom but garish in an image viewer. The viewer is not colour managed. Check the file in a colour-managed browser, export in sRGB, and leave the edit alone
- **No colorimeter, editing for Instagram.** Turn the screen to about half brightness, switch off night mode, and edit using the histogram. Then check the exported file on a phone with automatic brightness off. If the shadows block up on both, lift them

## Common mistakes

- **Editing at full brightness.** Everything you export looks dark elsewhere. Turn it down
- **Calibrating once and forgetting.** Screens drift. Repeat every month or so
- **Editing in the evening with night mode on.** Everything looks warm, so you cool it too far. Turn night mode off while you edit
- **Trusting a software-only adjustment as accurate.** It is a rough guide. Your histogram is more reliable
- **Blaming the edit for a colour management problem.** Check the photograph in Lightroom or a colour-managed browser first

## Checking your work

- Look at a black and white photograph you know well. Neutral greys should look neutral, with no tint of blue, green or magenta
- Check that a run of grey steps from black to white shows every step, with no shadows merging into black
- Compare a print with the screen in daylight
- After calibrating, look at your recent edits again. If many now look too dark, your old screen was too bright

> You cannot edit what you cannot see. Fix the screen first.
