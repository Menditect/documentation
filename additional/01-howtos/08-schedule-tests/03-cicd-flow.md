# Automate pipeline

This page should help you automate the scheduling of test execution, using the [MTA Public API](../../../mta/api).

## Endpoints

### 1: get testconfigurations

There are 2 usecases for calling this endpoint:
1. You know a Test Configuration name, and want to determine the Test Configuration Key by filtering from a list of Test Configurations, so you can execute it.
2. You know an Application Key, and want to determine a list of Keys of Test Configurations are testing that Application, so you can execute them.

If instead you only want to execute a specific Test Configuration, you can find the Key in MTA, by [Editing the Test Configuration](../../../mta/test-configuration#edit-a-test-configuration). The Key is shown in the header at the end of the title.

### 2: get testsuites

There are 3 usecases for calling this endpoint:
1. You know a Test Configuration Key, and want to execute all it's Test Suites, one by one.
2. You know a Test Configuration Key, and want to execute specific Test Suites. You can determine which to run, by sequence or by name.
3. You know a Test Configuration Key, and want to execute one or more Test Cases in a Test Suite, of which you only know the name.

If instead you want to execute a single Test Suite, you can **find the Key** by [Editing the Test Suite](../../../mta/test-suite#edit-a-test-suite). The Key is shown in the header at the end of the title.

### 3: get testcases

There are 2 usecases for calling this endpoint:
1. You know a Test Suite Key, and want to execute all it's Test Cases, one by one.
2. You know a Test Suite Key, and want to execute specific Test Cases. You can determine which to run, by sequence or by name.

If instead you want to execute a single Test Case, you can **find the Key** by [Editing the Test Case](../../../mta/test-suite#edit-a-test-case). The Key is shown in the header at the end of the title.

### 4: get applications

There are 2 usecases for calling this endpoint:
1. You know an Application name, and want to determine the Application Key by filtering from a list of Applications, so you can use it for other endpoints.
2. You know a Test Configuration Key, and want to use this endpoint to determine the Keys of the Applications that are being tested in that Test Configuration.

If instead you want to get the Application Key from MTA, you can **find the Key** by opening the Applications page and [View Key and Project ID](../../../mta/application#view-key-and-project-id). 

### 5: get application instances

There are 2 usecases for calling this endpoint:
1. You know an Application Key and Application Instance name, and want to determine the Application Instance Key by filtering from a list of Application Instances, so you can use it to execute a test on.
2. You know an Application Key and assume there is only one Application Instance, and want to use this endpoint to determine the Key of that Application Instance, so you can use it to execute a test on.

If instead you want to get the Application Instance Key from MTA, you can **find the Key** by [Editing the Application Instance](../../../mta/application-instance#edit-an-application-instance). The Key is shown in the header at the end of the title.

### 6: get revisions

There are 2 usecases for calling this endpoint:
1. You know a Test Configuration Key and want to determine if this Test Configuration needs to be adapted to the revision that you want to execute on.
2. You know an Application Key and want to determine if a revision needs to be downloaded before you can adapt Test Configurations to it.

### 7: download revision

Use this step to download the Application Revision(s) in MTA so you can adapt the Test Configuration accordingly.

### 8: get revision status

Use this step (preferably in a loop statement) to *poll* if the download revision action from the previous step is done, to determine if an Application Revision(s) that you want to use for a Test Configuration are downloaded in MTA.

### 9: adapt test configuration to revision

Use this step to adapt a Test Configuration to a downloaded Application Revision.

### 10: get adapt status

Use this step (preferably in a loop statement) to *poll* if the adapt revision action from the previous step is done, to determine if a Test Configuration is adapted to the Application Revision(s) that you want to use.

### 11: execute test configuration

Use this step to execute a Test Configuration, and determine the resulting Execution ID.

### 12: execute test suite

Use this step to execute the Test Suite, and determine the resulting Execution ID.

### 13: execute test case

Use this step to execute the Test Case, and determine the resulting Execution ID.

### 14: get testrun

Use this step (preferably in a loop statement) to poll if the testrun triggered by the previous steps is finished.

### 15: get testsuiteruns

Use this step to get the results of the executed test suites inside the testrun from the previous step.

### 16: get testcaseruns

Use this step to get the results of the executed test cases inside the executed test suites from the previous step.

## Visualized

![CI/CD flow](../images/cicdflow.png)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 25 september 2023