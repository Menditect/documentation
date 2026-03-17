---
sidebar_class_name: hidden
---

# Offboard MTA

When offboarding MTA, make sure not to forget the following steps:
- undo any specific network firewall settings that were added specifically for MTA
- make a backup of the MTA database (see below note)
- delete any API keys and PAT's from Mendix user profiles that were added specifically for MTA 
- delete the MTA Plugin module, Playwright Connector module and Mx Frontend Testkit from Mendix Apps
- delete any Menditect specific .JAR files from the `/userlib` folder of Mendix Apps
- make necessary changes in the After Startup microflow of Mendix Apps
- make necessary changes in CI/CD pipelines
- check microflow output parameters that were added specifically for MTA
- delete any test users that were specifically added for MTA

:::note restoring backups
If an MTA backup is ever to be restored, it is necessary to install every MTA version that was released in between consecutively, because each migration has to be executed separately.
:::

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 5 November 2025