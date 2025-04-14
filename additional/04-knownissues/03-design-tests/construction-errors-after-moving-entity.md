# Construction errors after move Entity

## Issue summary

An Entity in the domain model has been moved to another Module in the Mendix Model.

This change was committed to Teamserver and the revision was downloaded in MTA, and a Test Configuration that uses this Entity, was [Adapted to this revision](../../../application-revision#adapt-test-suites-in-a-test-configuration-to-a-downloaded-application-revision).

Any teststep using this Entity now shows a [construction error](../../../construction-error) that the Entity is no longer available. Furthermore, teststeps using output from such a teststep, also show construction errors.

## Possible causes and resolutions

 Most rename or move actions in the Mendix Model are detected by MTA because the internal "Mendix ID" of the renamed or moved element in the Model stays the same. That is why, if you rename a microflow or move it to another module, there is no [construction error](../../../construction-error) shown.
 
 However, unfortunately it is not possible to detect moving an Entity, because the internal "Mendix ID" is changed. 

 One possible workaround, that only works *before* making the change in the Mendix model, is to temporarily change the name of the Modules so that the target module equals the source module in the old situation. 
 
 ### Example workaround:
 - Two modules, "CRM" and "OrderLine".
 - We want to move the "Customer" Entity from "CRM" to "OrderLine".
 - To achieve this, move the Entity;
 - Rename "CRM" to "Temp_CRM";
 - Rename "OrderLine" to "CRM";
 - Commit to Teamserver;
 - Download and Adapt the Test Configuration in MTA;
 - Rename "CRM" to "OrderLine";
 - Rename "Temp_CRM" to "CRM";
 - Commit to Teamserver.

Naturally, this workaround is only usable if fixing the resulting errors in the Mendix model outweighs fixing the construction errors in MTA.

In a future MTA release, we will make sure to find a solution for this issue.