---
sidebar_position: 4
toc_max_heading_level: 2
---

# Public API

This document describes the endpoints of MTA's public API.

To learn **how to** implement the API's in a CI/CD pipeline, read the how-to section.



## GET testconfigurations

Retrieve all test configurations in MTA, which are not deleted. 

### Request

**URL**

`/rest/mta/api/testconfigurations`

Example: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testconfigurations`

**Authorization**

| Authorization | Basic                        |
| ------------- | ---------------------------- |
| Username:     | `[the CiCd username in MTA]` |
| Password:     | `[the CiCd password in MTA]` |

### Optional parameters

Either one of below parameters can be provided. If both are provided, they should point to the same application.

| Parameter      | Explanation                                                                  |
| -------------- | ---------------------------------------------------------------------------- |
| applicationKey | `The Key of the application that is linked to the test configuration`        |
| mxProjectId    | `The project ID of the application that is linked to the test configuration` |

Example: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testconfigurations?applicationKey=15&mxProjectId=18ef9972-501b-4806-8f89-ef8aaddb97a0`

### Responses

A list of Test Configurations with their Key and Name:


#### 200 example:
```json
[
  {
    "Key": "28",
    "Name": "Test Configuration #1",
    "Url": "http://localhost:8081/link/testconfiguration/28"
  },
  {
    "Key": "29",
    "Name": "Test Configuration #2",
    "Url": "http://localhost:8081/link/testconfiguration/29"
  },
  {
    "Key": "30",
    "Name": "Test Configuration #3",
    "Url": "http://localhost:8081/link/testconfiguration/30"
  }
]
```


## GET testsuites

Retrieve the test suites in a test configuration specified by Key.

### Request

**URL**

`/rest/mta/api/testsuites?testconfigurationKey={testconfigurationKey}`

Example: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testsuites?testconfigurationKey=28`

**Authorization**

| Authorization | Basic                        |
| ------------- | ---------------------------- |
| Username:     | `[the CiCd username in MTA]` |
| Password:     | `[the CiCd password in MTA]` |

### Responses

A list of all Test Suites in the Test Configuration, to allow the execution of a single Test Suite.

#### 200 example:
```json
{
 [
    {
      "Key": "32",
      "Name": "Test Suite #1",
      "Url": "http://localhost:8081/link/testsuite/32"
    },
    {
      "Key": "33",
      "Name": "Test Suite #2",
      "Url": "http://localhost:8081/link/testsuite/33"
    }
  ]
}
```

## GET testcases

Retrieve the test cases in a test configuration or test suite specified by Key.

### Request

**URL**

`/rest/mta/api/testcases?testconfigurationKey={testconfigurationKey}`

or:

`/rest/mta/api/testcases?testsuiteKey={testsuiteKey}`

Example: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testcases?testconfigurationKey=28`

or: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testcases?testsuiteKey=33`


**Authorization**

| Authorization | Basic                        |
| ------------- | ---------------------------- |
| Username:     | `[the CiCd username in MTA]` |
| Password:     | `[the CiCd password in MTA]` |

### Responses

A list of all Test Cases in the Test Configuration or Test Suite, to allow the execution of a single Test Case.

#### 200 example:
```json
[
    {
        "Key": "96",
        "Name": "Test Case #1",
        "Url": "http://localhost:8081/link/testcase/96"
    },
    {   
        "Key": "97",
        "Name": "Test Case #2",
        "Url": "http://localhost:8081/link/testcase/97"
    },
    {
        "Key": "98",
        "Name": "Test Case #3",
        "Url": "http://localhost:8081/link/testcase/98"
    }
]
```


## GET applications

Retrieve all applications, or applications in a test configuration specified by Key.

### Request

**URL**

`/rest/mta/api/applications`

or:

`/rest/mta/api/applications?testconfigurationKey={testconfigurationKey}`

Example: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/applications`

