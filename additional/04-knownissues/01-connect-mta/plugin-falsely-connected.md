# Plugin falsely connected

## Issue summary

When connecting an [Application Instance](../../../mta/application-instance) to MTA, the [MTAPluginPage snippet](https://marketplace.mendix.com/link/component/252213) in the test application shows that the instance is "Connected" and received a Connection ID, where MTA shows that the instance is not connected.

## Possible causes and resolutions

The App was restarted or an unknown (non existing) Application Token was used to connect.

The error is only shown in the application logging. However this error is not communicated to the [MTA Plugin](../../../Tools/mta-plugin), so the test application seems to be connected. 

**Resolution**

Check the Application Token and re-establish the connection.

[Download the MTA Connection Snippet](https://marketplace.mendix.com/link/component/252213) and insert it in an Admin page to connect from a running Mendix App.