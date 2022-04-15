# Release 1.5

## Release 1.5

#### Release date

17 february 2022

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS).
For other versions of the Mendix modeler like the monthly release, Menditect support level is low.

## New functionality 

| ID  |  MTA-46 |
| ----------- | ----------- |
| __New functionality__ | It is now possible to add an assert on the attribute value of the (primitive) output parameter of a microflow in a microflow test step. <br/> Note that the option to add an assert on the attribute value of an object output parameter of a microflow will be built in a future release. To achieve this in release 1.5, create a retrieve object test step that retrieves the object output parameter, and add the assert there.  |
| __Release actions__ | None. | 

<br/>

| ID  |  MTA-270 |
| ----------- | ----------- |
| __New functionality__ |  It is now possible to add an assert on a string attribute value and choose "contains", so check if the value contains certain characters. |
| __Release actions__ | None. | 

## Bug fixes

| ID  |  MTA-430 |
| ----------- | ----------- |
| __Problem__ | When updating a revision of a Test Application associated with a Test Configuration that uses more than one Test Application, an unstable situation occurred, leading to unexpected errors.  |
| __Solution__ | Updating a revision of a Test Application associated with a Test Configuration that uses more than one Test Application no longer leads to an unexpected situation. | 
| __Release actions__ | None. | 

<br/>

| ID  |  MTA-423 |
| ----------- | ----------- |
| __Problem__ | When changing the execution user on a test case results in the execution user no longer being used, it is not always possible to delete the execution user.  |
| __Solution__ | It is now always possible to delete an execution user that is not used. | 
| __Release actions__ | None. | 
