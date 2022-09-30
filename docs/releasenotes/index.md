# Release notes

## Release 1.8.0

#### Release date

29 september 2022

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). The current highest monthly release that can be downloaded is 9.17. For support levels on MTS/LTS and monthly releases, read the [SLA](../sla).
Read more about MTS/LTS versions at https://docs.mendix.com/releasenotes/studio-pro/lts-mts.

## Highlights in this release

<ul><i class="fas fa-fire"></i>  Design teststeps much quicker!
<ul>
<li>Reuse definitions for change, retrieve and delete teststeps, based on existing teststeps </li>
<li>Teststeps for associated objects are also automatically created </li>
<li>Create teststeps to fill microflow parameters on the fly! </li>
</ul>
</ul>

<ul><i class="fas fa-fire"></i>  Drag and drop teststeps! 
<ul>
<li>Use drag&drop to position teststeps or move them to another test case </li>
<li>View and fix resulting constrution errors realtime </li>
</ul>
</ul>

<ul><i class="fas fa-fire"></i>  Use real data when designing teststeps!
<ul>
<li>Build create or retrieve teststeps based on actual objects in the database </li>
<li>The object's attributes and associations are used in the teststep </li>
<li>Design-time select which database to use </li>
<li>Feeling lucky? Use the single-click microflow test button and MTA will randomly insert values for all attributes! </li>
</ul>
</ul>

<br/>
<i class="fas fa-exclamation-triangle"></i> Make sure to <a href="../howtos/import-plugin">download the latest MTA Plugin Module version</a> before using this version of MTA.
<br/>


## New functionality 


| ID  |  MTA-824 |
| ----------- | ----------- |
| __New functionality__ | It is now possible to fill attributes with user-selected values from the database on a Create or Retrieve object teststep. |
| __Release actions__ | None. | 

<br/>


| ID  |  MTA-850 |
| ----------- | ----------- |
| __New functionality__ | It is now possible to randomly fill attributes with values from the database on a Create or Retrieve object teststep. |
| __Release actions__ | None. | 

<br/>


| ID  |  MTA-811 |
| ----------- | ----------- |
| __New functionality__ | It is now possible to create a Retrieve, Change or Delete teststep, using the output of an existing teststep, using the menu under the "..." button on that teststep. |
| __Release actions__ | None. | 

<br/>


| ID  |  MTA-812 |
| ----------- | ----------- |
| __New functionality__ | If an MTA user logs in without having an API key or Personal Access Token (PAT) filled in, a popup window will show allowing the user to enter this information. |
| __Release actions__ | None. | 

<br/>


| ID  |  MTA-856 |
| ----------- | ----------- |
| __New functionality__ |  When adding a new Create Object teststep, all attributes are now unselected by default (this was already the case for Change Object teststeps). |
| __Release actions__ | None. | 

<br/>


| ID  |  MTA-366 |
| ----------- | ----------- |
| __New functionality__ | It is now possible to use drag and drop to reorder teststeps in a test case, in a separate Edit page. The option for deleting and renaming teststeps has also moved to this page. Resulting construction errors are shown in realtime, but the operation can now be made undone to prevent these errors from happening. |
| __Release actions__ | None. | 

<br/>


| ID  |  MTA-779 |
| ----------- | ----------- |
| __New functionality__ |  When selecting an entity from the domain model while adding a Create/Change/Retrieve/Delete object teststep, the name of the teststep is now auto generated and the popup window to enter the name is skipped. |
| __Release actions__ | None. | 

<br/>


| ID  |  MTA-780 |
| ----------- | ----------- |
| __New functionality__ |  When selecting a microflow while adding a Microflow teststep, the name of the teststep is now auto generated and the popup window to enter the name is skipped. |
| __Release actions__ | None. | 

<br/>


