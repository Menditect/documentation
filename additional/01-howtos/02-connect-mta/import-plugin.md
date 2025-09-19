---
sidebar_position: 1
---

# Import And Configure MTA Plugin

To import and configure the [MTA Plugin](../../../tools/mta-plugin), read this page or watch this video.

<iframe src="https://player.vimeo.com/video/846213936?h=494a93fd4f" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<br/>
<br/>

:::caution
Don't make changes to elements inside the MtaPluginModule. Configure Constants in the Project settings in Studio Pro.<br/>Menditect will not provide support if the MtaPluginModule is changed after you have imported it into your Mendix project.
:::

## Import MTA Plugin

Import the MTA plugin module package **in the Application under Test** as a new module. 
- If you have imported it before, replace the existing module. 
- Only delete the existing module first, if you are [upgrading a major Mendix version](#upgrading-mendix).

:::info
After importing, make sure to delete any old JAR files like mta-plugin-xxx.jar from the userlib subfolder in your project directory. <br/>
If you are experiencing compilation errors or errors in the After startup microflow, try cleaning up your deployment directory first.
:::


## Configure MTA Plugin

After you have imported the Plugin into your Mendix App that you want to test with MTA, you can configure the Plugin to connect to MTA.

If you are working in a new MTA environment, make sure to first [create MTA Manager and Tester accounts in MTA](../configure-mta/manage-accounts). After logging in as Tester in MTA, it is possible to [register the Mendix App](../../../mta/application#register-application-in-mta), which will trigger the [creation of an Application Instance](../../../mta/application-instance#create-an-application-instance), that you need to configure the Plugin.

### Include After startup microflow

- Open the App Settings window in Mendix Studio Pro.
- Navigate to the Runtime tab. 
- On the "After startup" setting, click on 'Show' if there is an After startup microflow already selected. 
- Make sure to include a Call Microflow action to the `ASU_Setup_Connection_MTA` microflow in the MtaPluginModule. 
- Otherwise, just select the `ASU_Setup_Connection_MTA` in the popup window.

### Configure Connection user in MTA

MTA will create a Connection user when starting up for the first time. 

In order to allow a Mendix App to connect to MTA, you need to set the password for this Connection user. There is only one Connection user per MTA node so the password is the same for all Mendix Apps that you want to test in MTA.

If you have already set the password previously for another App, use that password. Otherwise follow these steps. 

- Login to MTA as MTA Manager.
- Navigate to MTA management, MTA Users.
- Edit the 'MTAConnectionUser' account.
- Set the password. 
- Save the password in a password manager that you can share with your colleagues.

### Set Constants

To configure the MTA Plugin, there are 5 constants that you have to assign a value. 
If you are testing an app that is running locally, assign the values in the project configuration settings (Mendix docs: https://docs.mendix.com/refguide/configuration/#2-configuration-settings) but *never* inside the MtaPluginModule. 

To find the values for any of these Constants, simply [open the details of the Application Instance](../../../mta/application-instance#view-application-instances-for-an-application) in MTA and click on a Copy button. 

:::warning
Never set these constants on a Production environment!
:::

#### `ApplicationInstanceToken`
This corresponds with an ID that MTA has generated for an Application Instance. 
You can set this constant after you have [added an Application Instance](../../../mta/application-instance#create-an-application-instance) in MTA.

#### `ConnectionMethod`
This will determine if your app will try to connect to MTA, either
- 'AfterStartup': After deployment the app will try to connect to MTA using the provided token and Connection User's credentials.
- 'Manual': You have to establish the connection to MTA manually, with the [Plugin Home page](#configuring-plugin-home-page) in the app.
- 'None': This will disable the connection to MTA.

Any other value will result in an error message when attempting to establish the connection to MTA.

#### `MTAConnectionUsername`
This is the username that is set for the Connection user in MTA. The default value is 'MTAConnectionUser'.

#### `MTAConnectionPassword`
This is the password that is set for the Connection user in MTA [in the previous step](#configuring-connection-user-in-mta).

#### `MTAConnectionUrl`
This is the URL that the app will use to connect to MTA. The URL is setup as follows:

*wss://{URL to MTA}*

Example: wss://mta-mtatraining.mendixcloud.com

:::info
The constant `NoAssociationResponse` should not be modified. The feature is experimental, and not officially supported.
:::

### Configure Plugin Home page

Including this page in your App is necessary if you want to manually connect to MTA (with [ConnectionMethod](#connectionmethod) = "Manual"). 

- Create a Page with a Responsive layout.
- Insert the "MTAPluginPage" snippet from the MTA Plugin Module.
- Add Project User Roles to the Page.
- Add the "MTAPluginUser" Module role from the MTA Plugin Module to all of these Project User Roles.
- Include the new Page in the Navigation.

You can now view connection details and manually connect to MTA, with accounts having the Project User Roles that you specified.


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 30 June 2025