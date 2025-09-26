---
sidebar_position: 1
---

# MTA Plugin

## Purpose

In order for MTA to communicate with the [Application Instance](../mta/application-instance) under test, you need to import a module created by Menditect that will initiate this communication. 

This is the MTA Plugin module. 

## Supported Versions

:::caution
Don't make changes to elements inside the MtaPluginModule. Configure Constants in the Project settings in Studio Pro.<br/>Menditect will not provide support if the MtaPluginModule is changed after you have imported it into your Mendix project.
:::


### Plugin version vs MTA version

|          | MTA Plugin 4.9.1 | MTA Plugin 4.8.1 | Any older MTA Plugin |
| -------- | ---------------- | ---------------- | -------------------- |
| MTA 3.0  | Supported        | Supported *      | Not supported        |
| MTA 2.10 | Supported        | Supported        | Not supported        |
| MTA 2.9  | Not supported    | Not supported    | Not supported        |

\* In order to make use of all the features of MTA, import the latest plugin.
 

### Plugin version vs Mendix version

Download the MTA plugin module from Mendix Marketplace. 

Make sure to check your app's Mendix version before importing the module. 

| Mendix Version                 | Url                                                  |
| ------------------------------ | ---------------------------------------------------- |
| Mendix 11                      | Not supported                                        |
| Mendix 10                      | https://marketplace.mendix.com/link/component/214764 |
| Mendix 9.24.4 and higher       | https://marketplace.mendix.com/link/component/214717 |
| Mendix 9.0.5 - Mendix 9.24.3   | https://marketplace.mendix.com/link/component/206637 |
| Mendix 8.12.7 - Mendix 8.18.26 | https://marketplace.mendix.com/link/component/210123 |
| Mendix 7                       | Not supported                                        |



## Installation instructions

Import the MTA Plugin in the [Mendix App](../mta/application) under Test.

If you are experiencing compilation errors or errors in the After startup microflow, try cleaning up your deployment directory first.

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
The constant `NoAssociationResponse` is not officially supported.
:::

### Configure Plugin Home page

Including this page in your App is necessary if you want to manually connect to MTA (with [ConnectionMethod](#connectionmethod) = "Manual"). 

- Create a Page with a Responsive layout.
- Insert the "MTAPluginPage" snippet from the MTA Plugin Module.
- Add Project User Roles to the Page.
- Add the "MTAPluginUser" Module role from the MTA Plugin Module to all of these Project User Roles.
- Include the new Page in the Navigation.

You can now view connection details and manually connect to MTA, with accounts having the Project User Roles that you specified.



## Update instructions

Replace the existing module when importing a new version.

Make sure to delete any old JAR files like mta-plugin-xxx.jar from the userlib subfolder in your project directory. 


### Upgrading Mendix Runtime of the parent Project  

To upgrade the major version of your Mendix App (for example, from Mendix 9 to 10), you need to make sure to replace all the files related to the MTA Plugin Module. 

Delete the complete module from the project and delete the JAR files from the userlib subfolder in your project directory. 

Then, download the MTA Plugin module that matches the newer Mendix version as listed above. You can do all this before performing the Mendix Runtime upgrade.


## Dependencies

## Known issues

None.

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 17 September 2025