or:

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/applications?testconfigurationKey=28`

**Authorization**

| Authorization | Basic                        |
| ------------- | ---------------------------- |
| Username:     | `[the CiCd username in MTA]` |
| Password:     | `[the CiCd password in MTA]` |

### Responses

A list of Applications, to allow downloading and adapting to another revision of that Application.

#### 200 example:
```json
[
    {
        "Key": "15",
        "Name": "FirstTestApp",
    },
    {
        "Key": "16",
        "Name": "SecondTestApp",
    }
]
```

#### 400: InvalidInput: 
- TestConfigurationKey is missing.


## GET application instances

Retrieve all application instances of an application.

### Request

**URL**

`/rest/cicd/v2/applications/{ApplicationKey}/application-instances`

Example: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/applications/123/application-instances`


**Authorization**

| Authorization | Basic                        |
| ------------- | ---------------------------- |
| Username:     | `[the CiCd username in MTA]` |
| Password:     | `[the CiCd password in MTA]` |


### Responses

#### 200 example:

A list of Application Instances with their respective Key, Name and Token to be used when configuring the MTA Plugin.

```json
[
    {
        "Key": "111",
        "Name": "Default",
        "Token": "4b004287-e08b-4189-aa23-7309c35e154f"
    },
    {
        "Key": "222",
        "Name": "Local",
        "Token": "8a2e20d1-4cc9-4d43-b8b9-9d6ee7d24224"
    },
    {
        "Key": "333",
        "Name": "Acceptance",
        "Token": "3886a0d8-4802-41ce-a889-21565b5ff26b"
    }
]
```

#### 400: InvalidInput: 
- ApplicationKey is missing.

#### 500: Internal Server Error: 
- See message for more details.


## POST download revision

