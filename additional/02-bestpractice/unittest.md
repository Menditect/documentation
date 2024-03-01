# Unit testing

## Definition

A unit test in MTA is a test that executes a single microflow, and creates the necessary data in order to do so.

## Characteristics

- A unit test generally does not leave traces in the Mendix app being tested, which means the result cannot be visually inspected there.
- Unit tests are a direct prove that your code works.
- Unit tests provide immediate time savings.
- Unit tests are quick to build into MTA and thus a way to get to know MTA.
- If defects are found with unit tests, this is a signal that defects will also exist at the process level, and these defects can be solved faster than if they were found with a process test.

## Structure

- Maintaining unit tests will have a different frequency than maintaining process tests.
- Create one test configuration per Mendix application, for all unit tests, and only for unit tests.
- Create one test suite per Mendix model module.
- Create one test case per microflow to be tested.

## Tips and tricks

- Have unit tests created, executed and maintained by **the same Mendix developer** that created the microflow.
- Start building unit tests of **validation flows, rules and calculation microflows**.
- Build a unit test **for every defect found**.
- During product refinement, determine whether a feature is **unit testable**.
- **Test without security.** 
- **Prevent reliance on the database.** Do not retrieve objects from database, and do not commit objects to database.
- **Include asserts** to have MTA check the results automatically instead of manual inspecting them. 
- **Use datavariation on relevant attributes**, to achieve higher test coverage. 

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 1 March 2024