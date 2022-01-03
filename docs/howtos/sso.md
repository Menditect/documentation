---
sidebar_position: 2
---
# SSO

Menditect uses a username with each test case to indicate who is running it. This is basically the username of a local user account, but could also be the ID of an SSO user. This ID is a number that can be found in your mendix app when you log in as MxAdmin. Unfortunately, you won't be able to see which user is associated with this ID (but you can see which roles), you can only see this from the IAM application.
If you specify the SSO ID as execution user in MTA the test case will be executed on behalf of that user. We could add a documentation field on the execution user for this purpose so that you can indicate which user it is with an ID.
In this case, we are testing on behalf of an SSO user, but not testing SSO itself. Unfortunately, this is not really easy to automate, because SSO often requires credentials to be entered each time and we would rather not store them in Menditect. Furthermore, if 2-factor authentication has been set up, it is of course not easy to test in an automated way, because the token is then generated somewhere else and we cannot solve this in Menditect anyway.
What could possibly be done for API users with SSO is that an app-specific user/password is created so that we can then give that user to test cases that test an API. However, not all SSO systems support that, so we would have to find that out for you.

## Connectiviteitstesten

MTA can be used to test connectivity by calling an API. The error handling of the API must be given as an output parameter to the microflow otherwise MTA cannot display the possible errors.
If you want to use MTA to periodically poll an interface you will have to create the schedule for this via the CI/CD APIs of MTA. MTA itself does not (yet) contain a scheduling mechanism that allows you to periodically run a test.