Initiate the download of a revision in MTA. The download process will be started asynchronously. The progress can be polled using the [Get revision download status](#get-revision-download-status) endpoint.


### Request

**URL**

`/rest/cicd/v2/revisions/download?applicationkey={applicationkey}&branchname={branchname}&commitid={commitid}`

:::info
- For Apps stored in SVN, the mainline is named 'trunk';
- For Apps stored in Git, the mainline is named 'main'.
:::

Example: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/revisions/download?applicationkey=123&branchname=main&commitid=582670e77da6ac294e37fbc2d141c2113e911abd`


**Authorization**

| Authorization | Basic                        |
| ------------- | ---------------------------- |
| Username:     | `[the CiCd username in MTA]` |
| Password:     | `[the CiCd password in MTA]` |


### Responses

An Application Revision with the CommitId and resulting Key.

#### 200 example:
```json
{
    "Key": "456",
    "CommitId": "582670e77da6ac294e37fbc2d141c2113e911abd"
}
```

#### 400: InvalidInput: 
- ApplicationKey is missing.
- BranchName is missing.
- CommitId is missing.

#### 500: Internal Server Error: 
- See message for more details.


## POST cancel revision download

Cancel the download of a revision. This is only possible in the *requesting download* stage.

### Request

**URL**

`/rest/cicd/v2/revisions/{RevisionKey}/download-cancel`

Example: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/revisions/456/download-cancel`


**Authorization**

| Authorization | Basic                        |
| ------------- | ---------------------------- |
| Username:     | `[the CiCd username in MTA]` |
| Password:     | `[the CiCd password in MTA]` |


### Responses

#### 200:
- No content

#### 400: InvalidInput: 
- RevisionKey is missing.

#### 500: Internal Server Error: 
- See message for more details.


## GET revision download status

Retrieve the download status of a revision in MTA.

### Request

**URL**

`/rest/cicd/v2/revisions/{RevisionKey}/download-status`

Example: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/revisions/456/download-status`


**Authorization**

| Authorization | Basic                        |
| ------------- | ---------------------------- |
| Username:     | `[the CiCd username in MTA]` |
| Password:     | `[the CiCd password in MTA]` |

### Responses

Any of below status descriptors:

- *Empty*: no download status defined
- *Requesting download*
- *Downloading*
- *Downloaded*
- *Cancelled*: download has been cancelled by a user
- *Error*: an error has occured while trying to download a revision
- *Deleting*: revision is being deleted in MTA


#### 200 example:
```json
{
    "RevisionKey": "456",
    "ApplicationName": "TestApp",
    "CommitId": "582670e77da6ac294e37fbc2d141c2113e911abd",
    "DownloadStatus": "Downloaded"
}
```

#### 400: InvalidInput: 
- RevisionKey is missing.

#### 500: Internal Server Error: 
- See message for more details.


## POST adapt testconfiguration to revision

Adapt a test configuration to specified revision. Define revision by application, branch and revisionnumber/commitId.

### Request

**URL**

`/rest/cicd/v2/testconfigurations/{TestConfigurationKey}/applications/{ApplicationKey}/adapt?branchname={branchname}&commitid={commitid}`

Example: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/testconfigurations/12/applications/1/adapt?branchname=trunk&commitid=4532`

**Authorization**

| Authorization | Basic                        |
| ------------- | ---------------------------- |
| Username:     | `[the CiCd username in MTA]` |
| Password:     | `[the CiCd password in MTA]` |

### Responses

#### 200:
- No content

#### 400: InvalidInput: 
- TestConfigurationKey is missing.
- ApplicationKey is missing.
- branchname is missing.
- commitid is missing.

#### 500: Internal Server Error: 
- See message for more details.




## POST execute testconfiguration

Initiate the execution of a test configuration for the specified application instance(s) in the body. The execute process will be started asynchronously. The progress can be polled using the [Get testrun](#get-testrun) endpoint.

### Request

**URL**

The request for this endpoint is made up of both a URL and a JSON body.

`/rest/cicd/v2/testconfigurations/{TestConfigurationKey}/execute`

Example: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/testconfigurations/12/execute`

```json
[
    {
        "Key": "8"
    },
    {
        "Key": "12"
    }
]
```

**Authorization**

| Authorization | Basic                        |
| ------------- | ---------------------------- |
| Username:     | `[the CiCd username in MTA]` |
| Password:     | `[the CiCd password in MTA]` |

### Responses


#### 200 example:
```json
{
    "TestRunExecutionId": "5552275f-0733-4afa-b109-7dee0cf1eda9"
}
```

#### 400: InvalidInput: 
- TestConfigurationKey cannot be empty.

#### 403: Access denied: 
- See message for more details.

#### 500: Internal Server Error: 
- See message for more details.





## POST execute test suite

Initiate the execution of a test suite for the specified application instance(s) in the body. The execute process will be started asynchronously. The progress can be polled using the [Get testrun](#get-testrun) endpoint.

### Request

**URL**

The request for this endpoint is made up of both a URL and a JSON body.

`/rest/cicd/v2/testsuites/{TestSuiteKey}/execute`

Example: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/testsuites/33/execute`

```json
[
    {
        "Key": "8"
    },
    {
        "Key": "12"
    }
]
```

**Authorization**

| Authorization | Basic                        |
| ------------- | ---------------------------- |
| Username:     | `[the CiCd username in MTA]` |
| Password:     | `[the CiCd password in MTA]` |

### Responses


#### 200 example:
```json
{
    "TestRunExecutionId": "5552275f-0733-4afa-b109-7dee0cf1eda9"
}
```

#### 400: InvalidInput: 
- TestSuiteKey cannot be empty.

#### 403: Access denied: 
- See message for more details.

#### 500: Internal Server Error: 
- See message for more details.



## POST execute test case

Initiate the execution of a single test case for a specified application instance(s) in the body. The execute process will be started asynchronously. The progress can be polled using the [Get testrun](#get-testrun) endpoint.

### Request

**URL**

The request for this endpoint is made up of both a URL and a JSON body.

`/rest/cicd/v2/testcases/{TestCaseKey}/execute`

Example: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/testcases/54321/execute`

```json
[
    {
        "Key": "8"
    },
    {
        "Key": "12"
    }
]
```

**Authorization**

| Authorization | Basic                        |
| ------------- | ---------------------------- |
| Username:     | `[the CiCd username in MTA]` |
| Password:     | `[the CiCd password in MTA]` |

### Responses

A unique execution ID of the Test Run:

#### 200 example:
```json
{
    "TestRunExecutionId": "9724158a-a002-49a2-b4b7-79f18fbc9b15"
}
```

#### 400: InvalidInput: 
- TestCaseKey cannot be empty.

#### 403: Access denied: 
- See message for more details.

#### 500: Internal Server Error: 
- See message for more details.


## GET testrun

Retrieve a summary of a test run to allow checking if the test run is either Running, or finished with status Pass / Fail, or ERROR.

### Request

**URL**

`/rest/cicd/v2/testruns/{testrunexecutionid}`

Example: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/testruns/9724158a-a002-49a2-b4b7-79f18fbc9b15`

**Authorization**

| Authorization | Basic                        |
| ------------- | ---------------------------- |
| Username:     | `[the CiCd username in MTA]` |
| Password:     | `[the CiCd password in MTA]` |

### Responses

#### 200 example:
```json
{
    "TestRunExecutionId": "9724158a-a002-49a2-b4b7-79f18fbc9b15",
    "StartDate": "2023-08-22T08:06:31.182Z",
    "Result": "Pass",
    "TestConfigurationName": "My First Testconfiguration",
    "TestRunUrl": "http://localhost:8081/link/testrun/45"
}
```

#### 400: InvalidInput: 
- TestRunExecutionId is missing.

#### 500: Internal Server Error: 
- See message for more details.


## GET testrun details

Retrieve the details of a test run.

### Request

**URL**

`/rest/cicd/v2/testruns/{testrunexecutionid}/details`

Example: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/testruns/9724158a-a002-49a2-b4b7-79f18fbc9b15/details`

**Authorization**

| Authorization | Basic                        |
| ------------- | ---------------------------- |
| Username:     | `[the CiCd username in MTA]` |
| Password:     | `[the CiCd password in MTA]` |

### Responses

#### 200 example:
```json
{
    "TestRunExecutionId": "9724158a-a002-49a2-b4b7-79f18fbc9b15",
    "StartDate": "2023-08-22T08:06:31.182Z",
    "Result": "Pass",
    "TestConfigurationName": "My First Testconfiguration",
    "TestRunUrl": "http://localhost:8081/link/testrun/45",
    "TestSuiteRuns": [
        {
            "TestSuiteSequence": 1,
            "TestSuiteName": "My First Test Suite",
            "TestSuiteRunResult": "Pass",
            "TestsuiteRunUrl": "http://localhost:8081/link/testsuiterun/44",
            "TestCaseRuns": [
                {
                    "TestCaseSequence": 1,
                    "TestCaseName": "My First Test Case",
                    "TestCaseRunResult": "Pass",
                    "TestCaseRunResultMessage": "",
                    "TestCaseRunUrl": "http://localhost:8081/link/testcaserun/119"
                }
            ]
        }
    ]
}
```

#### 400: InvalidInput: 
- TestRunExecutionId is missing.

#### 500: Internal Server Error: 
- See message for more details.


## POST cancel testrun

Cancel a running test run. This is only possible in the *Running* stage.

### Request

**URL**

`/rest/cicd/v2/testruns/{testrunexecutionid}/cancel`

Example: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/testruns/9724158a-a002-49a2-b4b7-79f18fbc9b15/cancel`

**Authorization**

| Authorization | Basic                        |
| ------------- | ---------------------------- |
| Username:     | `[the CiCd username in MTA]` |
| Password:     | `[the CiCd password in MTA]` |

### Responses

#### 200:
- No content

#### 400: InvalidInput: 
- TestRunExecutionId is missing.

#### 500: Internal Server Error: 
- See message for more details.



## Related topics
- [Application](application)
- [Application Revision](application-revision)
- [Test Case](test-case)
- [Test Configuration](test-configuration)
- [Test Run](test-run)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 19 November 2023