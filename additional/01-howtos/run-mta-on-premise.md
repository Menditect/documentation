# Run MTA on premise

## Purpose

This document describes the MTA implementation steps for customers that bring their own Mendix license and environment, either local or cloud hosted.

This could be any custom cloud environment like Clound Foundry or an on-premise installation. The main difference with hosting MTA on the Mendix cloud is that the client is responsible for managing the cloud platform.

:::note
When installing MTA for the first time, always clean up your existing environment first (both the database and the Mendix model).
:::

## Configuring a new MTA implementation

Your cloud needs to meet at least the specifications of the Mendix S21-STANDARD container, see [Mendix Cloud Container resources](https://docs.mendix.com/developerportal/deploy/mendix-cloud-deploy/#resource-pack).

### Actions

- Deploy and transport it to the environment in your cloud
- Check the content of the following environment variables:

| Environment variable                                             | value                                                  |
| ---------------------------------------------------------------- | ------------------------------------------------------ |
| ApiMendixModule.WebsocketStage                                   | release-1-8                                            |
| Atlas_Core.Atlas_Core_Version                                    | 3.0.7                                                  |
| Atlas_Web_Content.Atlas_Web_Content_Version                      | 3.0.6                                                  |
| BeheerModule.DeleteObjectBatchSize                               | 500                                                    |
| BeheerModule.InternalToken                                       |                                                        |
| BeheerModule.NodeRevision                                        | 0                                                      |
| BeheerModule.NumberOfThreadsParallel                             | 12                                                     |
| BeheerModule.UrlBaseDocumentation                                | https://documentation.menditect.com                    |
| BeheerModule.UrlReleaseNotes                                     | releasenotes                                           |
| BeheerModule.UrlSupportForm                                      | https://share.hsforms.com/1x-oVL39kRTGw-b3CQ9im8g3twri |
| DeepLink.EnableLeadingSlash                                      | True                                                   |
| DeepLink.IndexPage                                               | index.html                                             |
| DeepLink.LoginLocation                                           |                                                        |
| DeepLink.RequestHandlerName                                      | link                                                   |
| DeepLink.DeepLink.SSOHandlerLocation                             |                                                        |
| EgalitConfigModule.EsaMultiInstanceMode                          | False                                                  |
| MtaDataValidationModule.RunIntervalNrOfDaysBeforeSysdate         | 5                                                      |
| MtaDataValidationModule.DataValidationAccessGuid                 |                                                        |
| PluginRecordModule.RecordingSupportRequestUrl                    | https://share.hsforms.com/1RJY9cRw-TSm9QWXD6bZcbw3twri |
| TestconfigurationModule.TCNF_DaysRemainAfterFlaggedForDeleteDate | 20                                                     |

Toggle these scheduled events to Currently Enabled:

```
ApiCiCdModule.RunCtresCleanup
ApplicationModule.RunARVNsContentCleanUp
MtaDataValidationModule.RunInterval
TestconfigurationModule.RunTrunsCleanup
TestconfigurationModule.RunTcnfsCleanup
```

:::info
Below steps are important and MTA will not work if these steps are skipped.
:::

- Make sure that any firewalls applicable have whitelisted these URLs, on ports 80 and 443:

```
*.mendix.com/*
*.sprintr.com/*
*.fontawesome.com/*
mtasdkapi-ws.menditect.com/*
fonts.googleapis.com/*
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
- Login with a TestAutomator account and check if the test configurations can be executed.

### Test application actions

After updating MTA, make sure that all the test applications have the newest version of the Mta Plugin module installed. Official releases of the Mta Plugin module are downloadable at:
https://github.com/Menditect/MENDITECT-MTA-Plugin/releases


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 21 december 2022