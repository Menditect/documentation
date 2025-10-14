# Test Nanoflows


A [Nanoflow](https://docs.mendix.com/refguide/nanoflows/) is essentially a client helper. It exists in the Browser and offers the same functionality that is offered in a Mendix Page like Create, Save, Delete, Rollback but also Javascript execution. Since a nanoflow only exists in the client, it is not known in MTA. The best way to execute a nanoflow is by executing it during a [Frontend test](frontend-test-structure-in-mta). Execution can be done by clicking a button, or by triggering the execution on a Page, if the nanoflow is the source of a Datagrid, Listview, etc.

An alternative is to use the [MTA Recorder function](record-user-actions). While the Nanoflow is executed, the Recorder will detect the beforementioned actions like "Create object", and add Teststeps to match these events. However not all actions will be detected, that is why the first option is preferred.

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 18 October 2025