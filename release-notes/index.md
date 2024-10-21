# Release 2.9

#### Release date

30 October 2024

#### Supported Mendix versions

Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS). <br/>
Read more about MTS/LTS versions at Mendix docs: https://docs.mendix.com/releasenotes/studio-pro/lts-mts. <br/>
For support levels on MTS/LTS and monthly releases, read the [SLA](../legal/sla). 

## Highlights in this release

<i class="fas fa-fire"></i>  <b>Download revisions automatically!</b> <br/> Reduce waiting time with Branch Subscriptions.  
<br/>
<iframe src="https://player.vimeo.com/video/1019352760" height="300" width="450" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<br/>
<i class="fas fa-fire"></i>  <b>Execute a single variation in the data variation.</b><br/> Re-testing failed test variations is now much faster.



## New functionality 

| ID                    | MTA-1453                                                                                                                                                                                                                                                                                                                                |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to subscribe to a branch. Subscribing will always download the latest revision in the background, automatically. The polling rate can be set to high, medium or low. Additionally, on a Git repository, a Webhook can be created, which will result in instantaneous downloading of a revision after it was created. |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                                                                   |
<br/>


| ID                    | MTA-1907                                                                                                             |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | It is now possible to execute a single variation in Test Suite Datavariation page and Test Case Datavariation popup. |
| __Release actions__   | None.                                                                                                                |
<br/>


| ID                    | MTA-1948                                                                                                                                                                                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __New functionality__ | The MTA Public API can now be used to check if a Test Configuration, Test Suite or Test Case contains a Construction Error. This property can be used to determine if a Test Configuration can be adapted, but also to determine if an adapt has resulted in new Construction Errors. |
| __Release actions__   | None.                                                                                                                                                                                                                                                                                 |
<br/>


## Bug fixes


| ID                  | MTA-1962                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| __Problem__         | Revisions downloaded using the MTA Public API, in a Git branch other than `main`, are visible but unusable in MTA. |
| __Solution__        | Any revisions downloaded using the MTA API can be used to adapt Test Configurations to.                            |
| __Release actions__ | Affected revisions will be repaired in the migration that starts after startup of MTA.                             |

<br/>


| ID                  | MTA-1969                                                                                                                                                                                     |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | If a Test Configuration is still adapting while Snapshots are being cleaned up, the Snapshot is deleted. This results in being unable to restore a Test Configuration after an adapt failed. |
| __Solution__        | Snapshots won't be cleaned up if the associated Test Configuration is still being adapted.                                                                                                   |
| __Release actions__ | None.                                                                                                                                                                                        |

<br/>


| ID                  | MTA-1940                                                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| __Problem__         | Cancelled Test Runs that are used in a Coverage Calculations on Application level cannot be deleted. |
| __Solution__        | Cancelled Test Runs that are used in a Coverage Calculations on Application level can be deleted.    |
| __Release actions__ | None.                                                                                                |


| ID                  | MTA-1957                                                                                                                                                          |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Problem__         | Known issue from MTA 2.8.0: it was not possible to Copy a Test Suite if there is a Teststep that contains values filled with the output from a previous Teststep. |
| __Solution__        | It is again possible to Copy a Test Suite if there is a Teststep that contains values filled with the output from a previous Teststep.                            |
| __Release actions__ | None.                                                                                                                                                             |

