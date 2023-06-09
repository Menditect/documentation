# Recorder fails

## Issue summary

There can be multiple reasons why the recorder is failing:

- Using the recorder in combination with **MTA Plugin 4.2.13** is not working. We are working a.s.a.p. on a fix in a newer version of the MTA Plugin. Please install the **MTA Plugin 3.6.5** which can be downloaded from the Mendix Marketplace or from Github: https://github.com/Menditect/MENDITECT-MTA-Plugin/releases/tag/3.6.5
- Using the recorder is and will not be supported for Mendix 9.20, because Mendix is not providing the correct information for the recording. Using the recorder in Mendix Runtime versions higher than or equal to 9.21 is supported in the MTA 2.1 release.
- It is possible that the recorder was started too late. Please start the recorder before logging in to the application.

