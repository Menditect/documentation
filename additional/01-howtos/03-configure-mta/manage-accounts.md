---
sidebar_position: 1
---

# Manage Accounts

To manage MTA accounts, login as [MTA Manager](#mtamanager) and navigate to MTA Management -> MTA Users.

Accounts in MTA are managed like most Mendix Apps: using the [Administration](https://docs.mendix.com/appstore/modules/administration/) module. 

## Time Zone
When creating an account, make sure to set the Time zone according to where the user will log in. For [ApiUser](#apiuser) accounts, set the Time zone to the same Time zone as where MTA is hosted. 

## Password criteria
Passwords have to meet the password policy criteria:
- Length minimum of 6 characters.
- Contain a digit.
- Contain an uppercase character.
- Contain non-alphanumeric characters.

## MTA User Roles

### Administrator

This Role can: 
- Manage other Administrator Accounts, or MTA Manager Accounts. 
- View and logout active user sessions.

:::note Administrator Account
Logging in as Administrator is only applicable for customers who [manage their own MTA Deployment](../../howtos/host-and-deploy/manage-mta-deployment).<br/>
Do not combine this role with other (below) roles.
:::

### MTA Manager
This Role can:
- Manage other MTA Manager Accounts, Tester Accounts, API User Accounts and the Connection User Account.
- [Configure SAML SSO](configure-mta-saml).
- [Toggle the Archive function](../../../archive#toggle-archive-in-mta).
- View and logout active user sessions.

### Tester

:::success Default
This is the standard Role for new Accounts.<br/>
:::

This Role can manage [Applications](../../../application), build [Test Configurations](../../../test-configuration) and [run tests](../../../test-run). 

### API User
This Role can call endpoints in the [Public API](../../../api). To call any of the endpoints, this Role needs to be selected, as well as he `Tester` Role.

### MTA Connection User
This Role can **not** be assigned to new Accounts. There is only one MTA Connection user, that should be configured for the [MTA Plugin](../connect-mta/import-plugin#configuring-connection-user-in-mta).

Make sure to regularly change the `MTAConnectionUser` password. 


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 15 September 2025