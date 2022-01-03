# Application revision

## Definition

A revision in a branch on teamserver used by an application. Revisions are generally created by someone committing their changes made in the Mendix modeler or Mendix studio. 

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
- The revision for a Test application should be identical to the revision in use by Test configurations in order to be able to execute the test configuration.

## Actions on Application revision

### View ...
- ...

## Related topics
- [Test suite](test-suite)
- [Test run](test-run)
