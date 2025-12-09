# Handle Frontend User Sessions

## Purpose 

This document describes how to handle a user session in the Browser, in respect to the Test Case session that was created by MTA.

## Combining Test Case Sessions and Playwright Sessions

Although MTA creates it's own user session to perform (backend) actions in a Test Case, it is still necessary to login to the App under test for [frontend testing](../../../mta/frontend-test). The upside of the current implementation is that sessions created by Playwright can be carried onto subsequent Test Cases. This is achieved by reusing the `MenditectPlaywrightConnector.Page` object that was created in the Setup Test Case.

A few tips:
- execute Frontend tests with [Execution user](../../../mta/test-case#execution-user) `MxAdmin` and [Apply Security](../../../mta/test-case#apply-security) disabled. 
- prevent using Anonymous sessions, to avoid leaving sessions open, and running into a max-sessions-exceeded Mendix error.
- always logout at the end when creating a Playwright session.
- prevent also manually logging in at the same time from your own browser.
- restart the App right before executing the test.


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 15 september 2025