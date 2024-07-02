---
sidebar_position: 2
---

# Record and complete teststeps

## Definition

This document describes how to complete the created teststeps after recording.
Other documents about this topic are:
- [Recording](../../../recording) in the reference guide.
- [Record actions](../../bestpractice/record-actions) in the Best practice section.

## Retrieve teststeps

By default, all created retrieve teststeps are set to 'From Database'.

- Make sure that retrieve actions are done By Association if retrieving a non-persistable object or an object that is not (yet) committed to the database.

An existing object that is subsequently used in a Change Object Teststep or passed as a parameter in a Microflow Teststep, can be retrieved using a Retrieve Object Teststep. However it is not always possible to determine which members are used as constraints in that Teststep. Such Teststeps will be marked in a separate color to indicate they need to be reviewed. 

- Make sure to verify that the correct associations, attributes, and attribute values are set, then dismiss the warning.

Note that only constraining members that are also visible in the Client are included in the created Teststeps.

## Combine change object steps

If a microflow is called after each change in the page, for instance an 'on change' microflow, the recording result will contain multiple change object teststeps.

- Merge Change Object teststeps using the results from a former teststep, if they are changing the same object.

## Combine teststeps from multiple recordings

When recording multiple sessions sequentially in the same Test Case it may be efficient to combine them. 

- Microflows that are called to provide context to a page where the user performs the actions, usually only need to be executed once.
- Check create object steps, and make sure the same object is not created twice unneccesarily. Also check the teststeps that use this object.

## Add asserts on every retrieve

To ensure the data that is created in the recording matches expectations, have MTA check the values in each retrieve teststep.

- Enrich every retrieve teststep with an Assert on Object count. If the result is 1 object, add an "Equals 1" assert. If the result is a list, add an "Greater than 0" assert.
- Enrich every attribute that was visible while the recording was created with an Assert on Attribute Value. 

## Handle date and time values

All datetime values are set as "Specified date" instead of current datetime with an offset.
- Check datetime attribute values and make sure to change them to current datetime with an offset where necessary. 

## Handle objects in pages

If an object is created by the page and not by a microflow (for instance using a "Create Button" in Mendix) the recorder will create a Create Object Teststep without any members. The values set in the page by the user need to be set in MTA as well. If the object is subsequently committed (saved to the database) also by the page (for instance using a "Save changes" button) and not by a microflow, the recorder will not create a Persist Object Test Step to achieve this. 
- Manually set the members in the Create Object Teststep.
- Manually include a Persist Object Teststep to save changes to the database.


## Troubleshoot issues

| A recording results in errors                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Construction errors are most likely result of starting the recording too late. An object that is subject to change or passed as a microflow parameter, can not be found. <br/><br/> There are two possible fixes: <br/> 1. Delete the created teststeps and retry the recording, and this time login to the Test application, after starting the recording. <br/>  2. Create the necessary teststep that returns the object, place it before the created teststep, and fix the 'from former test step' error. |


| A recording results in many (often identical) teststeps                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In some cases MTA creates many teststeps after finishing the recording or gives a message that the maximum amount of recorded user actions is exceeded. The reason could be that a microflow is executed many times, for instance for each row in a datagrid or listview, or for each change on a page element like a textbox or radiobutton. Ideally, the recorded page(s) or microflow(s) are optimized to prevent this, but this may not always be achievable. In that case it is advisable to limit the amount of test data to only a few test records. |


| MTA is unable to set enumeration value                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| In some cases the recorder is not able to determine an enumeration value. This happens when an enumeration value is deleted from Mendix, but not yet from the database, because a migration script has not yet been executed on the table where the enumeration is used. |