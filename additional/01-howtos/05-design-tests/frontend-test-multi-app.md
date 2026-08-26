# Frontend Test on multiple Apps or Environments

## Purpose 

This document covers two scenario's:
1. Designing a Frontend Test that can run on multiple environments (Application Instances), like a Local environment and a Cloud hosted environment. This is not standard because the URL to navigate to, is not part of the Test Case / Test Setting, but passed as a parameter of the `Start_MxFrontend_Test` microflow.
2. Designing a Frontend Test where the Playwright server can be on different locations, like locally hosted or in Azure. This is not standard because the Playwright server is determined by the `Start_Frontend_Test` microflow that is called instead of being part of the Test Case / Test Setting.
These scenario's often go hand-in-hand because hosting Playwright locally is the logical option when also running locally, whereas hosting Playwright in Azure is the logical option when the App under test is hosted in the (Mendix) cloud.

In the future, these two settings will be integrated as part of the Test Case / Test Setting, but currently it is required to implement a workaround for this.

## Actions

1. For configuring environment specific URLs, credentials etc., a custom "wrapper" microflow must be created. This microflow will call any of the `Start_MxFrontend_Test` microflows, determined by for example an enumeration parameter. The return value of this wrapper should be identical as the original `Start_MxFrontend_Test` microflow and used instead, in the subsequent teststeps.
2. For configuring the playwright server, another "wrapper" must be created. This microflow will have all the parameters of the underlying `Start_Frontend_Test` microflows, and call any one of these, determined by for example an enumeration parameter. The return value of this wrapper should be identical as the original `Start_Frontend_Test` microflow and used instead, in the subsequent teststeps.


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)
