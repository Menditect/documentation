# Import plugin

In order for MTA to communicate with the Application under test, you need to import a module created by Menditect that will initiate this communication. This is the MTA Plugin module. Each version of MTA comes with a specific version of the MTA Plugin module. The versions are however not the same, because sometimes the MTA Plugin needs to be updated or patched resulting in a newer version.

:::caution
In no case should you make changes to elements inside the MtaPluginModule. <br/>Menditect will not provide support if the MtaPluginModule is changed after you have imported it into your test project.
:::

## Importing MTA Plugin

Download the MTA plugin module from Github:

https://github.com/Menditect/MENDITECT-MTA-Plugin/releases   

Each release comes with 3 files, each corresponding with one of the supported Mendix runtime versions: 
- download the 7-xx.xxx file for Mendix 7;
- download the 8-xx.xxx file for Mendix 8;
- download the 9-xx.xxx file for Mendix 9;

Always make sure to download the right release. The MTA version supported by the release is listed in the description on Github. 

Import the MTA plugin module package in your test application as a new module. If you have imported it before, make sure to replace the module and not delete it first. Deleting it first may result in having to fix errors manually. After importing, make sure to delete any old JAR files like mta-plugin-xxx.jar from the userlib subfolder in your project directory. 

:::info
You can create Module content containing the MTA Plugin in your Company marketplace (https://marketplace.mendix.com/link/mymarketplace), so you import the MTA Plugin module from the appstore. We are currently working on publishing it to the public Mendix marketplace. 
:::

### Upgrading to a newer runtime version

To upgrade the major version of your Mendix App (for example, from Mendix 8.18 to 9.12), you need to make sure to replace all the files related to the MTA Plugin Module. Delete the complete module from the project and delete the JAR files from the userlib subfolder in your project directory. Then, download the respective MTA plugin module from Github that matches the newer Mendix version as listed above. You can do all this before performing the upgrade.

## Configuring MTA Plugin

### Including After startup microflow

After you have downloaded the MTA Plugin, open the App Settings window in the Mendix modeler and navigate to the Runtime tab. On the "After startup" setting, click on 'Show' if there is an After startup microflow already selected. Make sure to include the "At_Startup_Setup_Connection" microflow in the MtaPluginModule. 

If there is no existing After startup microflow, just select the "At_Startup_Setup_Connection" in the popup window.

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

#### `ApplicationInstanceToken`
This corresponds with an ID that MTA has generated for an Application Instance. 
You can set this constant after you have [added an Application Instance](../../application-instance#create-an-application-instance) in MTA.

#### `ConnectionMethod`
This will determine if your app will try to connect to MTA, either
- 'AfterStartup': After deployment the app will try to connect to MTA using the provided token and Connection User's credentials.
- 'Manual': You have to establish the connection to MTA manually, logging in as the [Plugin User](#configuring-mta-plugin-user) on the app.
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

To get the URL to MTA, navigate to MTA in your browser, copy the part between `https://` and `/login.html`.



### Configuring MTA Plugin user

:::info
As of MTA version 2.0, configuring the MTA Plugin user is no longer mandatory. 
Create a user role 'MTAPluginUser' and make sure not to select any modules in this step. Select the following roles for user role 'MTAPluginUser':
:::

- 'MTAPluginUser' from MTAPlugin module
- 'User' from System module
- 'User' from Administration module

Go to navigation and create a role-based home page for MTAPluginUser for the primary navigation layout (usually 'Responsive'):

- Select Edit. Mendix shows page 'Role-based home pages'
- Select New. Mendix shows page 'Select user role'
- Select user role 'MTAPluginUser'
- Select target and select page HomepageMTAPluginModule

Commit the changes to teamserver and deploy to the environment that is going to be used as Test application. After deployment, login with a user role that has Create rights on Account (like an Administrator). Create a local user (not a web service user) with only the role 'MTAPluginUser'. Give the user a name, and note the Username and Password for later.

## Troubleshooting



## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 21 april 2022