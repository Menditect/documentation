# Access Mendix model

To access Mendix projects, the user who logs in to MTA must be linked to a Mendix user.
First time you login as a Test Automator, you will be provided a page where you can enter the necessary information to create this link.
If you need to change this information later, click the user icon on the top right <svg role="img" viewBox="0 0 512 512" width="2%" height="2%" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z"/></svg>

## API key and PAT (Personal Access Token)

Login to MTA using the credentials provided by your MTA Manager.

The following popup will appear:

![Mendix credentials](mx-credentials.png)

Now fill in the fields under 'Mendix credentials'
- The Mendix account username;
- An API key created for this Mendix profile. Go to [API keys](https://sprintr.home.mendix.com/link/profilesettings/apikeys) (links to Mendix site) to create an API key for your Mendix profile.
- A Personal access token (PAT) for this Mendix profile. Go to https://warden.mendix.com to add it and select only this scope: `mx:modelrepository:repo:read`.
- Choose "Save".

To test if this step was successful, try to add a new Test Application to a Test Configuration. The Mendix projects associated with the given Mendix user should be visible.


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 21 april 2022