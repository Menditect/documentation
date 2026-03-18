---
sidebar_position: 3
---

# Connect Menditect Extension to MTA

## Purpose

This document describes how to connect the [Menditect Call Hierarchy extension](../../../tools/call-hierarchy-extension) to MTA, in order to view and generate test cases from Mendix Studio Pro.

## Prepare MTA

- Make sure to create an Account in MTA having at least `Tester` and `ApiUser` [User Roles](../configure-mta/manage-accounts#mta-user-roles). 
- Login as that Account.
- [Create a Test configuration](../../../mta/test-configuration#create-a-new-test-configuration) that is linked to the App that you want to test.
- Create (or use an existing) [application instance](../../../mta/application-instance#create-an-application-instance) to be used for running locally from Studio Pro, and [set it as the preferred instance](../../../mta/test-setting#set-a-test-setting-as-preference).

If you want to run tests from Studio Pro, make sure to [configure the plugin](../../installation/import-plugin) to be connected to MTA.

## Configure Extension

- Open the App that you want to test in Studio Pro.
- Open the Microflow Call Hierarchy tab. 
- Click on <i class="fal fa-cog"></i>.
- Enter the MTA Endpoint. Should start with https.<br/>You can copy the URL to MTA from your browser's address bar.<br/>For example: `https://mta-menditect-9fo2p.mendixcloud.com`
- Enter the Username and Password for the Account that you created in MTA to be used by the Extension.
- Select the [Test configuration](../../../mta/test-configuration) that should be used to store and view [Test Cases](../../../mta/test-case).
- Save the settings. You can now [Generate tests from Studio Pro!](../design-tests/generate-test#from-mendix-studio-pro)


:::info
The credentials that are used to login to MTA are stored in the Windows Account settings. This is done to prevent having to manually login everytime the extension is used.

Settings are stored here:<br/>
`C:\Users\{your_user_name}\AppData\Local\Menditect\Microflow Call Hierarchy`
:::

## Limitations

[Check this list for current limitations with the MTA integration](../connect-mta/use-microflow-call-hierarchy-extension#mta-integration-limitations)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 9 April 2024