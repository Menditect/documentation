---
sidebar_position: 8
---

# Test Nanoflows

To test the actions that exist in a nanoflow, simply use the [recorder](record-user-actions) to detect these actions. Every create object in the nanoflow will yield a Create Object Teststep in MTA, every retrieve object will yield a Retrieve Object Teststep, et cetera. MTA will try to recreate all the actions, just as recorded user actions in a page are recreated.

## Explanation
Any Mendix app consists of a client (frontend), server (backend) and database layer. The client layer could consist of a browser tab, but also a rest or web service request or OData call. The server (Mendix runtime) could be in the Mendix cloud or Azure, but also in a private cloud or on premise. The server communicates with the database and with the client. MTA exists on the communication between these two. It has rudimental information about the server (Microflows) and the database (Domain model) but none about the client. This provides a lot of flexibility, because it does not depend on the client to execute tests, but it also has downsides, because MTA will not test any logic that only exists on pages, snippets, widgets et cetera. 

A nanoflow is essentially a client helper. It exists in the client and offers the same functionality that is offered in a page like create, save, delete, rollback but also javascript execution. That is why nanoflows are not inherently supported to be tested in MTA. However, there is a workaround for this problem.

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 18 may 2022