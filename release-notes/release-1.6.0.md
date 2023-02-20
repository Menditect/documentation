# Release 1.6.2

:::caution
These release notes are from a version that is no longer being actively maintained. 
:::

## Release 1.6.2

#### Release date

19 may 2022

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS).

## Highlights in this release

<ul><i class="fas fa-fire"></i>  We have made significant improvements in the Recorder functionality. 
<ul>
<li>It is now possible to record microflows but also record create, change and retrieve object actions, and have MTA create Teststeps from these actions. </li>
<li>When creating a new Recording, it is no longer necessary to choose which steps to create. </li>
<li>All the detected user actions will automatically result in one or more Teststeps in the Test Case. </li>
<li>In this version, the Recording is also given two parameters that can be set; the maximum duration of the recording, and the maximum amount of detected user actions. This is to prevent long running of recordings as a result of an unefficent flow in the Mendix code. </li>
<li>Read more about recordings in the How to? section!</li>
<li>Because Recording is still in Beta, we have included a separate support form just for enthousiasts using this brand new feature. <br/>We welcome your feedback!</li>
</ul>
</ul>
<ul><i class="fas fa-fire"></i>  It is now possible to add a Teststep between existing Teststeps!
<ul>
<li>Choose if you want to create the Teststep before, or after the selected Teststep.</li>
<li>This is a much requested feature especially when you need to set your associations.</li>
</ul>
</ul>
<ul><i class="fas fa-fire"></i>  When a Microflow input parameter is an Object, it is now possible to set the value to Empty.</ul>
<ul><i class="fas fa-fire"></i>  Microflow input parameters can now be added as an item in the Datavariation.</ul>
<ul><i class="fas fa-fire"></i>  A List of objects can now be filled with objects from the output of multiple Teststeps.</ul>
<ul><i class="fas fa-fire"></i>  The documentation site is enriched with much more content.
<ul>
<li>Best practices added for Unit Tests and Process Tests.</li>
<li>Added versioning for the Reference Guide.</li>
<li>Explanatories added, linking to blogs on the Menditect website.</li>
<li>"How to" section has been updated, especially to support usage of the MTA Plugin Module.</li>
<li>Legal documents (EULA, SLA, Privacy Policy) have been moved from Google Docs.</li>
<li>Releasenotes have been moved from Google Docs.</li>
</ul>
</ul>
<ul><i class="fas fa-fire"></i>  A form to send a support request can now be opened directly from MTA.</ul>


## New functionality 

| ID                    | MTA-437                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Asserts have been explanded with the option to compare using Greater-than or Smaller-than syntax.<br/>. |
| __Release actions__   | None.                                                                                                   |

<br/>

| ID                    | MTA-572                                                                                                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| __New functionality__ | When recording a Test Case, MTA will prohibit users from applying a new revision on, or executing a Test Configuration, copying a Test Suite or Test Case and making changes in Teststeps in that Test Case. |
| __Release actions__   | None.                                                                                                                                                                                                        |

<br/>

| ID                    | MTA-465                                                      |
| --------------------- | ------------------------------------------------------------ |
| __New functionality__ | The Font Awesome icon library has been updated to version 6. |
| __Release actions__   | None.                                                        |

<br/>

| ID                    | MTA-502                                                                                |
| --------------------- | -------------------------------------------------------------------------------------- |
| __New functionality__ | The instruction text when copying a Test Suite or Test Case is now more user friendly. |
| __Release actions__   | None.                                                                                  |

<br/>

| ID                    | MTA-581                                                                |
| --------------------- | ---------------------------------------------------------------------- |
| __New functionality__ | Calculated attributes are now excluded from Retrieve Object Teststeps. |
| __Release actions__   | None.                                                                  |

<br/>

## Bug fixes

| ID                  | MTA-546                                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| __Problem__         | When adding a String attribute with a size more than 200 characters to the Datavariation, an error would occur. |
| __Solution__        | String attributes can now be added to the Datavariation regardless the amount of characters.                    |
| __Release actions__ | None.                                                                                                           |

<br/>

| ID                  | MTA-492                                                                                                                                                                      |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | If all items in the Datavariation are deleted, an empty Datavariation would be the result, and the Test Suite would still be executed multiple times but with the same data. |
| __Solution__        | If all items in the Datavariation are deleted, the Datavariation itself is now also deleted.                                                                                 |
| __Release actions__ | None.                                                                                                                                                                        |

<br/>

| ID                  | MTA-521                                                                                                               |
| ------------------- | --------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | If an error needs to be fixed in the Datavariation page, the Solve button would still lead to the Configuration page. |
| __Solution__        | If an error needs to be fixed in the Datavariation page, the Solve button will now lead to the Datavariation page.    |
| __Release actions__ | None.                                                                                                                 |

<br/>

| ID                  | MTA-545                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------- |
| __Problem__         | When adding an assert after cancelling in the same page, further user input would be ignored. |
| __Solution__        | Adding an assert after first cancelling now works as expected.                                |
| __Release actions__ | None.                                                                                         |

<br/>

| ID                  | MTA-583                                                                       |
| ------------------- | ----------------------------------------------------------------------------- |
| __Problem__         | When selecting a Teststep, sometimes the selection of the Test Case was lost. |
| __Solution__        | When selecting a Teststep, the Test Case is also re-selected.                 |
| __Release actions__ | None.                                                                         |

<br/>

## Hot fixes in this release

### 1.6.1

| ID                  | n/a                                                                                      |
| ------------------- | ---------------------------------------------------------------------------------------- |
| __Problem__         | Recorded microflow without return value was selected as microflow for input parameter.   |
| __Solution__        | Correct recorded microflow is now selected when selecting microflow for input parameter. |
| __Release actions__ | None.                                                                                    |

<br/>

### 1.6.2

| ID                  | n/a                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------ |
| __Problem__         | Recorded retrieve actions incorrectly count towards number of recorded actions.            |
| __Solution__        | Recorded retrieve actions are no longer included when counting amount of recorded actions. |
| __Release actions__ | None.                                                                                      |

<br/>

| ID                  | n/a                                                              |
| ------------------- | ---------------------------------------------------------------- |
| __Problem__         | Sometimes recorded attributes from different objects were mixed. |
| __Solution__        | Attributes from different objects are no longer mixed.           |
| __Release actions__ | None.                                                            |

<br/>

| ID                  | n/a                                                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| __Problem__         | When deleting a test application from a test configuration, the results were not deleted making it difficult to delete a test application. |
| __Solution__        | When deleting a test application from a test configuration, the results are now also deleted.                                              |
| __Release actions__ | None.                                                                                                                                      |

<br/>

| ID                  | n/a                                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | When executing a test configuration, Plugin Users from all associated Test Applications needed to be valid.                |
| __Solution__        | When executing a test configuration, only Plugin Users that are actually used in Test Cases are checked if they are valid. |
| __Release actions__ | None.                                                                                                                      |
