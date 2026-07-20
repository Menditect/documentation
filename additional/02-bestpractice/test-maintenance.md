# Test maintenance

## Definition

Maintaining tests up-to-date can be time consuming for projects that are under development. 

This Best Practice on test maintenance can help you be more efficient.

Note that the best practice is subject to change while features are being added to MTA.

## Staying up-to-date

Consider using a [Branch Subscription](../../mta/branch-subscription) to automatically download the latest Application Revision from your development branch. 
- Recommended for existing Test Configurations on large projects with semi-frequent commits on the same branch. 
- Not recommended for new (draft) Test Configurations, or when frequently switching or merging branches, or with high-frequent commits (for example, more than 100 times per day). 

Consider using [Mendix pipelines](../howtos/schedule-tests/cicd-get-started#test-scheduling-using-mendix-pipelines) to schedule the execution of your Test Configuration.
- Recommended for existing Test Configurations that are actively maintained.
- Recommended for testing Apps that integrate with other systems.
- Not recommended if either your test code (in MTA) or your software code (in Studio Pro) is subject to lots of changes, because these will result in Construction Errors.

## Updating tests

[Adapting a large test configuration](../../mta/application-revision#adapt-test-suites-in-a-test-configuration-to-a-downloaded-application-revision) can take a lot of time, and if many changes are made between the current and next revision, chances are, you will end up with [Construction errors](../../mta/construction-error).
If this happens when you don't have time to fix these, after some time, the test becomes stale.

:::info
Note that when your test configuration contains a Construction error, you can still execute the test cases and test suites that do not contain errors.
:::

### Fix adapt resulting in construction errors

If your adapt results in a lot of [Construction errors](../../mta/construction-error), you can [restore a snapshot](../../mta/snapshot#restore-a-snapshot) of the Test Configuration, that was created before it was adapted.

After that, you can go to the adapt process, one [Test Suite](../../mta/test-suite) at the time:

1. Choose any *source* Test Configuration that you want to update to the latest revision. 
2. Create an empty, *target* Test Configuration with your name in the title, so your collaegues know not to touch it. 
3. Set the revision of the target to the latest revision.
4. Next, copy the first Test Suite from the source into the target.
5. MTA will *automatically* adapt the contents of the Test Suite in the target.
6. Fix [Construction errors](../../mta/construction-error) and update the Test Cases as a result of this adapt.
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

## Feedback?

Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 23 June 2026