---
sidebar_position: 2
---

# Install MTA Plugin

You can watch this video to view the configuration steps that are described below.

<iframe src="https://player.vimeo.com/video/846213936?h=494a93fd4f" width="640" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

## Installation instructions

Import the [MTA Plugin](../../Tools/mta-plugin) in the [Mendix App](../../mta/application) under Test.

If you are experiencing compilation errors or errors in the After startup microflow, try cleaning up your deployment directory first.

After you have imported the Plugin into your Mendix App that you want to test with MTA, you can configure the Plugin to connect to MTA.

After logging in as Tester in MTA, it is possible to [register the Mendix App](../../mta/application#register-application-in-mta), which will trigger the [creation of an Application Instance](../../mta/application-instance#create-an-application-instance), that you need to configure the Plugin.

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

To find the values for any of these Constants, simply [open the details of the Application Instance](../../mta/application-instance#view-application-instances-for-an-application) in MTA and click on a Copy button. 

:::warning
Never set these constants on a Production environment!
:::

#### `ApplicationInstanceToken`
This corresponds with an ID that MTA has generated for an Application Instance. 
You can set this constant after you have [added an Application Instance](../../mta/application-instance#create-an-application-instance) in MTA.

#### `ConnectionMethod`
This will determine if your app will try to connect to MTA, either
- 'AfterStartup': After deployment the app will try to connect to MTA using the provided token and Connection User's credentials.
- 'Manual': You have to establish the connection to MTA manually, with the [Plugin Home page](#manual-connection) in the app.
- 'None': This will disable the connection to MTA.

Any other value will result in an error message when attempting to establish the connection to MTA.

#### `MTAConnectionUsername`
This is the username that is set for the Connection user in MTA. The default value is 'MTAConnectionUser'.

#### `MTAConnectionPassword`
This is the password that is set for the Connection user in MTA [in the previous step](#configure-connection-user-in-mta).

#### `MTAConnectionUrl`
This is the URL that the app will use to connect to MTA. The URL is setup as follows:

*wss://{URL to MTA}*

Example: wss://mta-mtatraining.mendixcloud.com

:::info
The constant `NoAssociationResponse` is not officially supported.
:::

### Manual connection

From MTA 3.0, the [MTA Plugin](../../Tools/mta-plugin) is an [Add-on module](https://docs.mendix.com/refguide/consume-add-on-modules-and-solutions/). Imported Add-on modules cannot contain Snippets or Pages. If you used a Page before to establish the connection to MTA, you can download a Module with a Snippet from here: https://marketplace.mendix.com/link/component/252213

In this module, you can use the `MTAPluginStatus` Snippet in a Page, to view Connection details and establish a connection manually.

### Upgrading Mendix Runtime of the parent Project  

To upgrade the major version of your Mendix App (for example, from Mendix 9 to 10), you need to make sure to replace all the files related to the MTA Plugin Module. 

Delete the complete module from the project and delete the JAR files from the userlib subfolder in your project directory. 

Then, download the MTA Plugin module that matches the newer Mendix version as listed above. You can do all this before performing the Mendix Runtime upgrade.