| ID  |  MTA-617 |
| ----------- | ----------- |
| __New functionality__ | It is now possible to test a Mendix project where Git is selected for the source control. The result of this is that Application Branches are no longer part of MTA. |
| __Release actions__ | None. | 

<br/>


| ID  |  MTA-792 |
| ----------- | ----------- |
| __New functionality__ | When executing a Ci/Cd Test Run using the MTA Ci/Cd API, and MTA detects that the application commit (revision) number of the Test Configuration does not match that of the Application Environment, MTA will download the new application commit asynchronously, so that the API consumer will get a result immediately and not have to wait or handle a time-out. |
| __Release actions__ | None. | 

<br/>


| ID  |  MTA-793 |
| ----------- | ----------- |
| __New functionality__ | If a Ci/Cd API call yields an error message, this error message is now formatted as a JSON string. |
| __Release actions__ | None. | 

<br/>


| ID  |  MTA-827 |
| ----------- | ----------- |
| __New functionality__ | Creating a teststep is now done from the menu under the + Teststep button instead of choosing the teststep type in a popup window. |
| __Release actions__ | None. | 

<br/>


| ID  |  MTA-843 |
| ----------- | ----------- |
| __New functionality__ | Moving a teststep up and down is now done from the menu under the "..." button on the teststep. Note that moving the top teststep Up, will make it move all the way down, and moving the bottom teststep Down, will make it move all the way up! |
| __Release actions__ | None. | 

<br/>


| ID  |  MTA-847 |
| ----------- | ----------- |
| __New functionality__ | Moving a teststep to another Test Case can now be done from the menu under the "..." button on the teststep. |
| __Release actions__ | None. | 

<br/>

| ID  |  MTA-878 |
| ----------- | ----------- |
| __New functionality__ | When a construction error is shown due to a microflow being deleted, the name of the microflow is now included in the error. |
| __Release actions__ | None. | 

<br/>




## Bug fixes

| ID  |  MTA-762 |
| ----------- | ----------- |
| __Problem__ | The max range of a saved date time assert is not saved correctly leading to errors. |
| __Solution__ | Saving an assert on a date time attribute now works as expected. | 
| __Release actions__ | None. | 

<br/>


| ID  |  MTA-781 |
| ----------- | ----------- |
| __Problem__ | Only the first 100 attributes of an object were shown in a Create/Change/Retrieve object teststep. |
| __Solution__ | All attributes are now shown in a Create/Change/Retrieve object teststep. | 
| __Release actions__ | None. | 

<br/>


| ID  |  MTA-785 |
| ----------- | ----------- |
| __Problem__ | When recording a list view with a reference selector, MTA is not able to determine which entity to retrieve for the input change object. |
| __Solution__ | Recording a list view with a reference selector now works as expected. | 
| __Release actions__ | None. | 

<br/>


| ID  |  MTA-809 |
| ----------- | ----------- |
| __Problem__ | The Copy Test Suite popup only shows the first 10 target Test Configurations. |
| __Solution__ | All target Test Configurations are now shown in the Copy Test Suite popup. | 
| __Release actions__ | None. | 

<br/>


| ID  |  MTA-810 |
| ----------- | ----------- |
| __Problem__ | When trying to update a revision but the MTA user associated Mendix user does not have access to the Mendix App, the user will get the message that their credentials are not valid. |
| __Solution__ | When trying to update a revision but the MTA user associated Mendix user does not have access to the Mendix App, the user will get an appropriate error message. | 
| __Release actions__ | None. | 

<br/>


| ID  |  MTA-631 |
| ----------- | ----------- |
| __Problem__ | Chromium browsers consistenly ignore the Do Not Autocomplete setting in Mendix, leading to MTA usernames and passwords showing in the respective associated Mendix username and API key fields. |
| __Solution__ | When entering the associated Mendix username and API key, an extra action needs to be performed to show these fields, preventing Chromium browsers from autofilling them with incorrect values. | 
| __Release actions__ | None. | 

<br/>







