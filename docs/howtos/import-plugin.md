# Import MTA Plugin

Download the MTA plugin module from Github with the highest Mendix version possible for your project. Check the version that is displayed on the Plugin. It represents the lowest supported Mendix version, all higher Mendix versions are supported.

https://github.com/Menditect/MENDITECT-MTA-Plugin/releases   


Import the MTA plugin module package in your test application as a new module.


Make sure to delete any old JAR files like mta-plugin-xxx.jar from the userlib subfolder in your project directory.


Create a user role 'MTAPluginUser' and make sure not to select any modules in this step.

Select the following roles for user role 'MTAPluginUser':

- 'MTAPluginUser' from MTAPlugin module
- 'User' from System module
- 'User' from Administration module

Go to navigation and create a role-based home page for MTAPluginUser for the primary navigation layout:

- Select Edit. Mendix shows page 'Role-based home pages'
- Select New. Mendix shows page 'Select user role'
- Select user role 'MTAPluginUser'
- Select target and select page HomepageMTAPluginModule

Repeat this step for all other navigation layouts in use (tablet, phone, hybrid)

Start the test application and login with a user role that has Create rights on Account (like an Administrator). Create a local user (not a web service user) with the role 'MTAPluginUser'. Give the user a name and note it for later.