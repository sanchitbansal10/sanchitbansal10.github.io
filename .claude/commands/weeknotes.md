Create a new weeknote entry for the previous week.

This skill is run on Mondays. Weeknotes cover the previous Monday–Sunday period.

1. Determine the previous week's ISO week number and year (format: YYYY-WWW, e.g. 2026-W22).
   - "Previous week" = the Mon–Sun period that just ended yesterday (Sunday).
   - The `date` field should be the Monday that started that previous week (not today).
2. Check that `content/weeknotes/` exists.
3. If `content/weeknotes/YYYY-WWW.md` already exists, open it for editing — do not overwrite it.
4. Otherwise, create `content/weeknotes/YYYY-WWW.md` with this template (substitute real values):

```
+++
title = "Week WW, YYYY"
date = "YYYY-MM-DD"
draft = false
description = ""
+++

## One highlight



## Work



## Fitness



## Tech & learning



## Read / watched / listened to

- 

## What's next


```

5. Open the file for editing so the user can fill it in.

Use the Monday of the previous week for the `date` field and its ISO week number for the filename and title.
