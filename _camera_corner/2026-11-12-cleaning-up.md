---
title: "Cleaning up a photograph"
date: 2026-11-12
topic: Editing
order: 30
summary: "Sensor dust, distractions, colour fringes and leaning lines. How to fix them in Lightroom and Photoshop so nobody notices, and when you should not remove anything at all."
challenge: "Find a photograph taken at f/11 or smaller with a plain sky. Turn on Visualize Spots and count the dust spots. Remove them, then sync the fixes to three other frames from the same day and check each one at 100 percent. Note how many synced fixes needed moving."
quiz: |-
  Q: Why does sensor dust show most at small apertures such as f/16?
  * The light reaches the sensor in a narrow cone, so the dust casts a sharper shadow
  - Small apertures attract more dust
  - The camera turns off dust removal at small apertures

  Q: What does Visualize Spots in Lightroom's Remove tool do?
  * Shows the photograph as a black and white outline view where dust appears as white rings
  - Removes every dust spot automatically
  - Marks dust spots in red
  - Shows only the sky

  Q: A copied dust fix lands on a gull in another frame. What should you do?
  * Delete that fix and redo it by hand on that frame
  - Leave it; synced fixes are always correct
  - Sync again from the other frame
  - Raise Defringe

  Q: In which of these is removing an object from a photograph not acceptable?
  * A news or documentary photograph
  - A print for your own wall
  - A portfolio picture where you say what you changed
---
Cleaning up is the unglamorous part of editing: dust spots on the sensor, a crisp packet on the beach, colour fringes along a branch, a horizon that leans. None of it should be noticed. Done well, the photograph simply looks the way it should have looked in the first place.

This lesson uses Lightroom, with Photoshop for the occasional small tweak. That split suits cleaning up: Lightroom Classic handles most of it, and Photoshop is there for the jobs Lightroom cannot do cleanly.

## Starting values

- **Remove tool size:** just larger than the spot, so the fix blends without smearing nearby detail
- **Remove tool feather:** low for crisp dust on clear sky, higher for soft-edged blemishes
- **Visualize Spots:** on, with the slider raised until dust shows as white rings, then lowered slightly
- **Lens profile:** Enable Profile Corrections and Remove Chromatic Aberration both ticked
- **Defringe Purple Amount:** 0 to 5, raised only until the fringe turns grey
- **Upright:** Auto or Guided for buildings, Level for horizons, with Constrain Crop ticked

These are starting points. Make the change, then step away and look again before you keep it.

## An order that saves work

Fix the geometry first: lens corrections, then straightening and perspective, then the crop. Clean up last. There is no point removing a spot that the crop will throw away, and lens corrections can move or stretch the edges of the frame.

## Sensor dust

Dust on the sensor shows as soft grey blobs, always in the same place in every frame. It is easiest to see against plain, bright areas such as sky, and it shows most at small apertures. At f/16 or f/22 the light reaches the sensor in a narrow cone, so the shadow of each speck is sharp. At f/4 the same speck may barely show.

In the Develop module, choose the Remove tool from the tool strip under the Histogram (Q is the shortcut). Tick Visualize Spots in the toolbar beneath the photograph. The picture turns into a black and white outline view, and dust appears as small white rings. Move the Visualize Spots slider until the rings stand out, then click each one with a brush just larger than the spot. Untick Visualize Spots and look at the photograph normally to check every fix blends.

Within the tool you can choose Remove, Heal or Clone. Heal suits most dust on sky because it matches the surrounding tone. Clone copies a patch exactly, which helps along a hard edge.

## Synchronising spot removal

Because dust sits in the same place on every frame, you can fix one photograph and copy the fixes to the rest. Select the edited frame first, then the others, click Sync, and in the dialog tick only the spot removal settings.

Do this with care. A fix that blended into sky on one frame may land on a rock, a face or a branch on the next, and copy a patch of sky onto it. Go through every synced frame with Visualize Spots on and at normal view, and remove or move any fix that has landed on detail.

## Removing distractions

