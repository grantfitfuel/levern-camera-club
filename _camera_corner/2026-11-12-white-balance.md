---
title: "White balance"
date: 2026-11-12
author: Grant Anthony
topic: Light
order: 4
start_here: 4
summary: "Light has a colour, even when it looks white. What white balance does, which setting to use when, and the kelvin values behind them."
challenge: "Find a scene with something white or grey in it. Take the same frame at Auto, Daylight, Cloudy, Shade and Tungsten, without moving. Compare them side by side at home, and notice which setting kept the light as you remember it. Then, on the RAW file, click the white or grey area with Lightroom's White Balance Selector and see which preset it lands closest to."
quiz: |-
  Q: You set the camera to 3200 K outdoors in midday sun. How does the photograph look?
  * Blue
  - Orange
  - No different

  Q: Which setting keeps the warmth of a sunset that Auto keeps cooling?
  * Daylight
  - Tungsten
  - Fluorescent

  Q: A portrait taken in open shade looks slightly blue. Which preset corrects it?
  * Shade
  - Tungsten
  - Fluorescent

  Q: Why shoot RAW if white balance matters?
  * You can change it afterwards with no loss of quality
  - RAW files record no colour
  - RAW sets the white balance automatically
---
Light has a colour, even when it looks white to you. Candlelight is orange, midday sun is close to neutral, and the light in shade on a sunny day is blue. Your eyes adjust so quickly that you rarely notice. The camera does not, so it has to be told what colour the light is. That is white balance.

Get it right and white things look white, skin looks like skin, and a sunset keeps its warmth. Get it wrong and the whole photograph leans orange or blue. This lesson explains what the settings do, which to use when, and the kelvin values behind them.

## Starting settings

- **File format:** RAW, so white balance can be changed afterwards with no loss of quality
- **Outdoors in sun, golden hour and blue hour:** Daylight, about 5200 K, so the camera keeps the colour of the light instead of cancelling it
- **Grey days:** Cloudy, about 6000 K, or Daylight and warm it slightly later
- **Shade on a sunny day:** Shade, about 7000 K
- **Indoors under ordinary bulbs:** Tungsten, about 3200 K, or Auto
- **Mixed or difficult light:** Auto, then correct it from the RAW file
- **Kelvin setting:** 2500 K to 10000 K covers almost everything you will meet

These are starting points. Take a frame, check the histogram, and adjust one thing at a time.

## What white balance does

The camera records the light as it arrives. White balance then adds the opposite colour to cancel any cast: blue to cancel orange light, orange to cancel blue light. Set it to match the light and whites come out neutral.

It changes only colour. Exposure, sharpness and depth of field stay exactly the same.

## Kelvin, explained

The colour of light is measured in kelvin, written K. Low numbers are warm and orange, high numbers are cool and blue. That feels backwards at first, because we call orange colours warm. It comes from physics: a heated object glows orange at lower temperatures and blue-white at higher ones.

The setting on your camera, and the Temp slider in Lightroom, describe the light you are correcting for. So the rule is:

- **Set a lower number than the light** and the photograph turns bluer
- **Set a higher number than the light** and the photograph turns warmer

Set 3200 K outdoors at midday and everything goes blue, because the camera is cancelling orange light that is not there. Set 9000 K and it goes orange. The demo above shows this on a daylight photograph.

## The colour of common light

These are typical values. Real light varies with the weather, the season, the time and how far you are from the equator.

- **Candle:** about 1900 K
- **Household warm white bulbs and LEDs:** about 2700 K to 3000 K
- **Sunrise and sunset, sun on the horizon:** about 2000 K to 3500 K
- **Low sun in the hour after sunrise and before sunset:** about 3500 K to 4500 K
- **Cool white fluorescent and LED tubes:** about 4000 K
- **Midday sun:** about 5000 K to 5500 K
- **Camera flash:** about 5500 K to 6000 K
- **Overcast sky:** about 6000 K to 7000 K
- **Open shade on a sunny day:** about 7000 K to 8000 K
- **Clear blue sky and blue hour:** 9000 K and above

## The camera's presets

Each preset is a fixed kelvin value with a name. The values differ slightly between makers; these are typical.

