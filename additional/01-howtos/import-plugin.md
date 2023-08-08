# Import plugin

**NEW: Watch the video instead!**
<iframe src="https://player.vimeo.com/video/846213936?h=494a93fd4f" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<br/>

In order for MTA to communicate with the Application under test, you need to import a module created by Menditect that will initiate this communication. This is the MTA Plugin module. Each version of MTA comes with a specific version of the MTA Plugin module. The versions are however not the same, because sometimes the MTA Plugin needs to be updated or patched resulting in a newer version.

If you are [running MTA on Premise](run-mta-on-premise), you may notice that MTA also contains an MTA Plugin module. This is because Menditect regression-tests MTA with MTA. The information in this page is regarding the customer Application to test. For Menditect on-premise customers and partners: please don't import the MTA Plugin module into MTA.

:::caution
In no case should you make changes to elements inside the MtaPluginModule. <br/>Menditect will not provide support if the MtaPluginModule is changed after you have imported it into your test project.
:::

## Importing MTA Plugin

Download the MTA plugin module from Mendix Marketplace:

| Mendix Version            | Url                                                       |
| ------------------------- | --------------------------------------------------------- |
| Mendix 9.24 - Mendix 10   | Will be released soon!                                    |
| Mendix 9.0 - Mendix 9.24  | https://marketplace.mendix.com/link/component/206637      |
| Mendix 8.12 - Mendix 8.18 | https://marketplace.mendix.com/link/component/210123      |
| Mendix 7.23 - Mendix 8.11 | [Contact Menditect Support](mailto:support@menditect.com) |

Always make sure to download the right release. The MTA version supported by the release is listed in the description on Github. 

Import the MTA plugin module package **in your test application** as a new module. If you have imported it before, make sure to replace the module and not delete it first. Deleting it first may result in having to fix errors manually. 

:::info
After importing, make sure to delete any old JAR files like mta-plugin-xxx.jar from the userlib subfolder in your project directory. <br/>
If you are experiencing compilation errors or errors in the After startup microflow, try cleaning up your deployment directory first.
:::

### Upgrading to a newer runtime version

To upgrade the major version of your Mendix App (for example, from Mendix 8.18 to 9.12), you need to make sure to replace all the files related to the MTA Plugin Module. Delete the complete module from the project and delete the JAR files from the userlib subfolder in your project directory. Then, download the respective MTA plugin module from Github that matches the newer Mendix version as listed above. You can do all this before performing the upgrade.

## Configuring MTA Plugin

### Including After startup microflow

After you have downloaded the MTA Plugin, you need to configure your Application under test.
Open the App Settings window in Mendix Studio Pro and navigate to the Runtime tab. On the "After startup" setting, click on 'Show' if there is an After startup microflow already selected. Make sure to include the "At_Startup_Setup_Connection" microflow in the MtaPluginModule. 

If there is no existing After startup microflow, just select the "ASU_Setup_Connection_MTA" in the popup window.

### Configuring Connection user in MTA

After MTA has started up for the first time, it will create a Connection user. 

In order to allow a Mendix App to connect to MTA you need to set the password for this Connection user. There is only one Connection user per MTA node so the password is the same for all Mendix Apps that you want to test in MTA.

If you have already set the password previously for another App, use that password. Otherwise follow these steps. 

- Login to MTA as MTA Manager.
- Navigate to MTA management, MTA Users.
- Edit the 'MTAConnectionUser' account.
- Set the password. 
- Save the password in a password manager that you can share with your colleagues.

### Setting Constants

To configure the MTA Plugin, there are 5 constants that you have to assign a value. If you are testing an app that is running locally, assign the values in the project configuration settings (Mendix docs: https://docs.mendix.com/refguide/configuration/#2-configuration-settings) but *never* inside the MtaPluginModule. 

:::info
To find the values for any of these Constants, simply [open the details of the Application Instance](../../application-instance#view-application-instances-for-an-application) in MTA and click on a Copy button. 
:::

#### `ApplicationInstanceToken`
This corresponds with an ID that MTA has generated for an Application Instance. 
You can set this constant after you have [added an Application Instance](../../application-instance#create-an-application-instance) in MTA.

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

#### `MTAWebSocketURL`
This is the URL that the app will use to connect to MTA. The URL is setup as follows:

*wss://{URL to MTA}*

Example: wss://mta-mtatraining.mendixcloud.com

:::caution
The constant `NoAssociationResponse` is experimental. This feature is not supported. Use at your own risk.
:::

### Configuring Plugin Home page

:::note
As of MTA version 2.0, configuring the MTA Plugin Home page is only necessary if you want to manually connect to MTA. 
:::

- Create a Page with a Responsive layout.
- Insert the "MTAPluginPage" snippet from the MTA Plugin Module.
- Add Project User Roles to the Page.
- Add the "MTAPluginUser" Module role from the MTA Plugin Module to all of these Project User Roles.
- Include the new Page in the Navigation.

You can now view connection details and manually connect to MTA, with accounts having the Project User Roles that you specified.


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 7 february 2023