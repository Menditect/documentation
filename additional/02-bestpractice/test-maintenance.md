# Test maintenance

## Definition

Maintaining tests up-to-date can be time consuming for projects that are under development. 

This Best Practice on test maintenance can help you be more efficient.

Note that the best practice is subject to change while features are being added to MTA.

## Updating tests

Adapting a large test configuration can take a lot of time, and if many changes are made between the current and next revision, chances are, you will end up with construction errors.
If this happens when you don't have time to fix these errors, the test configuration stays "broken" for a longer period of time. 

:::info
Note that when your test configuration contains an error, you can still execute the test cases and test suites that do not contain errors.
:::

The quickest way to updating tests:
- Choose a "master" test configuration to update to the latest revision.
- Create an empty test configuration (a "draft") with your name in the title, so other Tester's know not to touch it. 
- Change the revision of the draft test configuration to the latest revision.
- Next, copy the test suite that contains the test that you need to update, from the master into the draft.
- MTA will *automatically* adapt the contents of the test suite.
- Make your changes in the draft test suite to fix any construction errors and repair broken tests.
- Repeat this process until you have done this for all the test suites that need to be updated.
- Remove these test suites from the master.
- Adapt the master to the latest revision.
- Copy the updated test suites to the master. Note that you can copy test suites even if the target test configuration contains errors.
- Delete the test suites from the draft test configuration.

## Adding tests

Like updating tests, adding tests to your existing test configuration is also quicker if you use a draft test configuration to build the tests:
- Create an empty test configuration (a "draft") with your name in the title, so other Tester's know not to touch it. 
- Change the revision of the draft test configuration to the latest revision.
- Create your tests in this test configuration.
- When you are done [updating existing tests](#updating-tests), copy the new test suites to the "master" test configuration.
- Delete the test suites from the draft test configuration.

## Tips and tricks

Downloading revisions and adapting test configurations can be time consuming, especially for large Mendix projects.

Recommended is to set up a CI/CD pipeline, which uses the [API's in MTA](../../cicd). 
Setup a scheduded nightly action running at 5:00 UTC that always [downloads the latest revision](../../cicd#post-download-revision) of the relevant development branch(es).
This way, you will not have to wait for the download to complete during working hours. 
Don't worry about your database filling up with unnessesary revision data, because MTA cleans up unused revisions, daily at 2:30 UTC. 
Just make sure to run your CI/CD pipeline after that.

:::info
Don't have a CI/CD pipeline? <br/>You can also [download the latest revision in MTA](../../application-revision#change-the-application-revision-for-a-test-configuration).
:::

## Feedback?

Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 23 February 2024