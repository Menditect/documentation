---
sidebar_position: 6
---

# Run MTA BYOMEAL (Bring Your Own Mendix Environment And License)

## Purpose

This document describes the MTA implementation steps for customers that bring their own Mendix license and environment, either local or cloud hosted.

This could be any custom cloud environment like a Cloud Foundry or Kubernetes Pod or an on-premise installation. The main difference with Menditect hosting MTA on the Mendix cloud is that the client is responsible for managing the cloud platform.

:::note
When installing MTA for the first time, always clean up your existing environment first (both the database and the Mendix model).
:::

## Configuring a new MTA implementation

Required for hosting MTA in the Mendix Cloud is an **M21-STANDARD** cloud resource pack, see [Mendix Cloud Container resources](https://docs.mendix.com/developerportal/deploy/mendix-cloud-deploy/#resource-pack).

For any cloud provider, you need to assign **at least 4 GB of RAM for the App, 4 GB of RAM for the Database, and 1 CPU core**.

Assigning fewer resources will increase the chance of spontaneous App restarts due to long-running processes consuming a lot of CPU/RAM.

### Actions

- You will receive information from Menditect on how to download the MDA file that you need to set up MTA.
- Deploy and transport it to the environment in your cloud. 
- Check the value of the following environment variables (Constants) for the MTA application:

| Environment variable                                             | value                                                            |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| ApiMendixModule.WebsocketStage                                   | `production`                                                     |
| EgalitConfigModule.EsaMultiInstanceMode                          | `False`                                                          |
| MtaDataValidationModule.RunIntervalNrOfDaysBeforeSysdate         | `5`                                                              |
| MtaUtils.DeleteObjectBatchSize                                   | `500`                                                            |
| MtaUtils.DeploymentType                                          | `On-Premises`                                                    |
| MtaUtils.InternalToken                                           | *(empty)*                                                        |
| MtaUtils.NodeRevision                                            | `0`                                                              |
| MtaUtils.ScheduledEventsOffsetUTC                                | *(offset from UTC, in whole hours, for scheduled events to run)* |
| MtaUtils.UrlBaseDocumentation                                    | `https://documentation.menditect.com`                            |
| MtaUtils.UrlSupportForm                                          | `https://share.hsforms.com/1x-oVL39kRTGw-b3CQ9im8g3twri`         |
| MtaUtils.UrlVideoInstructional                                   | `https://menditect.com/demos/mta-movies.html`                    |
| TestconfigurationModule.TCNF_DaysRemainAfterFlaggedForDeleteDate | `20`                                                             |


:::note
You may notice that MTA also contains environment variables from the MTA Plugin Module. This is because Menditect regression-tests MTA with MTA. 
Menditect on-premise customers and partners **do not** have to set these values.
:::


#### SAML SSO

- If MTA will be [configured to use SAML SSO](configure-mta-saml), additionally set these values (otherwise, use the default value):

| Environment variable        | value                   |
| --------------------------- | ----------------------- |
| DeepLink.EnableLeadingSlash | False                   |
| DeepLink.IndexPage          | index.html              |
| DeepLink.LoginLocation      | /SSO/login?f=true&cont= |

#### Scheduled events

- Toggle ALL scheduled events to `Enabled=True`

#### Firewall and network settings

:::info
Below steps are important and MTA will not work if these steps are skipped.
:::

- Make sure that any firewalls applicable have whitelisted these URLs, on ports 80 and 443:

```
*.mendix.com/*
*.sprintr.com/*
mtasdkapi-ws.menditect.com/*
hsforms.com/*
```

- Make sure the /rest path allows all access (in Mendix: Environment details -> Network -> Path Based Access Restrictions and set the path /rest/ on allow access).
- Make sure the /rest-doc path denies all access (in Mendix: Environment details -> Network -> Path Based Access Restrictions and set the path /rest-doc/ on deny all access).

- Start the MTA application.
- Change the MxAdmin password of the environment to your own MxAdmin password.
- Create a database backup.
- DONE!

## Upgrading an existing MTA implementation

### MTA actions

- Always create a backup of your database before bringing MTA down and upgrading.
- During deployment, make sure that you check all the values of the Constants for the Mendix model.
- After upgrading with the provided MDA file in this directory, make sure to login using the admin account (usually MxAdmin).
- Run all the migrations from the top menu in MTA, from old to new. 
- Wait for all of the migrations to be done. 
- When running into errors, contact Menditect support (support@menditect.com), and do not proceed with test scripting.
- Logout.
- Login with a Tester account and check if the test configurations can be executed.

### Test application actions

After updating MTA, make sure that all the test applications have the newest version of the MTA Plugin module installed. 

[Read how to import and configure the Plugin here](../connect-mta/import-plugin)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 23 April 2025