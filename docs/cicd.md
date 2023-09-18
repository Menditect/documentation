---
sidebar_position: 9
---

# CI/CD API

## Version 2

This document describes the structure of the published REST service `MTA public API's version 2.0.0 for CI/CD` and it's endpoints.

To understand **how to use** the CI/CD interface, read the HowTo section.

To read the documentation for version 1, use the version switcher on top of this page.

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

Returns a list of Application Instances with their respective Key, Name and Token to be used when configuring the MTA Plugin.

```json
[
    {
        "Key": "17",
        "Name": "Default",
        "Token": "4b004287-e08b-4189-aa23-7309c35e154f"
    },
    {
        "Key": "19",
        "Name": "Local",
        "Token": "8a2e20d1-4cc9-4d43-b8b9-9d6ee7d24224"
    },
    {
        "Key": "20",
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

Download a revision in MTA.

### Request

**URL**

`/rest/cicd/v2/revisions/download?applicationkey={applicationkey}&branchname={branchname}&commitid={commitid}`

Example: 

`https://mta-menditect-9fo2p.mendixcloud.com/rest/cicd/v2/revisions/download?applicationkey=123&branchname=main&commitid=582670e77da6ac294e37fbc2d141c2113e911abd`


**Authorization**

| Authorization | Basic                        |
| ------------- | ---------------------------- |
| Username:     | `[the CiCd username in MTA]` |
| Password:     | `[the CiCd password in MTA]` |


### Responses

Returns an Application Revision with the CommitId and resulting Key.

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

## Related topics
- [Application](application)
- [Application Revision](application-revision)
- [Test Case](test-case)
- [Test Configuration](test-configuration)
- [Test Run](test-run)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated: 19 september 2023