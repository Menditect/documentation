# Test maintenance

## Definition

Maintaining tests up-to-date can be time consuming for projects that are under development. 

This Best Practice on test maintenance can help you be more effecient.

Note that the best practice is subject to change while features are being added to MTA.

## Updating tests

Downloading revisions and adapting test configurations can be time consuming, especially for large Mendix projects.

Recommended is to set up a CI/CD pipeline, which uses the [API's in MTA](../../api). 
Setup a scheduded nightly action running at 5:00 UTC that always [downloads the latest revision](../../api#post-download-revision) of the relevant development branch(es).
This way, you will not have to wait for the download to complete during working hours. 
Don't worry about your database filling up with unnessesary revision data, because MTA cleans up unused revisions, daily at 2:30 UTC. 
Just make sure to run your CI/CD pipeline after that.

:::info
Don't have a CI/CD pipeline? <br/>You can also [download the latest revision in MTA](../../application-revision#change-the-application-revision-for-a-test-configuration).
:::

Adapting a large test configuration can take a lot of time, and if many changes are made between the current and next revision, changes are, you will end up with construction errors.
Moreover, this may happen when you don't have time to fix these errors. This means the test configuration stays "broken" for a longer period of time.
To prevent all that, follow this strategy:
- Choose a "master" test configuration to update to the latest revision.
- Create an empty test configuration (a "draft") with your name in the title, so other Tester's know not to touch it. 
- Change the revision of the draft to the latest revision.
- Next, copy the test suite that contains the test that you need to update, from the master into the draft.
- MTA will *automatically* adapt the contents.
- Make your changes in the draft to fix any construction errors and repair broken tests.
- Repeat this process until you have done this for all the test suites that need to be updated.
- Remove these test suites from the master.
- Adapt the master to the latest revision.
- Copy the updated test suites to the master.
- Delete the draft.

## Adding tests

Adding tests to your existing test configuration is also quicker if you use a draft test configuration to build the tests.
- Create a new test configuration and adapt it to the revision that you want to use.
- Create your tests in this test configuration.
- When you are done [updating existing tests](#updating-tests), copy the new tests to the "master" test configuration.
- Delete the draft.

## Feedback?

Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 23 February 2024