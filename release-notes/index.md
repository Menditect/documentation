# Release 2.1.0

#### Release date

4 May 2023

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). The current highest release that is supported is 9.24.0. 
For support levels on MTS/LTS and monthly releases, read the [SLA](../legal/sla).
Read more about MTS/LTS versions at https://docs.mendix.com/releasenotes/studio-pro/lts-mts.

## Highlights in this release

<ul><i class="fas fa-fire"></i>  Presenting...Test Case datavariation!
<ul>
<li>More options to perform TDD by varying your data points on Test Case level! </li>
<li>Use Test Case datavariation in conjunction with Test Suite datavariation...</li>
<li>...or simply migrate your existing datavariation to Test Case level using the 'Move' option.</li>
</ul>
</ul>

<ul><i class="fas fa-fire"></i>  And: Asserts on Validation messages!
<ul>
<li>Check frontend validation feedback messages that occur during test execution! </li>
<li>Assert on any message or specify message text and object member. </li>
</ul>
</ul>


## New functionality 

| ID                    | MTA-717                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to add one or more Asserts on frontend validation feedback messages for a Test Case. During execution the Asserts are evaluated against validation feedback messages. Asserts can be added from scratch, or created based on actual validation feedback messages that were shown during a Test Run. <br/><br/>Read the reference guide for detailed information. |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                                                                                                               |

<br/>


| ID                    | MTA-1144                                                                                                                                                                                                                                                                                             |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to add an Attribute value or an Assert to Data variation on the Test Case level. Attributes and Asserts within the same Test Case can be added to either Test Case datavariation or Test Suite datavariation. <br/><br/>It is also possible to switch after they have been added. |
| __Release actions__   | It is possible to migrate existing Test Suite datavariation items using the move option.                                                                                                                                                                                                             |

<br/>


| ID                    | MTA-801                                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | On both datavariation pages, it is now possible to add multiple values and asserts without having to reopen the popup. |
| __Release actions__   | None.                                                                                                                  |

<br/>


| ID                    | MTA-1189                                                                                                                                                                                                                                           |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | Fixed known issue: If MTA encounters an attribute which datatype was changed in the revision running on the app instance, but the test suites were not yet adapted to that revision, MTA will show a user friendly error instead of a generic one. |
| __Release actions__   | None.                                                                                                                                                                                                                                              |

<br/>


| ID                    | MTA-1017                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| __New functionality__ | The datavariation pages now use an improved widget which uses paging and therefore performs better. |
| __Release actions__   | None.                                                                                               |

<br/>


| ID                    | MTA-1154                                                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is possible to show an attribute value or assert from Test Suite design or Test run in the datavariation page. The item will be highlighted in the datavariation page. |
| __Release actions__   | None.                                                                                                                                                                     |

<br/>


| ID                    | MTA-942                                                                                            |
| --------------------- | -------------------------------------------------------------------------------------------------- |
| __New functionality__ | The latest production version of the Mta Plugin can now be downloaded from the Mendix Marketplace. |
| __Release actions__   | None.                                                                                              |

<br/>




## Bug fixes

| ID                  | MTA-1225                                                                               |
| ------------------- | -------------------------------------------------------------------------------------- |
| __Problem__         | When deleting an MTA account that has never logged in before, an error would be shown. |
| __Solution__        | It is possible to delete an MTA account that has never logged in before.               |
| __Release actions__ | None.                                                                                  |

<br/>


| ID                  | MTA-1239                                                                                                       |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Known issue: The connection from the Plugin to MTA degrades after a few days, preventing test execution.       |
| __Solution__        | Fixed known issue: The connection from the Plugin to MTA is renewed occasionally, except if a test is running. |
| __Release actions__ | None.                                                                                                          |

<br/>


| ID                  | MTA-1194                                                                                           |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| __Problem__         | MTA was not able to process a validation message on an association member if that member is empty. |
| __Solution__        | MTA is now able to process a validation message on an association member even if it is empty.      |
| __Release actions__ | None.                                                                                              |

<br/>

| ID                  | MTA-1186                                                                                                          |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| __Problem__         | When association an empty object from a previous teststep an error would be shown on the teststep when executing. |
| __Solution__        | An Object from a teststep that is empty during execution can be associated in a create/retrieve/change teststep.  |
| __Release actions__ | None.                                                                                                             |

<br/>

| ID                  | MTA-1257                                                                                                                                                                                 |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | When a many-to-many association's owner is changed from "Both" to "Single" in a revision, an error would be shown during adapting Test Suites if that association is used in a teststep. |
| __Solution__        | MTA is able to adapt Test Suites with many-to-many associations being changed in a revision.                                                                                             |
| __Release actions__ | None.                                                                                                                                                                                    |

<br/>

| ID                  | MTA-1270                                                                                                                                                                                                                    |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | For a project using Git, Mendix sometimes creates a revision that is 'empty' (without any changes in files or in the model). When downloading this revision MTA would raise an error because the MendixVersion was missing. |
| __Solution__        | MTA is able to download these 'empty' revisions.                                                                                                                                                                            |
| __Release actions__ | None.                                                                                                                                                                                                                       |

<br/>
