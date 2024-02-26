# Test maintenance

## Definition

Maintaining tests up-to-date can be time consuming for projects that are under development. 

This Best Practice on test maintenance can help you be more effecient.

Note that the best practice is subject to change while features are being added to MTA.

## Process

Downloading revisions and adapting test configurations can be time consuming, especially for large Mendix projects.

Recommended is to set up a CI/CD pipeline, which uses the [API's in MTA](../../api.md). 
Setup a scheduded nightly action running at 5:00 UTC that always [downloads the latest revision](../../api.md#post-download-revision) of the relevant development branch(es).
This way, you will not have to wait for the download to complete during working hours. 
Don't worry about your database filling up with unnessesary revision data, because MTA cleans up unused revisions, daily at 2:30 UTC. 
Just make sure to run your CI/CD pipeline after that.

Adapting a large test configuration can take a lot of time, and if many changes are made between the current and next revision, changes are that you will end up with construction errors.
To prevent that, follow this strategy:
- For each original test configuration in MTA, create an empty test configuration (a "draft"). 
- Setup your CI/CD pipeline to [adapt these drafts using the MTA API](../../api.md#post-adapt-testconfiguration-to-revision) after you downloaded the latest revision.
- When you need to update a test, copy a single test suite into the draft.
- MTA will automatically adapt to the latest revision that was downloaded in the night. 
- Make your changes in the draft to fix any construction errors and repair broken tests.
- Repeat this process until you have done this for all the test suites that need to be updated.
- Remove these test suites from the original test configuration.
- Adapt the original test configuration to the latest revision.
- Copy the updated test suites to the original test configuration.
- Empty the draft.



## Feedback?

Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 23 February 2024