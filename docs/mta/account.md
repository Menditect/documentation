---
sidebar_position: 3
---

# Account

## Definition

To manage MTA accounts, login as [MTA Manager](#mta-manager) and navigate to MTA Management -> MTA Users.

Accounts in MTA are managed like most Mendix Apps: using the [Administration](https://docs.mendix.com/appstore/modules/administration/) module. 

## Properties

### User name

The user name of the MTA User.

### Time Zone
When creating an account, make sure to set the Time zone according to where the user will log in. For [ApiUser](#api-user) accounts, set the Time zone to the same Time zone as where MTA is hosted. 

### Password criteria
Passwords must have minimum length of 12 characters.

## Business rules
- The MTA Connection User can not be assigned to new Accounts. 
- There is only one MTA Connection user.

## MTA User Roles

### Administrator

This Role can: 
- Manage other Administrator Accounts, or MTA Manager Accounts. 
- View and logout active user sessions.
- Trigger Scheduled Events for Cleaning up [Test Runs](test-run), [Test Configurations](test-configuration) and [Application Revisions](application-revision). 
- View and trigger Data Validation Runs.

:::note Administrator Account
Logging in as Administrator is only applicable for customers who manage their own MTA Deployment.<br/>
Do not combine this role with other (below) roles.
:::

### MTA Manager
This Role can:
- Manage other MTA Manager Accounts, Tester Accounts, API User Accounts and the Connection User Account.
- Configure SAML SSO.
- [Toggle the Archive function](archive#toggle-archive-in-mta).
- View and logout active user sessions.

### Tester

:::success Default
This is the standard Role for new Accounts.<br/>
:::

This Role can manage [Applications](application), build [Test Configurations](test-configuration) and [run tests](test-run). 

### API User
This Role can call endpoints in the [Public API](/api). To call any of the endpoints, this Role needs to be selected, as well as he `Tester` Role.

### Service Account Manager

This Role can Manage Service Accounts and issue Session Tokens, which are required to Connect an LLM to MTA.

### MTA Connection User

:::caution 
Make sure to regularly change the `MTAConnectionUser` password!
:::

This Role is used to connect from a [Mendix App](application) to MTA, using the [MTA Plugin Module](../Tools/mta-plugin).

### MTA Plugin User
This Role should **not** be assigned to new Accounts. It is used for internal testing of MTA by Menditect.

## Service Account

A Service Account is required to Connect an LLM to MTA. It is created as an Account in MTA, but it cannot be used to login to MTA.

### User name

The user name of the Service Account.

### Description

This text should help remember for what tool this Service Account was created, by whom, or for what purpose.

### Session Token

Every Service Account can have one or more Session tokens. A Session token or Bearer token is displayed once upon creation, and must be entered as the Authorization for the MTA MCP server (for example, in the `mcp_config.json` file).

### Scope

Currently, a Service Account has a single scope that must be enabled, the `Call MCP primitive tools` scope. Additional scopes will be added in future releases of MTA.



## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 15 September 2026