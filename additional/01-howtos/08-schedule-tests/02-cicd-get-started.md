# Get started with the API

:::info
If you're getting started using the MTA Public API, [let us know](mailto:support@menditect.com?subject=MTA%20Public%20API). 

Menditect has created a [Scheduler Module](../../../tools/scheduler-module) that we can share with you to make the implementation easier. 
:::

## Getting started

The [MTA Public API](../../../api) uses Keys to uniquely refer to objects in the database, as an alternative to using the Mendix internal Object ID (which is very long and not exposed in MTA), or object names (which are not always unique). As a result, the best way to get started is by using the Key of the Test Configuration, Application and Application Instance, to call the endpoints that you need.

For getting started, let's will assume that the goal is to:
- download the latest revision of an App into MTA;
- adapt a Test Configuration (with only 1 App) to this revision;
- execute the Test Configuration.

### Step 1
To download the latest revision, you need the Application Key and branch name and commit ID of the revision. You can find the Application Key by opening the Applications page and [View Key and Project ID](../../../mta/application#view-key-and-project-id) of your App. Branch name and commit ID can be found in Mendix Sprintr or Studio Pro. You now have the information you need to call [POST download revision](../../../api#post-download-revision). Save the Application Revision Key that is returned by this endpoint.

### Step 2
You can choose to wait until the download finishes, or use the [GET revision download status](../../../api#get-revision-download-status) endpoint, to poll every so-many seconds and check if it is finished. For that you need the Application Revision Key from the previous step.

### Step 3
Now you will adapt the Test Configuration to the downloaded revision. You need the Test Configuration Key for that. You can find the Test Configuration Key by [Editing the Test Configuration](../../../mta/test-configuration#edit-a-test-configuration). The Key is shown in the header at the end of the title. You now have the information you need to call [POST adapt testconfiguration to revision](../../../api#post-adapt-testconfiguration-to-revision). 

### Step 4
You can choose to wait until the adapt finishes, or use the [GET testconfiguration adapt status](../../../api#get-testconfiguration-adapt-status) endpoint, to poll every so-many seconds and check if it is finished. You will need the Test Configuration Key for that.

### Step 5
Now you can execute the Test Configuration. You need the Application Instance Key for that. You can find the Key by [Editing the Application Instance](../../../mta/application-instance#edit-an-application-instance). The Key is shown in the header at the end of the title. You now have the information you need to call [POST execute testconfiguration](../../../api#post-execute-testconfiguration). 

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 3 July 2023