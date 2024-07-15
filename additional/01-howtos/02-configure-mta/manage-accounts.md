---
sidebar_position: 1
---

# Manage Accounts

To manage MTA accounts, login as [MTA Manager](#mtamanager) and navigate to MTA Management -> MTA Users.

Accounts in MTA are managed like most Mendix Apps: using the [Administration](https://docs.mendix.com/appstore/modules/administration/) module. 

When creating an account, make sure to set the Time zone according to where the user will log in. For CiCdApiUser accounts, set the Time zone to the same Time zone as where MTA is hosted. 

Passwords have to meet the password policy criteria:
- Length minimum of 6 characters.
- Contain a digit.
- Contain an uppercase character.
- Contain non-alphanumeric characters.

When assigning user roles, these are the possibilities:

## MTA User Roles

Below are the roles that can be assigned when logged in as MTA Manager.

:::note
Logging in as **Administrator** will only allow you to create other Administrator Accounts, or MTA Manager Accounts. <br/>Logging in as Administrator is only applicable [when MTA is hosted on-premises](run-mta-on-premise).
:::

### MTAManager
This role can Manage Accounts and configure Mendix credentials for Accounts. It can also [configure SAML SSO](configure-mta-saml).

### Tester
This role can manage [Applications](../../../application), build [Test Configurations](../../../test-configuration) and [run tests](../../../test-run). Use this role when creating Accounts for users who want to use MTA for testing.

### ApiUser
This role can call endpoints in the [Public API](../../../api). 

### MTAConnectionUser
This role should **not** be assigned to new Accounts. There is only one MTA Connection user, that should be configured for the [MTA Plugin](../connect-mta/import-plugin#configuring-connection-user-in-mta).

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 30 January 2024