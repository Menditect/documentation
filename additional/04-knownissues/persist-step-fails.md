# Persist teststep fails

## Issue summary

In some cases the Persist step can fail with an unspecified error.

## Possible causes and resolutions

### Delete constraints

There are delete constraints defined on entities. Objects for these entities have to be deleted in a certain order. If the objects are deleted and there is only one persist action at the end, this action will fail in some scenarios.

** Resolution **
1. Make sure to set the Test Case Apply Security to 'Off'.
2. After each set of Retrieve and Delete Object teststeps, create a Persist Object teststep.
3. If the problem is still not solved, create a separate Test Case for each set of Retrieve and Delete Object teststeps.
