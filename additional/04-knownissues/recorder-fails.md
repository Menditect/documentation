# Recorder fails

## Issue summary

After [recording](../../recording) user actions, when stopping the recording, the teststep generation fails with an error.


## Possible causes and resolutions

### Unsupported Mendix Version

The Recorder does not work in Mendix runtime versions 9.24.4, 9.24.5, 9.24.6 and 9.24.7.

**Resolution**

Upgrade to a newer Mendix runtime version.

### Recorder started too late

It is possible that the recorder was started too late. 

**Resolution**

Please start the recorder before logging in to the application.

### Too much data retrieved

If the Menditect Plugin Module intercepts more than 8MB of data during a running recording, the recording will fail. This amount of data could exist of a large number of objects, objects with a lot of attributes, or large attribute values (or a combination of this). Microflows that return more than 8MB of data, or front-end retrieve-from-database actions (in a datagrid / listview / nanoflow) that return more than 8MB of data, will consecutively break the recording.

**Resolution**

Redesign your microflows, nanoflows and page retrieve actions. Consider retrieving only a subset or using paging. Challenge design decisions if these amounts of data are sent to your application's front-end. If not sure what is causing the issue, use the [Mendix debugger](https://docs.mendix.com/refguide/debug-microflows-and-nanoflows/) to check how much data is being retrieved from the database. 