# Simple Test Scheduling

## Use Keys for Endpoint parameters

The [MTA Public API](../../../api) uses Keys to uniquely refer to objects in the database, as an alternative to using the Mendix internal Object ID (which is very long and not exposed in MTA), or object names (which are not always unique). As a result, the best way to get started is by using the `Key` of the Test Configuration, Application and Application Instance, to call the endpoints that you need.

## Test Scheduling using Mendix Pipelines

The fastest and preferred option to add Scheduling to your Test Configurations is by using [Mendix Pipelines](https://docs.mendix.com/developerportal/deploy/configuring-post-get-request-steps/). 

For this option, let's assume that the goal is to:
- Execute one Test Configuration
- Wait for the Test Run to complete
- Pass the Pipeline Run if the Test Run result = `Pass`
- Fail the Pipeline Run if the Test Run result = `Fail`

Before starting, make sure to:
- Add a [Branch Subscription](../../../mta/branch-subscription) with [Auto-Adapt enabled](../../../mta/branch-subscription#adapt-automatically) on the Test Configuration that you will be Executing, so you will always have the latest revision from that branch.
- [Add a Variable](https://docs.mendix.com/developerportal/deploy/mendix-pipelines/#creating-a-new-variable) that you will use to Authorization of the API endpoints. Call it "Auth". Fill this Variable with your [Authorization string](cicd-config#create-an-authorization-string) and Enable Masking.

Now follow these steps to create the Pipeline:
- Add one POST Request
- Fill the Base URL Path with a call to [POST execute testconfiguration](../../../api#post-execute-testconfiguration)
- Fill the Header 1 Key with `Authorization`
- Fill the Header 1 Value with `$Auth`
- Fill the Request body as described in [POST execute testconfiguration](../../../api#post-execute-testconfiguration)
- Fill the JQ Expression For Success Condition with `has("TestRunExecutionId")`
- Fill the JQ Expression For Output_1 with `.TestRunExecutionId`
- Add one GET Request
- Fill the Base URL Path with a call to [GET testrun](../../../api#get-testrun)
- Fill the Additional URL Path with `$POST Request.Output_1`
- Fill the Header 1 Key with `Authorization`
- Fill the Header 1 Value with `$Auth`
- Fill the JQ Expression For Success Condition with `.Result == "Pass"`
- Fill the JQ Expression For Failure Condition with `.Result == "Fail"`
- Set a Polling delay, Interval and Duration fitting for the duration of your Test Run. Recommended settings are a Delay of 120 seconds, an Interval of 60 seconds, and a Duration of 3600 seconds (1 hour).
- Save and Activate.

## Test Scheduling using other tools

For this option, let's assume that the goal is to:
- Download the latest revision of an App into MTA;
- Adapt a Test Configuration (with only 1 App) to this revision;
- Execute the Test Configuration.

### Step 1
To download the latest revision, you need the Application Key and branch name and commit ID of the revision. You can find the Application Key by opening the Applications page and [View Key and Project ID](../../../mta/application#view-information-about-the-application) of your App. Branch name and commit ID can be found in Mendix Sprintr or Studio Pro. You now have the information you need to call [POST download revision](../../../api#post-download-revision). Save the Application Revision Key that is returned by this endpoint.

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

Last updated 30 May 2026