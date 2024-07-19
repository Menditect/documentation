# Java Compile Error

## Issue summary

When compiling a Mendix project under test after importing the Menditect Plugin Module, a Java Compile Error occurs, which prevents running the project.

## Possible causes and resolutions

### Older JAR files

There are JAR files in the Mendix project userlib directory that belong to an older version of the Plugin Module. 

** Resolution **
1. Open the Mendix project directory in explorer, or show the project directory from the Mendix modeler.
2. Go to the userlib subdirectory.
3. Delete all previous JAR files (like "mta-plugin-mendix-9-0-1.4.0.jar") and respective .RequiredLib files.
4. Clean your deployment directory if you are running from your local machine.

### Conflicting Java parameter names

In Mendix modeler 7, a known issue is that when a parameter name of a Java action exactly matches an entity name somewhere in the project, Mendix will change the parameter name in the generated code of the JAVA file, but not in the Mendix project (and also not in the user code of the JAVA file). 

** Resolution **

There are multiple ways of resolving this issue. Follow one of the steps described below:
1. Rename the entity if possible.
2. Rename the parameter name in the Mendix project and in the user code of the JAVA file, to match what Mendix has generated.
3. Upgrade your project to Mendix 8.

### Changes made in the Plugin module 

If changes are made to the Plugin module, or in the JAVA files used by the Plugin module, Menditect cannot guarantee that the Plugin module will work as expected. To fix any issues resulting from this, revert the changes made end follow the steps described in the Known Issues section. If the problem persists, contact Menditect support.
