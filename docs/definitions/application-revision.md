# Application revision

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
- The revision for a [Test application](test-application) should be identical to the revision in use by [Test Configurations](test-configuration) in order to be able to execute the [Test Configuration](test-configuration).

## Actions on Application revision

### View ...
- ...

## Related topics
- [Test Suite](test-suite)
- [Test Run](test-run)
