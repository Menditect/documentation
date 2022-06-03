# Complete recorded actions

## Definition

This document describes how to complete the created teststeps after recording.
Other documents about this topic are:
- [Recorder](../refguide/recording) in the reference guide.
- [Record actions](../bestpractice/record-actions) in the Best practice section.


## Cleanup 



## Fix construction errors


## Dismiss warnings on retrieve steps


## Combine teststeps in the same Test Case

...

## Combine teststeps in different Test Cases

...


## Combine retrieves

## Add asserts on every retrieve

## Date and time handling

All datetime values are set as fixed instead of current datetime with an offset.
- Check datetime attribute values and make sure to change them to current datetime with an offset where necessary. 

## Object handling in pages

If an object is created by the page and not by a microflow (for instance using a "Create Button" in Mendix) the recorder will create a Create Object Teststep without any members. The values set in the page by the user need to be set in MTA as well. If the object is subsequently committed (saved to the database) also by the page (for instance using a "Save changes" button) and not by a microflow, the recorder will not create a Persist Object Test Step to achieve this. 
- Manually set the members in the Create Object Teststep.
- Manually include a Persist Object Teststep to save changes to the database.

## Selecting objects using attribute constraints

An existing object that is subsequently used in a Change Object Teststep or passed as a parameter in a Microflow Teststep, can be retrieved using a Retrieve Object Teststep. However it is not always possible to determine which members are used as constraints in that Teststep. 
- Such Teststeps will be marked in a separate color to indicate they need to be reviewed.

Note that only constraining members that are also visible in the Client are included in the created Teststeps.

## Selecting objects using association constraints

It is also possible that the constraint to retrieve an object is not on the object itself, but on an associated object. The associated object needs to be retrieved by a previous teststep, that will not be created by the recorder.
 
- Create a previous teststep to achieve this.


## Troubleshooting

| A recording results in many (often identical) teststeps | 
| ----------- | 
| In some cases MTA creates many teststeps after finishing the recording or gives a message that the maximum amount of recorded user actions is exceeded. The reason could be that a microflow is executed many times, for instance for each row in a datagrid or listview, or for each change on a page element like a textbox or radiobutton. Ideally, the recorded page(s) or microflow(s) are optimized to prevent this, but this may not always be achievable. In that case it is advisable to limit the amount of test data to only a few test records. | 


| MTA is unable to set enumeration value | 
| ----------- | 
| In some cases the recorder is not able to determine an enumeration value. This happens when an enumeration value is deleted from Mendix, but not yet from the database, because a migration script has not yet been executed on the table where the enumeration is used.  | 