# Cancelling revision download takes a long time

## Issue summary

When cancelling a Revision Download, the Cancel action takes a very long time. The "Cancelling download" message appears on the screen and remains there.

## Possible causes and resolutions

### Large Mendix model

The Mendix model that was (partially) downloaded contains a lot of data. The Cancel download action will delete these data which takes some time.

In some cases however, the "Cancelling download" message may not disappear. 

**Resolution**

If the "Cancelling download" message does not disappear, you can refresh the page, and log out and login again. However it is advisable to wait with retrying the revision download. Deleting the revision data may still be running in the background. If a subsequent revision download also fails, you will have to wait longer.

This is a known issue that will be fixed in MTA 2.11.
