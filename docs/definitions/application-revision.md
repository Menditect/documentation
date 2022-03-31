# Application Revision

## Definition

An Application revision is a development version of a Mendix application. A revision belongs to an [Application Branch](application-branch). Revisions are created when Mendix model changes are commited in Mendix Studio Pro or Mendix Studio.

See [Mendix documentation](https://docs.mendix.com) for more information about revisions.

## Properties
| Name | Description |
| ----------- | ----------- |
| Author | The creator of the revision (committer). |
| Commit message | The description added to the commit action. Typically this contains information about the model changes. |
| Create revision date  | The date when the revision is created (or the commit is done). |
| Mendix version | The version of Mendix Studio (Pro) in which the [Application](application) is developed. |
| Progress | An indication of the download progression of the Application revision. |
| Revision number | The revision number of the model of the Mendix application. |
| Total modules | The total number of modules in application revision. |
| Total entities | The total number of entities in application revision. |
| Total microflows | The total number of microflows in application revision. |

## Business rules
- The revision for a [Test Application](test-application) should be identical to the revision in use by [Test Configurations](test-configuration) in order to be able to execute the Test Configuration. This can be achieved by downloading the revision and applying it to the [Test Suites](test-suite) in a Test Configuration.
- The Application Revision information cannot be deleted from MTA if a Test Configuration is using the Application Revision.

## Actions on an Application Revision

### View downloaded Application Revisions for an Application
- Navigate to the "Applications" page to view all Applications that are used in MTA.
- Select an [Application](application).
- Navigate to the "Application branches & revisions" tab.
- Select an [Application Branch](application-branch).
- The Application Revisions are shown on the right pane.

### Add an Application Revision
Add a new Application Revision to MTA by downloading it from teamserver.
Depending on the [Application Environment](application-environment), there are two possible ways of achieving this:
- For a MendixCloud Application Environment:<br /> - Navigate to the "Test applications" tab of the [Test Configuration](test-configuration).<br /> - Click on <i class="fas fa-sync"></i> next to the revision number. The download will start automatically if a new revision is available on Mendix teamserver and this revision is deployed to the Application Environment.
- For a Custom Application Environment:<br /> - Navigate to the "Test applications" tab of the Test Configuration.<br /> - Click on <i class="fa fa-pencil"></i> next to the revision number. A selection page is shown.<br /> - Select an Application Branch and a revision to download. The download starts automatically.

Note that downloading can take some time depending on the size of the Mendix project.

### Apply a downloaded Application Revision to Test Suites in a Test Configuration
A new Application Revision must be applied to the [Test Suites](test-suite) in a Test Configuration, in order to be able to execute the Test Configuration.
- Click the “Apply to Test Suites” button for the selected Test Configuration. MTA will evaluate all model changes and check the consistency of the Test Suite definitions with the Mendix model. If the test model and the Mendix model are not compliant a consistency error will be shown.

Note that this can take some time depending on the size of the Mendix project, the number and size of Test Suites in the Test Configuration].

### Delete a downloaded Application Revision
- Navigate to the "Applications" page to view all Applications that are used in MTA.
- Select an Application, MTA will show detailed Application information.
- Navigate to the "Application branches & revisions" tab.
- Select an Application Branch, MTA will show all Application Revisions on the right pane.
- Click on <i class="fas fa-trash-alt"></i> to delete the Application Revision. Note this is only possible when the Application Revision is no longer in use by a Test Configuration. Application Revisions are only removed from MTA; not from the Mendix repository.

## Related topics
- [Application](application)
- [Application Branch](application-branch)
- [Application Environment](application-environment)
- [Test Application](test-application)
