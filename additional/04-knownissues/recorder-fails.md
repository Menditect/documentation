# Recorder fails

## Issue summary

There can be multiple reasons why the recorder is failing:

- Using the Recorder in combination with an App running on **Mendix 9.24.4** or higher Mendix 9 versions, **and in Mendix 10**, will result in incomplete teststeps, because Mendix has changed the structure of the information for the recording regarding Microflows calls. **We are working on a fix in coordination with Mendix.**
- It is possible that the recorder was started too late. Please start the recorder before logging in to the application.

