---
sidebar_position: 3
toc_max_heading_level: 2
---

# Public API

This document describes the endpoints of MTA's public API.

To learn **how to** implement the API's in a CI/CD pipeline, read the how-to pages on CI/CD.


To authorize a session for MTA's public API, use Basic (HTTP) Authorization.

Also make sure to include the HTTP Header `Content-Type` = `'application/json'` for all below endpoints.

## GET testconfigurations

Retrieve all test configurations in MTA, which are not deleted. Optionally filter the list of test configurations by associated application or Mendix project ID.

### Request

**URL**

`/rest/mta/api/testconfigurations?applicationKey={applicationKey}}&mxProjectId={mxProjectId}}`

Note: either one of these parameters can be provided. If both are provided, they should point to the same application.

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testconfigurations?applicationKey=15&mxProjectId=18ef9972-501b-4806-8f89-ef8aaddb97a0`

### Responses

A list of Test Configurations with their Key and Name:


#### 200 example:
```json
[
  {
    "Key": "28",
    "Name": "Test Configuration #1",
    "Url": "https://mta-menditect-9fo2p.mendixcloud.com/link/testconfiguration/28"
  },
  {
    "Key": "29",
    "Name": "Test Configuration #2",
    "Url": "https://mta-menditect-9fo2p.mendixcloud.com/link/testconfiguration/29"
  },
  {
    "Key": "30",
    "Name": "Test Configuration #3",
    "Url": "https://mta-menditect-9fo2p.mendixcloud.com/link/testconfiguration/30"
  }
]
```


## GET testsuites

Retrieve the test suites in a test configuration specified by Key.

### Request

**URL**

`/rest/mta/api/testsuites?testconfigurationKey={testconfigurationKey}`

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testsuites?testconfigurationKey=28`


### Responses

A list of all Test Suites in the Test Configuration, to allow the execution of a single Test Suite.

#### 200 example:
```json
{
 [
    {
      "Key": "32",
      "Name": "Test Suite #1",
      "Url": "https://mta-menditect-9fo2p.mendixcloud.com/link/testsuite/32",
      "Seqnr": "1"
    },
    {
      "Key": "33",
      "Name": "Test Suite #2",
      "Url": "https://mta-menditect-9fo2p.mendixcloud.com/link/testsuite/33",
      "Seqnr": "2"
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

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testcases?testconfigurationKey=28`

