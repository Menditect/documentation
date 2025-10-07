---
sidebar_position: 6
---


# Application Revision

## Definition

An Application Revision is a development version of a Mendix [Application](application) at a moment in time; a single commit either in Git or SVN. Revisions are created when Mendix model changes are commited to Teamserver in Mendix Studio Pro.

See [Mendix documentation](https://docs.mendix.com/refguide/version-control/#revision) for more information about revisions.

## Properties

### Author 
The creator of the revision (committer).  
 
### Commit message  
The description added to the commit action. Typically this contains information about the model changes.

### Create commit date 
The date when the revision is created (or the commit is done).  

### Mendix version  
The version of Mendix Studio (Pro) in which the Application is developed.

### Commit id 
The commit number of the model of the Mendix application.  
  
### Total modules
The total number of modules in application revision. 
  
### Total entities  
The total number of entities in application revision. 
 
### Total microflows
The total number of microflows in application revision.

## Business rules
- The Application revision information cannot be deleted from MTA if a Test Configuration is using the Application revision.

## Actions on an Application revision

### View downloaded Application revisions for an Application
- Navigate to the "Applications" page to view all Applications that are used in MTA.
- Select an [Application](application) by clicking on the tile.
- Navigate to "App revisions".

### View downloaded elements in a revision 
- Navigate to the "Applications" page to view all Applications that are used in MTA.
- Select an [Application](application) by clicking on the tile.
- Navigate to "App revisions" to view the Application revisions.
- Click on <i class="fal fa-info-circle"></i> to view Modules, Entities and Microflows in this revision.

### Add an Application revision
Add a new Application revision to MTA by downloading it from teamserver. The only way to download a revision, is if you select this revision to be used in a Test Configuration.

There are two possible ways of achieving this:

- [Add a new Test Configuration](test-configuration#create-a-new-test-configuration)
- [Change the Application revision for a Test Configuration](#change-the-application-revision-for-a-test-configuration)

Note that downloading can take some time depending on the size of the Mendix project.

### Change the Application revision for a Test Configuration
- Navigate to the "Test configurations" page.
- Select the Test Configuration.
- Navigate to "App revisions". 
- Click on "Change revision".
- Select the revision you want to test on.
- MTA will download the revision if it is not yet downloaded.

### Change to a revision downloaded using a subscription

If a [Branch Subscription](branch-subscription) is present, it is possible to change to the latest downloaded revision immediately.

- Click on <i class="fas fa-ellipsis"></i> for the Application for which you want to change the revision.
- Click "<i class="fal fa-pencil"></i> Change to <i class="fal fa-code-commit"></i> (commitid)".


### Adapt Test Suites in a Test Configuration to a downloaded Application revision

:::note
MTA will not check if the revision of a [Test Configuration](test-configuration) matches the one that is running on the [Application Instance](application-instance). <br/>This allows for connecting a locally running [Application](application) to MTA.
:::

[Test Suites](test-suite) in a Test Configuration must be adapted to a new downloaded Application revision, in order to be able to execute the Test Configuration.
- Click the Adapt to next revision” button for the selected Test Configuration. MTA will evaluate all model changes and check the consistency of the Test Suite definitions with the Mendix model. If the test model and the Mendix model are not compliant a [Construction Error](construction-error) will be shown.

:::note
This can take some time depending on the size of the Mendix project, the number and size of Test Suites in the Test Configuration. The adapt is running as a background process, you can continue using MTA. However, you cannot edit a configuration for which the adapt is running (A limited view of the configuration is possible during the adapt).
:::

### Restore previous revision of Test Suites in a Test Configuration

See [Snapshot](snapshot).

### Delete a downloaded Application revision

It is no longer possible to delete downloaded revisions manually.
Application revisions are cleaned up nightly by MTA if they are no longer in use.

## Related topics
- [Application](application)
- [Application Instance](application-instance)
- [Test Setting](test-setting)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 7 October 2025