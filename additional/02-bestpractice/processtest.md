# Process testing

## Definition

A process test, chain-test or end-to-end test consists of several transactions, that tests the integration between functions in one or multiple systems.

## Characteristics

- A process test is executed on one or more Mendix Apps, in multiple sessions by one or more users.
- A process test generally creates data that can be visually inspected in the Mendix app being tested, if not cleaned up.

## Structure

Maintaining unit tests will have a different frequency than maintaining process tests, and each process will be subjected to change on different moments in time. Therefore it is recommended to use below structure in MTA:

- One test configuration per Mendix application for one process test.
- One test suite for cleaning up test data, one test suite for creating (master)data, and one or more test suites per (sub)process for process testing.
- Data variation on the test suite level.

## Tips and tricks

- Perform a **Product Risk Analysis** (PRA) to determine which process to test first. 
- **Include a business representative** (like a Product Owner) in your PRA.
- Have process tests created, executed and maintained by **testers and developers** together.
- Use the **MTA recorder** as a starting point. 
- Put the **cleanup script before the test script**, and if other users are hindered by your results, also after the test script.
- When cleaning up, preferably use **existing (microflow) logic** to delete, rather than Delete Object Teststeps. This is to make sure associated objects or data generated from Domain Model Event handlers is also deleted.
- **Include asserts** to have MTA check the results automatically instead of manually inspecting them. 
- **Use datavariation instead of test duplication**.

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 1 March 2024