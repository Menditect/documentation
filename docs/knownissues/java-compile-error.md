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

### Conflicting Java parameter names

In Mendix modeler 7, a known issue is that when a Java parameter name exactly matches an entity name somewhere in the project, Mendix will change the parameter name in the generated code of the JAVA file, but not in the Mendix project (and also not in the user code of the JAVA file). An example is the "Request" parameter of the "mtaPluginAction" Java file. If somewhere in the project an entity exists that is also called "Request", the project will not compile.

** Resolution **
There are multiple ways of resolving this issue. Follow one of the steps described below:

