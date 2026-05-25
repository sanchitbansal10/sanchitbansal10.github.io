Create a new weeknote entry for the current week.

1. Determine the current ISO week number and year (format: YYYY-WWW, e.g. 2026-W21)
2. Check that `content/weeknotes/` exists
3. Create `content/weeknotes/YYYY-WWW.md` with this template (substitute real values for title and date):

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

4. Open the file for editing so the user can fill it in.

Use today's actual date for the `date` field and the correct ISO week number for the filename and title.
