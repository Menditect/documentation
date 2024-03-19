# Data management

## Definition

This best practice covers why managing test data in MTA is important, and why Menditect recommends using MTA to setup masterdata in your test application, rather than doing this manually, or by using database scripts or backups.

## Facts

- By managing data in MTA, it is possible to run tests on any instance.
- By managing data in MTA, it can be made specific for the scope of testing and the risk of influencing or being influenced by other (test) users is minimized.
- By managing data in MTA, dependencies on data are made explicit, and MTA can assist in maintenance after changes have been made.
- Cleaning up previously created data makes tests repeatable.
- By cleaning up previously created data prior to running a test, you retain the ability to check the test results in the user interface, and the possibility to correct them if an executed test fails. 
- By cleaning previously created data after running a test, other end users of the same application instance are not affected by the results.

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 1 March 2024