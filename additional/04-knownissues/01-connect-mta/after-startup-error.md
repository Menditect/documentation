# After Startup Error

## Issue summary

When compiling a Mendix project under test after importing the Menditect Plugin Module, a Critical error occurs in the After Startup microflow, which prevents running the project.

## Possible causes and resolutions

### Older JAR files

There are JAR files in the Mendix project userlib directory that belong to an older version of the Plugin Module. 

** Resolution **
1. Open the Mendix project directory in explorer, or show the project directory from the Mendix modeler.
2. Go to the userlib subdirectory.
3. Delete all previous JAR files (like "mta-plugin-mendix-9-0-1.4.0.jar") and respective .RequiredLib files.
4. Clean your deployment directory if you are running from your local machine.

### Changes made in the Plugin module 

If changes are made to the Plugin module, or in the JAVA files used by the Plugin module, Menditect cannot guarantee that the Plugin module will work as expected. To fix any issues resulting from this, revert the changes made end follow the steps described in the Known Issues section. If the problem persists, contact Menditect support.
