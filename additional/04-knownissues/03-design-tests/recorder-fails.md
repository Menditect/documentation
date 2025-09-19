# Recorder fails

## Issue summary

After [recording](../../../mta/recording) user actions, when stopping the recording, the teststep generation fails with an error.


## Possible causes and resolutions

### Unsupported Mendix Version

The Recorder does not work in Mendix runtime versions 9.24.4, 9.24.5, 9.24.6 and 9.24.7.

**Resolution**

Upgrade to a newer Mendix runtime version.

### Recorder started too late

It is possible that the recorder was started too late. 

**Resolution**

Please start the recorder before logging in to the application.

### Limitations

The limits of the recording feature are reached. 

[Check the limitations.](../../bestpractice/record-actions#limitations)
