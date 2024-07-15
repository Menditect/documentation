---
sidebar_position: 5
---

# Test with anonymous user

Mendix allows the possibility to enable users to work anonymously in an environment. This means that they do not have to login. 

MTA however always needs an Execution user that exists as a local user in the environment, to execute the Test Cases with. 

If the goal is to test functionality using the role that is assigned to the Anonymous user in the Mendix project, a local user must be created in the environment, with (only) that role assigned. Next, the local user needs to be set as the execution user for the Test Case that is testing the "anonymous" functionality. 

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 21 april 2022