Beyond dust, the Remove tool handles larger things: a bin, a sign, a stray walker at the edge. Paint over the whole object and its shadow. Lightroom fills the area using the surroundings.

The tool has options for how it fills. A content-aware method builds the fill from nearby pixels and works well on sky, water, grass and sand. A generative option, where your version offers it, generates new pixels with an AI model and can cope with larger or more complicated areas. It needs an internet connection, and it gives three variations to choose between. Both can invent detail that was never there, so check the result closely.

Photoshop gives more control for hard cases.

- **Spot Healing Brush:** paint over a small blemish and it blends from the surroundings. Work on an empty layer with Sample All Layers ticked so you can undo any stroke later
- **Clone Stamp:** hold Alt or Option and click to set a source, then paint. Use it along straight edges, such as a wall or a horizon, where healing tools smear
- **Content-Aware Fill:** select the object, then choose Edit > Content-Aware Fill. A workspace shows which area it is sampling from; paint out any area it should not use, then send the result to a new layer

## Lens corrections

Every lens bends and darkens the picture a little. In the Lens Corrections panel, on the Profile tab, tick Enable Profile Corrections. Lightroom reads the lens from the file and removes its distortion and the darkening in the corners. Tick Remove Chromatic Aberration too. It removes most of the coloured edges caused by the lens bringing different colours to slightly different points.

What remains is usually purple or green fringing along high contrast edges, such as branches against bright sky. On the Manual tab, under Defringe, raise Purple Amount or Green Amount until the fringe turns grey. Use the Hue sliders to target its exact colour. Too much greys out purple or green things that should be there, such as flowers.

## Straightening and perspective

For a horizon, the Crop tool (R) has an Angle slider and a straighten tool you drag along the horizon. Alternatively, in the Transform panel, click Level under Upright.

For buildings, Upright offers Auto, Guided, Level, Vertical and Full. Auto and Vertical often correct converging verticals in one click. Guided lets you draw up to four lines along edges that should be straight. Every correction stretches the picture and pushes some of it out of the frame, so leave room around a building when you shoot it. For when to correct and when to leave the lean, see Architecture.

## The ethics of removing things

Removing a crisp packet from a beach is fine in a picture for your wall or your portfolio. It is not fine everywhere.

- **Documentary and news photography:** removing or adding anything is not acceptable. The picture is a record
- **Competitions:** many, especially in nature and documentary categories, allow only dust removal and basic adjustments. Read the rules before you enter
- **Selling or sharing as fact:** if someone will take your photograph as evidence of what was there, be honest about what you removed

Where it matters, say what you changed.

## Worked scenarios

- **A dusty sky.** A coast at f/16 shows nine dust spots in the sky. Fix them on one frame with the Remove tool in Heal mode, sync the spot removal to the other 11 frames from the same set, then check all 12. On two frames a fix has landed on a gull; delete those fixes and redo them by hand
- **A sign at the edge.** A road sign pokes into the corner of a woodland scene. Cropping it out would cost about a tenth of the width. Instead, paint it out with the Remove tool, then zoom to 100 percent and check the leaves around it for repeated patterns
- **A church interior.** Verticals lean inwards. Enable Profile Corrections, click Vertical under Upright, then crop. The pillars stand straight, at the cost of losing some floor and ceiling

## Common mistakes

- **Cleaning before cropping.** Wasted effort on areas you then crop away
- **Blind syncing.** Copied fixes land on detail in other frames. Check every one
- **Repeated patterns.** Cloned grass or leaves that repeat. Vary the source, or use a different mode
- **Smeared edges.** Healing along a straight edge blurs it. Use Clone or Clone Stamp
- **Too much Defringe.** Real purple and green things go grey. Lower the amount
- **Removing what the picture is about.** A path or a person can be the point

## Checking your work

- Turn Visualize Spots on one last time before you export
- View at 100 percent along every fix and every edge
- Look for repeated patches of texture, which give clones away
- Toggle the before and after view with the backslash key and ask whether anything looks invented

> The best clean-up is the one nobody sees. The second best is the one you are honest about.