- **Auto (AWB):** the camera guesses from the scene
- **Daylight:** about 5200 K
- **Cloudy:** about 6000 K, warms a grey day a little
- **Shade:** about 7000 K, warms more, for shade under blue sky
- **Tungsten:** about 3200 K, for ordinary bulbs
- **Fluorescent:** about 4000 K, for tube lighting
- **Flash:** about 5500 K to 6000 K
- **Custom:** set from a photograph of something white or grey in the same light
- **K:** pick the kelvin value yourself

Many cameras also have a choice inside Auto: one that keeps some warmth under bulbs, and one that makes whites fully white. Check your camera's menu.

## Which to use when

- **Golden hour and sunsets.** Daylight. Auto often sees the orange as a mistake and cools it, which drains the sunset
- **Blue hour.** Daylight keeps the blue sky and warm lights. Tungsten deepens the blue and makes the lights more neutral; see Night and blue hour in cities
- **Overcast days.** Cloudy, or Daylight and warm it a few hundred kelvin later
- **People in shade.** Shade, or skin turns slightly blue and lifeless
- **Snow.** Snow in shade turns blue. Shade or Cloudy brings it back to white; Daylight keeps a cold mood
- **Woodland.** Light through leaves picks up green. Correct with the Tint slider later, towards magenta
- **Indoors.** Tungsten under warm bulbs, Fluorescent under tubes, or Auto when the light is mixed
- **Panoramas and sequences.** Any fixed setting, never Auto, so every frame matches

## Auto white balance

Auto is good in ordinary light and often right indoors. It struggles when one colour fills the frame, such as a sunset, a field of green or a red wall, because it tends to treat a strong colour as a cast to remove. It can also change from frame to frame as you move, which shows when photographs sit side by side. Fix the setting whenever the light colour is part of the picture or several frames need to match.

## Custom white balance and grey cards

For accurate colour, photograph a grey card or a sheet of plain white paper in the same light as your subject, filling the centre of the frame. Then choose Custom white balance in the camera menu and select that photograph. The camera works out the exact kelvin value and tint.

Shooting RAW, you can do the same afterwards. Take one frame with the card in it, and in Lightroom click the card with the White Balance Selector, the eyedropper in the Basic panel (press W). Copy the result to every photograph taken in that light.

## Mixed light

A room lit by a window and by bulbs has two colours of light at once. No single setting makes both neutral. Choose the one that falls on the subject and let the other stay warm or cool; a warm lamp in a cool room often looks right. In Lightroom you can then use a mask with its own Temp and Tint to correct one area.

## Correcting it in Lightroom

In the Develop module, the Basic panel has the White Balance menu, Temp and Tint.

- **RAW files:** choose a preset from the menu, or move Temp in kelvin, from 2000 K to 50000 K. Tint moves between green and magenta
- **JPEG files:** the camera has already fixed the white balance. Temp becomes a scale from minus 100 to +100 and there is far less room to correct a strong cast

Small moves go a long way. A few hundred kelvin is often enough.

## Worked scenarios

- **A sunset that came out grey.** Auto chose about 4800 K. In Lightroom set Temp to 5800 K and the colour returns. If it now looks too orange, come back to 5500 K
- **A portrait in shade looks blue.** Shot at Daylight, 5200 K. Choose Shade, or move Temp to around 6700 K, and check the skin against something white in the frame
- **A café interior looks orange.** Shot at Daylight under warm bulbs. Choose Tungsten, or click a white cup or napkin with the eyedropper. Keep a little warmth by moving Temp up 200 K to 300 K afterwards

## Common mistakes

- **Correcting every photograph to neutral.** A sunset is meant to be warm and blue hour is meant to be blue. Neutral is a choice, not a rule
- **Leaving Auto on for a sequence.** Each frame drifts a little; set a fixed value
- **Judging colour on the camera screen in bright sun.** The screen is hard to see and often too bright or cool. Check at home
- **Ignoring Tint.** Green from leaves or some LED lights needs Tint, not Temp
- **Correcting on an uncalibrated screen.** If the screen is blue, every edit ends up warm. See Monitor calibration

## Checking your result

- Find something that should be neutral: white paint, grey stone, a cloud away from the sun, a white shirt. Does it look neutral, or does it lean on purpose?
- Look at skin. It should look healthy, not orange, grey or pink
- Compare with the photographs either side of it from the same light
- Look at it again on another screen, such as your phone

> White balance is not about making everything white. It is about deciding what colour the light should be.
