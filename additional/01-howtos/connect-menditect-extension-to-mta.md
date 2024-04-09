# Connect Menditect Extension to MTA

## Howto

This document describes how to connect the [Menditect Call Hierarchy extension](use-menditect-extension) to MTA, in order to view and generate test cases from Mendix Studio Pro.

## Prepare MTA

- Make sure to create an Account in MTA having at least `Tester` and `ApiUser` [User Roles](manage-accounts#mta-user-roles). 
- [Create a Test configuration](../../test-configuration#create-a-new-test-configuration) that is linked to the App that you want to test.

## Configure Extension

- Open the App that you want to test in Studio Pro.
- Open the Microflow Call Hierarchy tab. 
- Click on <i class="fal fa-cog"></i>.
- Enter the MTA Endpoint. For example: `https://mta-menditect-9fo2p.mendixcloud.com`
- Enter the Username and Password for the Account that you created in MTA to be used by the Extension.
- Select the [Test configuration](../../test-configuration) that should be used to store and view [Test Cases](../../test-case).
- Save the settings.

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 9 April 2024