# Recorder fails

## Issue summary

After [recording](../../../mta/recording) user actions, when stopping the recording, the teststep generation fails with an error.


## Possible causes and resolutions

### Unsupported Mendix Version

The Recorder function is only supported in Mendix LTS versions. 

**Resolution**

Upgrade to a Mendix LTS version. 

### Recorder started too late

It is possible that the recorder was started too late. 

**Resolution**

Please start the recorder *before* logging in to the application.

### Limitations

The limits of the recording feature are reached. 

[Check the limitations.](../../bestpractice/record-actions#limitations)
