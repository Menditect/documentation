# Test Case Run error regarding Validation Message

## Issue summary

When executing a Test, a Test Case Run fails. The executed Teststeps don't show any error but on the executed Test Case, this error message is shown:

<font color="Red">Could not process the response of validation feedback member, because the entity of the validation feedback could not be determined</font><br/>

## Possible causes and resolutions

### A Validation Message is shown on an object that is deleted later

A microflow is executed by MTA that contains a [validation message](https://docs.mendix.com/refguide/validation-message/) that is triggered. This validation message is triggered on an object. If this object is deleted further down in the Test Case (either by MTA or in a microflow), you will see this error.

**Resolution**

There are two solutions for this issue:
- change the microflow or Test Case to make sure the object is not deleted, or deleted in another Test Case;
- upgrade the Test Application to Mendix 10.15, where the issue is fixed, see: https://docs.mendix.com/releasenotes/studio-pro/10.15/#fixes