# Access Mendix model

To access Mendix projects, the user who logs in to MTA must be linked to a Mendix user.
First time you login as a Test Automator, you will be provided a page where you can enter the necessary information to create this link.

## API key and PAT

An API key and PAT need to be created to make communication possible with MTA and the Mendix platform.<br/>Make sure to store both in a password manager after creation. 

### API key

Navigate to [API keys](https://sprintr.home.mendix.com/link/personalapikeys) (links to Mendix site) to create an API key for your Mendix profile.<br/>Mendix documentation is here: https://docs.mendix.com/developerportal/community-tools/mendix-profile/#api-keys

### PAT (Personal Access Token)

Navigate to https://warden.mendix.com to add a PAT. When adding, provide a name, and select only this scope: `mx:modelrepository:repo:read`.<br/>Mendix documentation is here: https://docs.mendix.com/developerportal/community-tools/mendix-profile/#pat

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

Last updated 21 april 2022