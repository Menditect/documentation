# Executing Test fails

## Issue summary

In some situations, executing a test on an Application that runs in the cloud, will fail.

It does not matter if the Test Configuration is executed, or only a single Test Case.

All the Test Case runs will have the same result that appears only after the Test Case "Execution time-out" (default 5 minutes) has passed. 
- Only the first Test Case of each Test Suite will have executed.
- The error message on the first Test Case will be: "Cannot execute test run, because there is no reply or the process has been stopped manually."
- The entire Test Run will have failed but with an unspecific error.

## Possible causes and resolutions

This happens for a licensed Application Instance running in the cloud (not for instances running locally or Sandboxes) that have not been (re)deployed for some time.

The resolution is restarting the Application Instance. If the MTA Plugin is configured to connect to MTA After Startup, the connection will be refreshed.
Alternatively it is possible to use the [Plugin Home page](../howtos/import-plugin#configuring-plugin-home-page) to disconnect and reconnect to MTA.