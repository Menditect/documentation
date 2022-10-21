# Use SSO

MTA requires an Execution User for each test case to indicate who is running it. The name of the Execution User should be equal to the username of a local user account. 
When testing with SSO (Single Sign-On), in some cases (for instance, using the SAML 2.0 module) the user is also a local user. This means that, to test with SSO, just enter the local username that is used in the App.

In other cases, the username could be the ID of an SSO user. This ID is a number that can be found in your mendix app when you log in as MxAdmin. Unfortunately, you won't be able to see which user is associated with this ID (but you can see which roles), you can only see this from the IAM application.
If you specify the SSO ID as execution user in MTA the test case will be executed on behalf of that user. 
In this case, we are testing on behalf of an SSO user, but not testing SSO itself. This is currently not supported in MTA.

## Connectivity tests

MTA can be used to test connectivity by calling an API. The error handling of the API must be given as an output parameter to the microflow otherwise MTA cannot display the possible errors.
If you want to use MTA to periodically poll an interface you will have to create the schedule for this via the CI/CD APIs of MTA. Read more about CI/CD in the How To section.

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 21 april 2022