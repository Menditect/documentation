# Release 1.5

## Release 1.5

#### Release date

17 february 2022

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS).

## New functionality 

| ID  |  MTA-46 |
| ----------- | ----------- |
| __New functionality__ | It is now possible to add an assert on the attribute value of the (primitive) output parameter of a microflow in a microflow test step. <br/> Note that the option to add an assert on the attribute value of an object output parameter of a microflow will be built in a future release. To achieve this in release 1.5, create a retrieve object test step that retrieves the object output parameter, and add the assert there.  |
| __Release actions__ | None. | 

<br/>

| ID  |  MTA-270 |
| ----------- | ----------- |
| __New functionality__ | It is now possible to add an assert on a string attribute value and choose "contains", so check if the value contains certain characters. |
| __Release actions__ | None. | 

<br/>

| ID  |  MTA-402 |
| ----------- | ----------- |
| __New functionality__ | It is now possible to negate an assert. For all existing options like "equals" and "range", and also for the new option "contains", there is now also a "not equals", "not range" and "not contains" option to indicate the assert should be negated. <br/><br/>Note that there is no "not" option added for boolean attributes.
  |
| __Release actions__ | None. | 

<br/>

| ID  |  MTA-120 |
| ----------- | ----------- |
| __New functionality__ | It is now possible to configure "currentdatetime with offset" on an assert on a datetime attribute value.   |
| __Release actions__ | None. | 

<br/>

| ID  |  MTA-418 |
| ----------- | ----------- |
| __New functionality__ | If on an assert on attribute value the option "range" is selected, both the Min and Max values are now mandatory.<br/><br/>Note that the option to check if a value is "greater than" or "smaller than" etc. will be built in a future release. |
| __Release actions__ | None. | 

<br/>

| ID  |  MTA-453 |
| ----------- | ----------- |
| __New functionality__ | It is now possible to record actions executed by a user in the frontend of a test application, and automatically create microflow test steps if these actions include a microflow call. For more info see our blog ([what happens below the screen?](https://menditect.com/what-happens-below-the-screen))<br/><br/>Note this functionality is currently still under development (beta). The option to automatically create object test steps will be built in a future release. |
| __Release actions__ | None. | 

<br/>

| ID  |  MTA-375 |
| ----------- | ----------- |
| __New functionality__ | If the execution flow encounters a "validation feedback" action during the execution of a microflow, the details of the message are shown in the result of the test case.<br/><br/>Note that validation feedback generated in a page is not included. Also "show message" actions in microflows are not included.  |
| __Release actions__ | None. | 

<br/>

| ID  |  MTA-325 |
| ----------- | ----------- |
| __New functionality__ | Downloaded revisions that are not used anymore will be periodically cleaned up for performance reasons.  |
| __Release actions__ | None. | 

<br/>

| ID  |  MTA-451 |
| ----------- | ----------- |
| __New functionality__ | When deleting an application that is associated with test configurations which are marked for deletion, but have not yet been deleted in the nightly cleanup process, will be deleted as well. A message is shown that the process can take some time. |
| __Release actions__ | None. | 

<br/>

| ID  |  MTA-415 |
| ----------- | ----------- |
| __New functionality__ | If a construction error in a test step leads to an attribute or assert that is used in data variation, the ‘Solve’-button will lead to the data variation page, so the error(s) can be solved there. In the design overview only the first variant can be solved, and if there is still an error in one of the variations, a warning for this will be shown. |
| __Release actions__ | None. | 

<br/>

| ID  |  MTA-446 |
| ----------- | ----------- |
| __New functionality__ | Boolean values are now always shown as "Yes" or "No" instead of sometimes as "true" or "false".  |
| __Release actions__ | None. | 

<br/>

| ID  |  MTA-454 |
| ----------- | ----------- |
| __New functionality__ | Performance improvement for executing test steps where attribute values are configured.  |
| __Release actions__ | None. | 

<br/>


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

<br/>

| ID  |  MTA-404 |
| ----------- | ----------- |
| __Problem__ | Changing a retrieve test step sometimes results in an error. |
| __Solution__ | Changing a retrieve test step no longer results in an error. | 
| __Release actions__ | None. | 

<br/>

| ID  |  MTA-444 |
| ----------- | ----------- |
| __Problem__ | After changing a value in the data variation page, the table showing all the variations sometimes does not refresh correctly.  |
| __Solution__ | The table showing all the variations refreshes correctly. | 
| __Release actions__ | None. | 

<br/>

| ID  |  MTA-445 |
| ----------- | ----------- |
| __Problem__ | When editing the assert on an attribute value from the test results page, an empty page would be shown.  |
| __Solution__ | It is now also possible to edit asserts from the test results page. | 
| __Release actions__ | None. | 

<br/>

| ID  |  MTA-456 |
| ----------- | ----------- |
| __Problem__ | When an assert attribute value is configured on a test step and the result of the test execution yields multiple objects, the assert result per object was not shown correctly.  |
| __Solution__ | The assert result per object is now shown correctly. | 
| __Release actions__ | None. | 

