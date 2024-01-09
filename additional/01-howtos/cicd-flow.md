# CI/CD flow

## Definition

This document describes the order of MTA's [API endpoints](../../api), to optimize an automated pipeline, that is used to execute a test in MTA. 

## Flow

### 1: get testconfigurations

If you know the Key of the Test Configuration that you want to execute, you can skip this step.

If you only know the Name, use this step to get a list of Test Configurations. This way you can filter the list by name so you can determine the Key of the Test Configuration.

### 2: get testsuites

If you want to execute the whole Test Configuration, you can skip this step.

If you want to execute a single Test Suite, and you know the Key of the Test Suite that you want to execute, you can skip this step.

If you want to execute a single Test Suite, and you only know the Name, use this step to get a list of Test Suites in the Test Configuration. This way you can filter the list by name so you can determine the Key of the Test Suite.

If you want to execute a single Test Case, also use this step to determine the Key of the Test Suite that the Test Case is in.

### 3: get testcases

If you want to execute a single Test Case, and you know the Key of the Test Case that you want to execute, you can skip this step.

If you want to execute a single Test Case, and you only know the Name, use this step to get a list of Test Cases in the Test Suite. This way you can filter the list by name so you can determine the Key of the Test Case.

### 4: get applications

If you know the Key of the Application(s) in use of the Test Configuration that you want to execute, you can skip this step.

Otherwise use this step to get a list of Application Keys in use of the Test Configuration.

### 5: get application instances

If you know the Key of the Application Instance(s) that you want to execute the Test Configuration on, you can skip this step.

Otherwise use this step to get a list of Application Instance Keys for each Application Key from the previous step.

### 6: get revisions



## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 25 september 2023