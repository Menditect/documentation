# Application Revision

## Definition

A revision in a [branch](application-branch) on teamserver used by an [Application](application). Revisions are generally created by someone committing their changes made in the Mendix modeler or Mendix studio. 

## Properties
| Name | Description |
| ----------- | ----------- |
| Author | Creator of the revision (committer) |
| Commit message | Commit message of the revision |
| Create revision date  | Date when the revision is created (or the commit is done) |
| Mendix version | Version string of the Mendix version of the app project in this revision |
| Progress | Progress of the download of the application revision |
| Revision number | The revisionumber of the model of the Mendix application |
| Total modules | Total number of modules in application revision |
| Total entities | Total number of entities in application revision |
| Total microflows | Total number of microflows in application revision |

## Business rules
- The revision for a [Test application](test-application) should be identical to the revision in use by [Test Configurations](test-configuration) in order to be able to execute the [Test Configuration](test-configuration). This can be achieved by downloading the revision and applying it to the [Test Suites](test-suite) in a [Test Configuration](test-configuration).

## Actions on Application Revision

### View downloaded Application Revisions for an Application
- Go to the Applications page to view all Applications that are used in MTA.
- Select an [Application](application).
- Go to the Application branches & revisions tab.
- Select an [Application Branch](application-branch).
- The Application Revisions are shown on the right pane.

### Create a new Application Revision
To create a new Application Revision in MTA, the revision on teamserver must be downloaded.
Depending on the [Application Environment](application-environment), there are two possible ways of achieving this:
- For an MendixCloud [Application Environment](application-environment), click on the refresh icon next to the revision number, on the Test applications tab of the [Test Configuration](test-configuration). If there is a new revision on teamserver, it will be downloaded automatically.
- For a Custom [Application Environment](application-environment), click on the pencil icon next to the revision number, on the Test applications tab of the [Test Configuration](test-configuration). Then, select an [Application Branch](application-branch) and select the revision to download. 

Note that downloading can take some time depending on the size of the Mendix project.

### Applying a downloaded Application Revision to the Test Suites in a Test Configuration
- After a new Application Revision is created or selected, it must be applied to the [Test Suites](test-suite) in a [Test Configuration](test-configuration), in order to be able to execute the [Test Configuration](test-configuration).
- Click the Apply to Test Suites button for the selected [Test Configuration](test-configuration).

Note that this can take some time depending on the size of the Mendix project, the number and size of [Test Suites](test-suite) in the [Test Configuration](test-configuration).

### Delete downloaded Application Revision
- Go to the Applications page to view all Applications that are used in MTA.
- Select an [Application](application).
- Go to the Application branches & revisions tab.
- Select an [Application Branch](application-branch).
- The Application Revisions are shown on the right pane.
- Click on the recycle bin icon to delete the Application Revision. Note this is only possible when it is no longer in use by a [Test Configuration](test-configuration).

## Related topics
- [Application](application)
- [Application Environment](application-environment)
- [Test Application](test-application)
- [Application Branch](application-branch)