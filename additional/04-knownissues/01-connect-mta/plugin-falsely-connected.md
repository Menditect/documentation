# Plugin falsely connected

## Issue summary

When connecting an [Application Instance](../../../mta/application-instance) to MTA, the MTAPluginPage snippet in the test application shows that the instance is "Connected" and received a Connection ID, where MTA shows that the instance is not connected.

## Possible causes and resolutions

An unknown (non existing) Application Token was used to connect.

MTA does not recognize the Application Token and breaks off the connection. The error is only shown in the application logging. However this error is not communicated to the MTA Plugin, so the test application seems to be connected. 

**Resolution**

Check the Application Token and re-establish the connection.