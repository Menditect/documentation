# Microflow missing from list  

## Issue summary

In some cases a Microflow may not appear in the list of microflows when you add a Microflow Teststep or are Generating a Microflow test.

## Possible causes and resolutions

The reason is that the Microflow is not included when downloading the model from Mendix. Mendix will not include a Microflow when it's implementation is hidden or if the Microflow is part of a hidden or private Module. 

**Resolution**

To test such a microflow, create a non-private microflow, outside of any hidden or private modules, that calls this microflow as a submicroflow.