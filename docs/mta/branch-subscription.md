---
sidebar_position: 9
---

# Branch Subscription

## Definition

Subscribing to a branch in a [Test Configuration](test-configuration) will make MTA poll for new [Revisions](application-revision) (commits) on that branch and automatically download them in the background. 

## Properties

### Application         
The Application where the Branch Subscription is made on. This can be any published free or licensed Mendix App.                                                                                                             |

### Test Configuration  
The Test Configuration where the Branch Subscription is created in.                                                                                                                                                          |

### Branch              
The branch where MTA will poll for new revisions.                                                                                                                                                                            |

### Polling frequency   
This how often the branch is checked for a new revision (High, Medium, Low).                                                                                                                                                 |

### Adapt automatically 
Select "Latest application revision" to [adapt the Test Configuration](application-revision#adapt-test-suites-in-a-test-configuration-to-a-downloaded-application-revision) automatically after the revision was downloaded. |

### Mendix user         
The Mendix user linked to the Account that created the Branch Subscription, that is used to authorize when polling and downloading revisions from Mendix.                                                                    |

## Business rules
- If the Account of the user that created the Branch Subscription is deleted, the subscription will be deactivated. The subscription can be [repaired](#repair-a-branch-subscription) by anyone having access to the same [Application](application).
- If multiple Test Configurations are subscribed to the same Application Branch, the last configured Polling frequency will apply.


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
- Save. 

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
- Save.


## Related topics
- [Application](application)
- [Application Revision](application-revision)
- [Test Configuration](test-configuration)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 7 October 2025