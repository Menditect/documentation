# Revision download fails

## Issue summary

In some cases an MTA user is not able to download a revision of a Mendix App, even if (s)he is linked to a Mendix user that has access to that App.

## Possible causes and resolutions

### Edit Develop rights on App level not granted

Missing App level Develop rights that are applied when selecting a Role in the Team page of a Mendix app.

**Resolution**

To fix this, log in to Mendix Sprintr with a user having the Scrum Master role, and:

- select the Mendix App;
- select Team;
- click on Role settings;
- click on Edit for the Role that is assigned to the Mendix user;
- make sure that 'Edit' is set to 'Yes' for the 'Develop' permission.