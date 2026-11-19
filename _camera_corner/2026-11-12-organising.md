---
title: "Organising and backing up"
date: 2026-11-12
topic: Editing
order: 27
summary: "Import with care, cull quickly, label what you keep, and hold three copies of every photograph on three different storage points, one of them away from home."
challenge: "Take your most recent shoot. Cull it in two passes: a quick Loupe pass with X to reject, then a Survey pass with P to pick. Give your best five photographs four or five stars and add three keywords to the whole shoot. Then list every place a copy of those files exists. If the list is shorter than three, or every copy is in the same building, fix that before your next shoot."
quiz: |-
  Q: In the Lightroom Classic Import dialog, which option copies files from a card and leaves the card untouched?
  * Copy
  - Add
  - Move

  Q: Why is a sync service not a backup on its own?
  * A deletion is a change, so it syncs to every copy
  - Sync services cannot store RAW files
  - Sync services only copy edited photographs
  - Sync services make files smaller

  Q: You import 640 RAW files of about 45 MB each and keep three copies. Roughly how much storage do the three copies need in total?
  * About 86 GB
  - About 29 GB
  - About 58 GB
  - About 135 GB

  Q: What does a Lightroom Classic catalog backup contain?
  * The catalog, with your edits, keywords and collections, but not the photographs
  - The photographs and the catalog together
  - The photographs only
  - Only the photographs you have edited
---
A photograph you cannot find is almost as lost as one never taken, and a photograph on one drive is one fault away from gone. This lesson covers the quiet work that protects everything else: importing into Lightroom Classic in a sensible order, sorting keepers from the rest quickly, labelling them so you can find them later, and keeping copies in more than one place.

## Starting settings

- **Import method:** Copy, so the files go where you choose and the card is left as it was
- **Folders:** By date, for example 2026 then 2026-10-10, so every shoot has one obvious home
- **File names:** Date plus the camera's original number, or a custom name plus a sequence; anything that will never repeat
- **Second copy:** Make a Second Copy To ticked, pointing at a different drive, so two copies exist from the first minute
- **Catalog backup:** Once a week when exiting Lightroom, or every time it exits if you edit often
- **Copies of every photograph:** Three, each on a different storage point

These are starting points. Make the change, then step away and look again before you keep it.

## Importing: Copy or Add

Lightroom Classic does not hold your photographs. It keeps a catalog, a database recording where each file is and every change you have made to it. The files sit in ordinary folders on a drive.

Across the top of the Import dialog are Copy as DNG, Copy, Move and Add.

- **Copy** copies files from a card to a folder you choose and leaves the card untouched. Use it for every card
- **Add** leaves files where they already are and adds them to the catalog. Use it for photographs already in the folders you want
- **Move** moves files from one folder to another. It is not offered when you import from a card
- **Copy as DNG** converts RAW files to Adobe's DNG format as it copies. Optional, and slower

In the File Handling panel, tick Make a Second Copy To and choose a folder on a different drive. Lightroom then writes the files twice as it imports. This protects you for the first few days, but it is not a full backup: it does not follow later deletions, and your edits are not in it.

## Folders and file names

In the Destination panel, set Organize to By date and choose a Date Format such as 2026/2026-10-10. In the File Renaming panel, tick Rename Files and choose a Template that includes the date and the original number, so no two files ever share a name.

After import, move or rename files only inside Lightroom, in the Folders panel. Move them in your computer's file browser and the catalog loses track; the thumbnails show a missing-file warning. Right-clicking the missing folder and choosing Find Missing Folder usually reconnects them, but it is easier not to lose them.

## Culling fast

Culling is choosing what to keep. Four views and a few keys make it quick.

- **Grid (G):** many thumbnails, for an overview
- **Loupe (E):** one photograph large, for judging focus and expression
- **Compare (C):** two side by side, for near twins
- **Survey (N):** several selected frames together, for the best of a burst

