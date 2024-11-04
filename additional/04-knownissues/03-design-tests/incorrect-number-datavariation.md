# Incorrect sequence number in data variation

## Issue summary

In some cases the sequence number of the Test Case shown in the data variation pages is not correct.

## Possible causes and resolutions

### Revision does not match

When deleting a Test Case before a Test Case that has data variation, the sequence number of the Test Case in the data variation page is not recalculated.

**Resolution**

There is no workaround other than deleting and re-entering the data variation. 

But, although the wrong sequence number is displayed in the data variation page, the actual sequence number of the Test Case still applies.

The issue is known and will be fixed in a future release of MTA. 
