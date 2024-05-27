# Microflow missing from list  

## Issue summary

In some cases a Microflow may not appear in the list of microflows when you add a Microflow Teststep or are Generating a Microflow test.

## Possible causes and resolutions

### Revision does not match

One reason could be, that the revisions between MTA and the test application don't match. 

**Resolution**

Commit your changes if you are working in Studio Pro, and [Update the revision that MTA uses](../../application-revision#change-the-application-revision-for-a-test-configuration) for the Test Configuration.

### Hidden microflow

Another reason could be, that the Microflow is not included when downloading the model from Mendix. Mendix will not include a Microflow when it's implementation is hidden or if the Microflow is part of a hidden or private Module. 

**Resolution**

To test such a microflow, create a non-private microflow, outside of any hidden or private modules, that calls this microflow as a submicroflow.