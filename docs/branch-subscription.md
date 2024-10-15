---
sidebar_position: 9
---

# Branch Subscription

## Definition

Subscribing to a branch in a [Test Configuration](test-configuration) will make MTA poll for new [Revisions](application-revision) (commits) on that branch and automatically download them in the background. 

Additionally, a Webhook can be created in the [Application](application) under test, that will inform MTA of new revisions immediately.

## Properties
| Name               | Description                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Application        | The Application where the Branch Subscription is made on. This can be any published free or licensed Mendix App.                            |
| Test Configuration | The Test Configuration where the Branch Subscription is created in.                                                                         |
| Branch             | The branch where MTA will poll for new revisions.                                                                                           |
| Polling frequency  | This how often the branch is checked for a new revision (High, Medium, Low).                                                                |
| Account            | The Account of the user that created the Branch Subscription, that is used to authorize when polling and downloading revisions from Mendix. |
| Webhook            | An indication whether a Webhook is created in the Application under test, to inform MTA of new revisions.                                   |

## Business rules
- If the Account of the user that created the Branch Subscription is deleted, the subscription will become invalid and the webhook will be deactivated. The subscription can be [repaired](#repair-a-branch-subscription) by anyone having access to the same [Application](application).

## Actions on an Application Instance

### View Branch Subscriptions

- Navigate to the "Test configurations" page.
- Select the [Test Configuration](test-configuration) for which you want to see the Branch Subscriptions.
- Navigate to "App revisions".
- For each Application that is associated to the Test Configuration, Branch Subscriptions, if present, are shown as <font color="#21c359"> <i class="fal fa-code-branch"></i> </font> in the list. 

### Create a Branch Subscription

- Click on <i class="fas fa-ellipsis"></i> for the Application for which you want to create a subscription.
- Click "<i class="fal fa-code-branch"></i> Subscribe to branch".
- Select which branch to subscribe to.
- Select a Polling frequency.
- Select whether to create a Webhook (only available for Mendix Apps stored in a Git repository).
- Save. MTA will activate the subscription polling after 5 minutes. The webhook, if selected, will be active immediately.

Note that an active webhook will make MTA download new revisions instantly, but if it fails or is deactivated, the subscription polling frequency will still apply.


### Edit a Branch Subscription

- Click on <i class="fas fa-ellipsis"></i> for the Application for which you want to edit the subscription.
- Click "<i class="fal fa-code-branch"></i> Edit branch subscription".

### Remove a Branch Subscription

- Click on <i class="fas fa-ellipsis"></i> for the Application for which you want to remove the subscription.
- Click "<div class="fa-stack"><i class="fal fa-code-branch fa-stack-1x"></i><i class="fal fa-slash fa-stack-1x"></i></div>Unsubscribe from branch".

### Repair a Branch Subscription

A Branch Subscription that is invalid will show as <font color="#f99b1d"> <i class="fal fa-code-branch"></i> </font> in the list.

- Click on <i class="fas fa-ellipsis"></i> for the Application for which you want to repair the subscription.
- Click "<i class="fal fa-code-branch"></i> Edit branch subscription".
- Click the button to create the polling cask. The subscription will be created on behalf of the user that is logged in.
- Select a Polling frequency.
- If applicable, click the button to recreate the Webhook.
- Save.


## Related topics
- [Application](application)
- [Application Revision](application-revision)
- [Test Configuration](test-configuration)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 22 October 2024