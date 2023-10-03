# CI/CD configure

## Definition

This document describes how to configure MTA to use the CI/CD API.

**Looking for the CI/CD API docs?** These were moved to the [reference guide](../../cicd).

## Create CI/CD user

In order to prepare MTA for integration with your CI/CD pipeline you need to create a user in MTA with *only* the Testautomator and CiCdApiUser roles. 

- First, login as an MTA Manager. Do not login with an account that has Administrator rights!
- Navigate to MTA management and then to MTA Users. Create a New local MTA user.
- Then, fill in the form like this:

![Create Ci Cd user](images/cicd-create-account.png)

This is the username and password you will connect with to the API. 

- Save and logout.
- Then, login with the CI/CD user, click the <i class="fal fa-user-circle"></i> user icon on the top right and [fill in the API key and PAT](access-mendix-model).
- Finally, if you also want MTA to push CI/CD testrun results to your own API endpoint, enter the Endpoint and Secret key.<br/>Read more about it on the [CI/CD result handling page](cicd-result).

## Check App status
The CI/CD API can be used in a pipeline that performs deployments of a Mendix Application. But the CI/CD API does not check if the deployment is done.

:::info 
Before executing a CI/CD testrun, check that the deployment is completed and the status of the <a href="../../application-instance">Application Instance</a> is "Running".
:::

## Cleanup testruns
No need to clean up testruns manually. Currently, a nightly scheduled event cleans up executed [Test Runs](../../test-run). MTA only keeps test runs associated with the last two executions for a single Application. 

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 25 september 2023