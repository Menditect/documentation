# Java action not implemented

## Issue summary

When attemting to execute a Test Configuration, a HTTP 500 error occurs. The logging of the Application Environment reveals that a Java action was not implemented.

## Possible causes and resolutions

### Javasource mtapluginmodule directory missing

The javasource\mtapluginmodule subdirectory in the project directory of the Test Application is deleted or empty. 
This could be result of importing the MTA Plugin Module as a (private) marketplace module. 
The MTA Plugin Module should be imported as a normal project module. 

** Resolution **
Follow [these steps](../howtos/import-plugin) to correctly import the plugin module.
