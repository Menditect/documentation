# Import MTA Plugin

Download the MTA plugin module from Github:
- download the 7-xx.xxx file for Mendix 7;
- download the 8-xx.xxx file for Mendix 8;
- download the 9-xx.xxx file for Mendix 9;
- make sure to download the right release. The MTA version supported by the release is listed in the description on Github, as well as in MTA. 

https://github.com/Menditect/MENDITECT-MTA-Plugin/releases   

Import the MTA plugin module package in your test application as a new module. If you have imported it before, delete it first, and make sure to delete any old JAR files like mta-plugin-xxx.jar from the userlib subfolder in your project directory. 

<i class="fa fa-exclamation-triangle"></i> Do not attempt to import it as a Marketplace module. The MTA Plugin is regularly updated, but not always compatible with every running version of MTA. This is why the MTA Plugin is currently not in the public marketplace. For receiving automatic updates about new releases, choose the Github notification setting in the repository, using the "<i class="fa fa-eye"></i> Watch" function on the top right. Select "Custom" and only select "Releases". 
<br/><br/>

## Upgrading a Mendix App to a newer runtime version

To upgrade the major version of your Mendix App, you need to make sure to replace all the files related to the MTA Plugin Module. Delete the complete module from the project and delete the JAR files from the userlib subfolder in your project directory. Then, download the respective MTA plugin module from Github that matches the newer Mendix version as listed above. You can do all this before performing the upgrade.


## First time configuration

Create a user role 'MTAPluginUser' and make sure not to select any modules in this step.

Select the following roles for user role 'MTAPluginUser':

- 'MTAPluginUser' from MTAPlugin module
- 'User' from System module
- 'User' from Administration module

Go to navigation and create a role-based home page for MTAPluginUser for the primary navigation layout (usually 'Responsive'):

- Select Edit. Mendix shows page 'Role-based home pages'
- Select New. Mendix shows page 'Select user role'
- Select user role 'MTAPluginUser'
- Select target and select page HomepageMTAPluginModule

Start the test application and login with a user role that has Create rights on Account (like an Administrator). Create a local user (not a web service user) with the role 'MTAPluginUser'. Give the user a name and note it for later.

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 21 april 2022