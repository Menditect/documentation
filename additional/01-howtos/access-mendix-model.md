# Access Mendix model

To access Mendix projects, the user who logs in to MTA must be linked to a Mendix user.
First time you login as a Tester, you will be provided a page where you can enter the necessary information to create this link.

## API key and PAT

An API key and Personal Access Token (PAT) need to be created to make communication possible with MTA and the Mendix platform.<br/>Make sure to store both in a password manager after creation. 

Create your PAT and personal API key in your Mendix account. Go to:
- https://user-settings.mendix.com/link/developersettings

- Click "New token". Name it 'MTA Test'.
- Select only `mx:modelrepository:repo:read`

- Click "Create".
- Store it in the password manager so you don't lose it.
- Now click "Configure API Keys".
- Create a new API key. Description 'MTA Test'.
- Click "Generate API key".
- Store it in the password manager so you don't lose it.

### Enter API key and PAT in MTA

Login to MTA using the credentials provided by your MTA Manager.

The following popup will appear:

![Mendix credentials](images/mx-credentials.png)

Now fill in the fields under 'Mendix credentials'
- The Mendix account username (the email address you registered with);
- API Key and PAT;

Then choose "Save".

If you need to change this information later, click the <i class="fal fa-user-circle"></i>  user icon on the top right.

To test if this step was successful, try to [Add an Application](run-first-test). The Mendix projects associated with the given Mendix user should be visible.


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 27 march 2023