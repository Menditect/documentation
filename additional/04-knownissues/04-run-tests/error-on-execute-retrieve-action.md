# Error on execute with a Retrieve action

## Issue summary

When using a Retrieve from Former Teststep, pointing to a Teststep that also uses a Retrieve from Former Teststep, you may get an error upon Executing.

## Possible causes and resolutions

### Consecutive Retrieve from Former Teststep without Persisting

This is (an example of) an exact scenario:
- Test Case 1 contains a Create teststep of a persistable object, but no Persist Teststep or microflow that commits the object.
- Test Case 2 contains a Retrieve from Former Teststep using the teststep in Test Case 1, but no Persist Teststep or microflow that commits the object.
- Test Case 3 contains a Retrieve from Former Teststep using the teststep in Test Case 2, but no Persist Teststep or microflow that commits the object.

When executing, this error will be shown in the Test Run for Test Case 3:

<font color="Red">Failed to execute...</font><br/>
Cannot execute pre-action "select object for retrieve run" because entity value runs of the test step run output are not found

Other comparable scenario's leading to this error:
- the object is committed to the database, but deleted thereafter. 
- the object is committed to the database, but the [Execution User](../../../mta/execution-user) in Test Case 2 or 3 does not have access to the Entity.

#### Resolutions

1. Insert a Persist teststep in Test Case 1 after the first teststep.
2. Make sure the Execution User has access to the Entity.
3. Avoid using consequtive retrieves from former teststep, but always retrieve from the same teststep (in above example, the teststep in Test Case 1).