or: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testcases?testsuiteKey=33`


### Responses

A list of all Test Cases in the Test Configuration or Test Suite, to allow the execution of a single Test Case.

#### 200 example:
```json
[
    {
        "Key": "96",
        "Name": "Test Case #1",
        "Url": "https://mta-menditect-9fo2p.mendixcloud.com/link/testcase/96"
    },
    {   
        "Key": "97",
        "Name": "Test Case #2",
        "Url": "https://mta-menditect-9fo2p.mendixcloud.com/link/testcase/97"
    },
    {
        "Key": "98",
        "Name": "Test Case #3",
        "Url": "https://mta-menditect-9fo2p.mendixcloud.com/link/testcase/98"
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

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/applications`

or:

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/applications?testconfigurationKey=28`


### Responses

A list of Applications, to allow downloading and adapting to another revision of that Application.

#### 200 example:
```json
[
    {
        "Key": "15",
        "Name": "FirstTestApp",
        "MxProjectId":"5d6afb37-aef1-4ba1-818c-76d62bee88b8"
    },
    {
        "Key": "16",
        "Name": "SecondTestApp",
        "MxProjectId":"2f4345a6-937c-4e4c-9b4d-09e680dc61e0"
    }
]
```


## GET application instances

Retrieve all application instances of an application, allowing the Application Instance Key to be specified in the Execute endpoints.

### Request

**URL**

`/rest/mta/api/applicationinstances?applicationKey={applicationKey}`

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/applicationinstances?applicationKey=123`



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


## GET revisions

Retrieve all revisions of an Application, or revisions in use by a Test Configuration, that are known in MTA.

### Request

**URL**

`/rest/mta/api/revisions?applicationKey={applicationKey}`

or

`/rest/mta/api/revisions?testconfigurationKey={testconfigurationKey}`

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/revisions?applicationKey=123`

or

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/revisions?testconfigurationKey=28`


### Responses

#### 200 example:

A list of revisions with their respective Key, Application and Commit information, to determine if downloading and adapting a revision is necessary in order to execute a Test Configuration.

```json
[
    {
        "Key": "15",
        "Application": "FirstTestApp",
        "CommitDate": "2023-08-29T09:31:13.000Z",
        "CommitId": "247",
        "CommitMessage": "DataType change of an attribute",
        "Branches": [
               {
                      "Name": "branchDev"
               }
        ]
    },
    {
        "Key": "16",
        "Application": "SecondTestApp",
        "CommitDate": "2023-08-22T11:09:38.000Z",
        "CommitId": "173",
        "CommitMessage": "Added an entity",
        "Branches": [
               {
                     "Name": "trunk"
               }
        ]
    }
]
```



## POST download revision

Initiate the download of a revision in MTA. The download process will be started asynchronously. The progress can be polled using the [Get revision download status](#get-revision-download-status) endpoint.


### Request

**URL**

`/rest/mta/api/revisions/download?applicationKey={applicationKey}&branchName={branchName}&commitId={commitId}`

:::info
- For Apps stored in SVN, the mainline is named 'trunk';
- For Apps stored in Git, the mainline is named 'main'.
:::

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/revisions/download?applicationKey=123&branchName=main&commitId=582670e77da6ac294e37fbc2d141c2113e911abd`


### Responses

An Application Revision with the CommitId and resulting Key.

#### 200 example:
```json
{
    "Key": "456",
    "CommitId": "582670e77da6ac294e37fbc2d141c2113e911abd"
}
```


## POST cancel revision download

Cancel the download of a revision. This is only possible in the *requesting download* stage.

### Request

**URL**

`/rest/mta/api/revisions/{revisionKey}/download-cancel`

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/revisions/456/download-cancel`



### Responses

Empty.


## GET revision download status

Retrieve the download status of a revision in MTA.

### Request

**URL**

`/rest/mta/api/revisions/{revisionKey}/download-status`

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/revisions/456/download-status`


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

## POST adapt testconfiguration to revision

Adapt a test configuration to specified revision. Define revision by application, branch and revisionnumber/commitId.

### Request

**URL**

`/rest/mta/api/testconfigurations/{testconfigurationKey}/applications/{applicationKey}/adapt?branchName={branchName}&commitId={commitId}`

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testconfigurations/12/applications/1/adapt?branchName=trunk&commitId=4532`


### Responses

Empty.



## GET testconfiguration adapt status

Retrieve the adapt status of a test configuration in MTA to determine if it can be executed yet.

### Request

**URL**

`/rest/mta/api/testconfigurations/{testconfigurationKey}/adapt-status`

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testconfigurations/12/adapt-status`


### Responses

Any of below status descriptors:

- *Open*: test configuration is not currently adapting or last adapt was successfull
- *In progress* test configuration is currently adapting
- *Error* an error occured during adapt


#### 200 example:
```json
{
    "Key": "17",
    "Name": "TestApp",
    "AdaptStatus": "Open"
}
```

## POST execute testconfiguration

Initiate the execution of a test configuration for the specified application instance(s) in the body. The execute process will be started asynchronously. The progress can be polled using the [Get testrun](#get-testrun) endpoint.

The Coverage parameter in the body can be either `true` or `false`. This indicates whether to calculate coverage for applicable [Coverage Goals](coverage-goal) after the test was executed.

:::note
Make sure to include the Instance Keys in the body for *all* added Applications to the Test Configuration.
:::

### Request

**URL**

The request for this endpoint is made up of both a URL and a JSON body.

`/rest/mta/api/testconfigurations/{testconfigurationKey}/execute`

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testconfigurations/12/execute`

```json
{
    "Coverage": true,
    "ApplicationInstances": 
    [
        {
            "Key": "19"
        }, 
        {
            "Key": "21"
        }
    ]
}
```

### Responses


#### 200 example:
```json
{
    "TestRunExecutionId": "5552275f-0733-4afa-b109-7dee0cf1eda9"
}
```




## POST execute test suite

Initiate the execution of a test suite for the specified application instance(s) in the body. The execute process will be started asynchronously. The progress can be polled using the [Get testrun](#get-testrun) endpoint.

:::note
The Key values in the body are those of the Application Instances. Please make sure to include the Instance Keys in the body for *all* Applications used by the Test Cases in the specified Test Suite.
:::

### Request

**URL**

The request for this endpoint is made up of both a URL and a JSON body.

`/rest/mta/api/testsuites/{testsuiteKey}/execute`

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testsuites/33/execute`

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

### Responses


#### 200 example:
```json
{
    "TestRunExecutionId": "5552275f-0733-4afa-b109-7dee0cf1eda9"
}
```



## POST execute test case

Initiate the execution of a single test case for a specified application instance(s) in the body. The execute process will be started asynchronously. The progress can be polled using the [Get testrun](#get-testrun) endpoint.

:::note
The Key values in the body are those of the Application Instances. Please make sure to include the Instance Key in the body for the Application used by the specified Test Case, but also *all* Instance Keys of the Test Cases that the specified Test Case depends on.
:::

### Request

**URL**

The request for this endpoint is made up of both a URL and a JSON body.

`/rest/mta/api/testcases/{testcaseKey}/execute`

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testcases/54321/execute`

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

### Responses

A unique execution ID of the Test Run:

#### 200 example:
```json
{
    "TestRunExecutionId": "9724158a-a002-49a2-b4b7-79f18fbc9b15"
}
```


## GET testrun

Retrieve a summary of a test run to allow checking if the test run is either Running, or finished with status Pass / Fail, or ERROR.

### Request

**URL**

`/rest/mta/api/testruns/{testrunexecutionid}`

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testruns/9724158a-a002-49a2-b4b7-79f18fbc9b15`


### Responses

#### 200 example:
```json
{
    "TestRunExecutionId": "9724158a-a002-49a2-b4b7-79f18fbc9b15",
    "StartDate": "2023-08-22T08:06:31.182Z",
    "Result": "Pass",
    "TestConfigurationName": "My First Testconfiguration",
    "TestRunUrl": "https://mta-menditect-9fo2p.mendixcloud.com/link/testrun/45"
}
```

Possible values for `Result` are:
```json
- "Running"
- "StoppedByUser"
- "Pass"
- "AssertsFailed"
- "ERROR"
```


## GET testsuiteruns

Retrieve the test suite runs inside a test run.

### Request

**URL**

`/rest/mta/api/testsuiteruns/{testrunexecutionid}/details`

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testsuiteruns/9724158a-a002-49a2-b4b7-79f18fbc9b15/details`


### Responses

#### 200 example:
```json
[
    {
        "Key": 42,
        "Sequence": 1,
        "Name": "Test Suite #1",
        "Result": "ERROR",
        "Url": "https://mta-menditect-9fo2p.mendixcloud.com/link/testsuiterun/42"
    },
    {
        "Key": 43,
        "Sequence": 2,
        "Name": "Test Suite #2",
        "Result": "Pass",
        "Url": "https://mta-menditect-9fo2p.mendixcloud.com/link/testsuiterun/43"
    }
]
```



## GET testcaseruns

Retrieve the test case runs inside a test suite run.

### Request

**URL**

`/rest/mta/api/testcaseruns/{testsuiterunKey}/details`

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testcaseruns/42/details`


### Responses

#### 200 example:
```json
[
    {
        "Key": 119,
        "Sequence": 1,
        "Name": "Test Case #1",
        "Result": "Pass",
        "ResultMessage": "",
        "Url": "http://localhost:8081/link/testcaserun/119"
    },
    {
        "Key": 120,
        "Sequence": 2,
        "Name": "Test Case #2",
        "Result": "ERROR",
        "ResultMessage": "- TestCase: System error: missing parameters\n- TestStep [3]: Read access denied for member 'BerekendeKosten' of object 'PakketDienst.Pakket'",
        "Url": "http://localhost:8081/link/testcaserun/120"
    },
    {
        "Key": 121,
        "Sequence": 3,
        "Name": "Test Case #3",
        "ResultMessage": "",
        "Url": "http://localhost:8081/link/testcaserun/121"
    }
]
```


## POST cancel testrun

Cancel a running test run. This is only possible in the *Running* stage.

### Request

**URL**

`/rest/mta/api/testruns/{testrunexecutionid}/cancel`

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testruns/9724158a-a002-49a2-b4b7-79f18fbc9b15/cancel`


### Responses

Empty.



## GET testrun archive

Retrieve the [archived test run content](archive) (only available if Test Run Archiving is enabled).

### Request

**URL**

`/rest/mta/api/testruns/{testrunexecutionid}/archive`

**Example:**

`https://mta-menditect-9fo2p.mendixcloud.com/rest/mta/api/testruns/9724158a-a002-49a2-b4b7-79f18fbc9b15/archive`


### Responses

#### 200 example:
```json
{
    "ExecutionId": "9724158a-a002-49a2-b4b7-79f18fbc9b15",
    "TestRunInJson": [JSON CONTENT]
}
```


## Related topics
- [Application](application)
- [Application Revision](application-revision)
- [Test Case](test-case)
- [Test Configuration](test-configuration)
- [Test Run](test-run)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 22 December 2023