# Cannot add application

## Issue summary

Sometimes a Mendix Application or Application Branch is not visible in the list when adding an [Application](../../../mta/application) or [Revision](../../../mta/application-revision).

## Possible causes and resolutions

If an Application or Branch is not (yet) visible, this could be because the App is not yet Published to a Sandbox or Licensed Cloud Environment. It could also be because the App is only published to a private cloud environment.

If the Application was just added to Mendix, you first have to hit the Publish button from Mendix Studio Pro.

If the Publish button is not yet enabled, you have to restart Mendix Studio Pro. 

If the Application is still not visible, it's possible to manually add the Application using the "..." button on top-right of the [Add Application page](../../../mta/application#register-application-in-mta).