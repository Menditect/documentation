# Empty value after datatype change

## Issue summary

In some cases, when changing an attribute's datatype between revisions (for instance when changing from Boolean to Enumeration), MTA will assign Empty as value to the attribute, instead of raising an error that the datatype has changed and the user needs to decide what the value should be.

Advise is to note datatype changes in the commit message for Teamserver, so they appear in MTA when changing the revision, and the MTA Testautomator can manually check the value.

This issue will be fixed in a future release.