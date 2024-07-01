# Optimize Coverage Goals

## Definition

The goal of Coverage Goals is to specify which microflows should be executed when running some collection of tests, and thereby getting 100 % coverage.

This document helps with setting up [Coverage Goals](../../../coverage-goal) and creating [Exclude Filters](../../../coverage-exclude-filter) to achieve this.

## Choose the best Coverage Goal level

[Coverage Goals](../../../coverage-goal) are available on the [Test Configuration](../../../test-configuration) and [Application](../../../application) levels. 

You can choose to use either, or both execution levels. In most situations, using only one level is preferred.

### Application level

Application Coverage Goals are preferred if there are **multiple Test Configurations** for one Application that is tested in MTA. For each Test Run that was executed the latest revision known in MTA, the calculated coverage will be joined, resulting in a higher coverage than just one Test Run.

This will be the case in most situations, where MTA Testers have chosen to distribute tests over multiple Test Configurations, for instance one Test Configuration for Unit Tests, and one Test Configuration for Process Tests. 

### Test Configuration level

Test Configuration Coverage Goals are preferred if there is **only one Test Configuration** for one Application that is tested in MTA. Joining calculated coverage from multiple Test Configurations is not necessary then, but you will be able to leave out Test Suites from your coverage calculation.

But there may be other reasons to use Test Configuration Coverage Goals (besides Application Coverage Goals). For instance, if there are actually two Test Configurations where one is a copy of the other, or one runs on a different [Application Revision](../../../application-revision) than the other, but the two are otherwise very similar. Another aspect is that a Test Configuration can test multiple Applications. An integration test may be a reason to wait with applying another Application Revision, making it difficult to join the calculated coverage with Test Runs from other Test Configurations. In that case, Test Configuration Coverage Goals are preferred over Application Coverage Goals.

## Optimize Exclude Filters and Exceptions

Exclude Filters and Exceptions use wildcards (\*) in the expression. 

A wildcard anywhere in the filter will be evaluated as "any text". This means that
-  `MyModule.*` will be interpreted as "all microflows in MyModule". 
-  `*.*` will be interpreted as "All microflows" and 
-  `*.VAL_*` will be interpreted as "All microflows starting with VAL_ ".
-  `*.val_*` will also be interpreted as "All microflows starting with VAL_ " (given the expression is interpreted case-insensitive).

If the Coverage Goal is to **exclude** only a couple microflows or modules, it is best to use an Exclude Filter, and an Exception won't be necessary.

If the Coverage Goal is to **include** only a couple microflows or modules, it is best to use the Exclude Filter `*.*`, and add Exceptions for each module and/or microflow that should be included.

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 29 March 2024