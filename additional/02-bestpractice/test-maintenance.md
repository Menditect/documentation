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

### Fix adapt resulting in construction errors

If your adapt results in a lot of [construction errors](../../construction-error), you can [restore a snapshot](../../snapshot#restore-a-snapshot) of the Test Configuration, that was created before it was adapted.

After that, you can go to the adapt process, one [Test Suite](../../test-suite) at the time:

1. Choose any *source* Test Configuration that you want to update to the latest revision. 
2. Create an empty, *target* Test Configuration with your name in the title, so your collaegues know not to touch it. 
3. Set the revision of the target to the latest revision.
4. Next, copy the first Test Suite from the source into the target.
5. MTA will *automatically* adapt the contents of the Test Suite in the target.
6. Fix [construction errors](../../construction-error) and update the Test Cases as a result of this adapt.
7. Repeat steps 4-6 until you have done this for all the Test Suites.
8. You can now choose to delete the source or keep it (to keep the associated Test Runs).


**Watch the how-to video on Adapting:**
<iframe src="https://player.vimeo.com/video/1009807371" height="300" width="450" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<br/>

## Adding tests

Like updating tests, adding tests to your existing test configuration is also quicker if you use a draft test configuration to build the tests:
- Create an empty test configuration (a "draft") with your name in the title, so other Tester's know not to touch it. 
- Change the revision of the draft test configuration to the latest revision.
- Create your tests in this test configuration.
- When you are done [updating existing tests](#updating-tests), copy the new test suites to the "master" test configuration.
- Delete the test suites from the draft test configuration.

## Tips and tricks

Downloading revisions and adapting test configurations can be time consuming, especially for large Mendix projects.

Recommended is to set up a CI/CD pipeline, which uses the [API's in MTA](../../api). 
Setup a scheduded nightly action running at 5:00 UTC that always [downloads the latest revision](../../api#post-download-revision) of the relevant development branch(es).
This way, you will not have to wait for the download to complete during working hours. 
Don't worry about your database filling up with unnessesary revision data, because MTA cleans up unused revisions, daily at 2:30 UTC. 
Just make sure to run your CI/CD pipeline after that.

:::info
Don't have a CI/CD pipeline? <br/>You can also [download the latest revision in MTA](../../application-revision#change-the-application-revision-for-a-test-configuration).
:::

## Feedback?

Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 23 February 2024