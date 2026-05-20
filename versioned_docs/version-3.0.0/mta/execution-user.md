---
sidebar_position: 18
---


# Execution User

## Definition

An Execution User is the name of the `User` in the Mendix [Application](application) under test that will be used to setup the Backend session, to execute [Test Cases](test-case) with. It is stored on the [Test Configuration](test-configuration). When selecting an Execution User on the Test Case, all Execution Users for the respective Test Configuration can be selected.

Only the name is necessary for authentication, because the connection to the [MTA Plugin](../Tools/mta-plugin) is established with the [Connection User](../../additional/installation/import-plugin#configure-connection-user-in-mta). 

It determines how the [App security](https://docs.mendix.com/refguide/app-security/) is applied when running the test, together with the [Apply security](test-case#apply-security) setting on the Test Case. 

Read specific [Teststep](Teststep/) documentation to learn about Microflow and Entity security.

### Frontend Testing user login

For [Frontend tests](frontend-test) the Execution user is still required to setup the connection to the MTA Plugin, but additionally, it may be required to login using the Login page of the running Mendix App, in order to test the [Mendix Pages](mendix-page). An Execution user's session is only active during the execution of the associated Test Case; the Frontend test session in the Browser however, can be reused in subsequent Test Cases, as long as the Frontend test is running or until a `Logout` is triggered.

For Frontend tests, MTA will automatically assign the `MxAdmin` user as an Execution User. Although this can be changed, usually in those cases, the authorization on the backend is not relevant for the outcome of the test.

## Business rules

- An Execution user cannot be deleted, if a test case uses the Execution user.
- Do NOT use the MTA Plugin User account on the Application as an Execution User.

## Actions on Execution User

### Manage Execution users

- Navigate to the Test Configuration.
- Select `Execution users`.
- Delete or Edit Execution users here.

## Related topics
- [Test Run](test-run)
- [Test Case](test-case)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 27 November 2025