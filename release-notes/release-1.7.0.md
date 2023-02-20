# Release 1.7.0

:::caution
These release notes are from a version that is no longer being actively maintained. 
:::

## Release 1.7.0

#### Release date

14 july 2022

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). The current highest monthly release that can be downloaded is 9.15. For support levels on MTS/LTS and monthly releases, read the SLA.
Read more about MTS/LTS versions at https://docs.mendix.com/releasenotes/studio-pro/lts-mts.

## Highlights in this release

<ul><i class="fas fa-fire"></i>  Bring MTA to your workplace! 
<ul>
<li>You can now buy an MTA "bring your own cloud" license. </li>
<li>Keep your data safe on your own private or public cloud. </li>
<li>Or, just install it on-premise. </li>
<li>Contact <a href="mailto:sales@menditect.com">sales@menditect.com</a> for more information.</li>
</ul>
</ul>
<ul><i class="fas fa-fire"></i>  Run a single Test Case!
<ul>
<li>Execute a Unit Test with one click. </li>
<li>No longer needed to isolate a Test Case. </li>
</ul>
</ul>
<ul><i class="fas fa-fire"></i>  Rollback transactions in a Test Case!
<ul>
<li>All the data committed and deleted in both Object and Microflow teststeps is undone. </li>
<li>No need to delete data created in your Unit Test anymore. </li>
<li>Dependencies with other Test Cases are automatically checked. </li>
</ul>
</ul>
<br/>
<i class="fas fa-exclamation-triangle"></i> Make sure to download the latest MTA Plugin Module version before using this version of MTA.
<br/>


## New functionality 

| ID                    | MTA-593                                                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to buy an MTA "bring your own cloud" license and implement MTA on your own environment. Additionally, MTA will now also work if the database is implemented on Microsoft SQL Server. |
| __Release actions__   | None.                                                                                                                                                                                                   |

<br/>

| ID                    | MTA-598                                                                                                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to rollback all database transactions performed in a single Test Case. <br/><br/>This includes all commits that have been done in microflows. |
| __Release actions__   | None.                                                                                                                                                            |

<br/>

| ID                    | MTA-707                                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to execute a single Test Case as long as it does not use any data from previous Test Cases. |
| __Release actions__   | None.                                                                                                          |

<br/>

| ID                    | N/A                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | MTA now contains context sensitive help buttons that guide you directly to the related page in the Reference Guide. |
| __Release actions__   | None.                                                                                                               |

<br/>

| ID                    | N/A                                                           |
| --------------------- | ------------------------------------------------------------- |
| __New functionality__ | Several improvements were made in the Recorder functionality. |
| __Release actions__   | None.                                                         |

<br/>

| ID                    | N/A                                                                                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Several improvements were made in the user interface. <br/><br/>What are your top 10 user interface improvements? <a href="mailto:support@menditect.com">Let us know!</a> |
| __Release actions__   | None.                                                                                                                                                                     |

<br/>

| ID                    | MTA-531                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to select a specialization of the entity when selecting an object for a microflow parameter. |
| __Release actions__   | None.                                                                                                           |

<br/>

| ID                    | MTA-600                                                                        |
| --------------------- | ------------------------------------------------------------------------------ |
| __New functionality__ | It is now possible to select 'empty' for an association in an object teststep. |
| __Release actions__   | None.                                                                          |

<br/>

| ID                    | MTA-665                                                                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | When executing a Test Configuration, only the Test Applications that are actually used in Test Cases in the Test Configuration, are checked for availablilty. |
| __Release actions__   | None.                                                                                                                                                         |

<br/>

| ID                    | MTA-655                                                                                                                                                                                   |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | When selecting a Date value and choosing to either enter a date or calculate the date based on the current date, the first option is now called "Specified date" instead of "Fixed date". |
| __Release actions__   | None.                                                                                                                                                                                     |

<br/>

| ID                    | MTA-549                                                                                                                                                                                                                                            |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Running into a validation error upon execution of a Test Case no longer leads to the Test Case Run result being Failed. <br/><br/>We are also working on being able to assert on a validation error. This will be implemented in a future release! |
| __Release actions__   | None.                                                                                                                                                                                                                                              |

<br/>

| ID                    | MTA-651                                                                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | If an attribute or assert is used in datavariation it is no longer possible to change the value from the Test Suite page, but only in the datavariation page. |
| __Release actions__   | None.                                                                                                                                                         |

<br/>



## Bug fixes

| ID                  | MTA-731                                                                                                                                                                                                                                                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | When entering the Mendix username and API key on the My Account page sometimes the username was not saved correctly, due to Chromium browsers autofilling the field. This resulted in the MTA user not being able to download any Mendix models but also not being alerted about the fact that the username was not saved. |
| __Solution__        | Alert the user when the username is not correctly filled in upon entering Mendix username and API key.                                                                                                                                                                                                                     |
| __Release actions__ | Some MTA nodes currently have Mendix users where the username is unknown. A migration script will be executed on these MTA nodes where the username will be set to "user unknown". Please check the My Account page when not being able to download any Mendix models in MTA.                                              |

<br/>

| ID                  | MTA-726                                                                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | When enabling "Trim value" for assert on a String attribute the result would always be Passed if the attribute is of type "String unlimited". |
| __Solution__        | "Trim value" for assert on a String attribute now works as expected.                                                                          |
| __Release actions__ | None.                                                                                                                                         |

<br/>

| ID                  | MTA-715                                                                                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | When using a list of objects that is returned from a microflow teststep, an error would occur if the microflow returned 'empty' (instead of a list with 0 objects). |
| __Solution__        | Using a list returned from a microflow no longer results in an error.                                                                                               |
| __Release actions__ | None.                                                                                                                                                               |

<br/>

| ID                  | MTA-661                                                                             |
| ------------------- | ----------------------------------------------------------------------------------- |
| __Problem__         | Test configurations not-executed were not correctly displayed on the Dashboard.     |
| __Solution__        | The Dashboard now displays Test Configurations executed and not-executed correctly. |
| __Release actions__ | None.                                                                               |

<br/>

| ID                  | MTA-662                                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | In some cases it was not possible to delete an Application, even if all associated Test Configurations and Test Runs were deleted. |
| __Solution__        | Applications can now be deleted when all associated data is deleted.                                                               |
| __Release actions__ | None.                                                                                                                              |

<br/>