P marks a pick, X a reject, U removes the flag. With Auto Advance on (in the Photo menu), Lightroom moves on after each key. Make a quick first pass in Loupe rejecting anything soft, badly exposed or duplicated, then choose between what is left in Compare or Survey. Photo > Delete Rejected Photos then clears the rejects, asking whether to remove them from Lightroom only or delete them from the disk.

Press 1 to 5 for stars (0 clears them) and 6 to 9 for red, yellow, green and blue labels. Use stars for quality and colours for purpose, such as blue for "to print". To see only picks, open the Library Filter bar with the backslash key, click Attribute and click the pick flag.

## Keywords and collections

Folders answer "when". Keywords and collections answer "what" and "why".

In the Library module, type keywords into the Keywording panel, separated by commas: a place, a subject, a season. Select a whole shoot in Grid view first to tag every frame at once.

The Collections panel groups photographs without copying them. Click the + button and choose Create Collection. One photograph can sit in "Portfolio", "Prints 2026" and "Coast" while the file stays in its dated folder.

A Smart Collection, from the same + button, fills itself from rules: for example, Keywords contains "harbour" and Rating is greater than or equal to four stars. Every future match appears in it automatically.

## Three copies

The rule is simple: **three copies of every photograph, each on a different storage point.** For example, one on the computer, one on an external drive, and a third somewhere else, such as cloud storage or a drive kept at another address.

Each copy must be on a separate device because devices fail. Two copies on one drive, even in different folders, die together. Two drives on the same computer can be wiped by the same power surge or the same mistake.

One copy must be away from home because fire, flood and theft take everything in one building, the computer and the drive beside it alike.

A sync service is not a backup on its own. Sync copies changes, and a deletion is a change. Delete a folder by mistake and it disappears everywhere, often within seconds. A sync service can hold one of your three copies only if it keeps deleted files and earlier versions long enough to get them back. Check that before you rely on it.

## Backing up the catalog

Your edits, keywords, flags and collections live in the catalog, so backing up only the photographs loses all your work on them.

Open Catalog Settings. It is under the Edit menu or the Lightroom Classic menu, depending on your computer. On the General tab, set Back up catalog to a schedule. When Lightroom closes on that schedule it offers to back up and lets you choose a folder. Choose one on a different drive. These backups contain the catalog only, not the photographs, and they pile up, so delete the oldest now and then.

## Restoring, and the card

A backup you have never restored from is a hope. Every few months, open several files at random from the backup drive, including RAW files. Unzip a recent catalog backup to a spare folder, open it with File > Open Catalog, check that recent edits are there, then reopen your usual catalog.

Leave the memory card untouched until the files are in at least two places. Only then format it, in the camera.

## Worked scenarios

- **A weekend away.** You bring home 640 RAW files at about 45 MB each. 640 × 45 is 28,800 MB, about 28.8 GB, so three copies need about 86 GB in all. A first pass rejects 400, leaving 240. A Survey pass picks 60
- **A drive fails.** The computer's drive dies. The external drive holds every photograph, and last week's catalog backup holds every edit but the last few days. You lose days of editing, not years of photographs
- **The sync trap.** You delete a folder to clear space and the sync service deletes it from the cloud too. With a separate drive as well, you copy it back

## Common mistakes

- **Moving files outside Lightroom.** The catalog loses track. Use the Folders panel
- **Two copies on one drive.** One failure takes both. Use separate devices
- **No copy away from home.** One fire or break-in takes everything
- **Formatting the card too soon.** Wait until the files are in two places
- **Forgetting the catalog.** Every edit and keyword goes with it
- **Labels that overlap.** Flags, stars and colours all meaning "good". Give each one job

## Checking your work

- Find a photograph from two years ago. Under a minute is good
- Name the device holding each copy of last month's photographs. You should reach three, one away from home
- Check in Catalog Settings that catalog backups are scheduled
- Restore one file and one catalog backup

> A photograph is only as safe as its last good copy. Make three, and keep one away from home.
