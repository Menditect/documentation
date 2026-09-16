---
sidebar_position: 4
---

# MTA MCP Tools

:::info
This file is AI generated.
:::

## AddTestCaseVariationItem

Enables data variations on a test case or includes a test step attribute, parameter, or assertion object as a variation item in the test case data variation matrix.
• PREREQUISITES: TestCaseKey must exist when enabling variations, or ObjectKey must exist for the specified variation item type.
• RETURNS: Confirmation status string on success or an error message string.

## AddTestSuiteVariationItem

Enables data variations on a test suite or includes a test step attribute, parameter, or assertion object as a variation item in the test suite data variation matrix.
• PREREQUISITES: TestSuiteKey must exist when enabling variations, or ObjectKey must exist for the specified variation item type.
• RETURNS: Confirmation status string on success or an error message string.

## CreateAssertAttributeValueCompare

Creates an AssertAttributeValueCompare entity on an Object Action test step for a specified attribute.
• PREREQUISITES: TestStepKey and AttributeName must be provided, target test step must be an Object Action step (Create, Change, or Retrieve Object), attribute must exist on entity, assertion must not already exist, and parent TestConfiguration must be unlocked.
• RETURNS: Confirmation string "Assert attribute value compare has been created for teststep" on success, or an error message string.

## CreateAssertException

Creates an exception assertion on a specified test step to verify runtime exception behavior. • PREREQUISITES: TestStepKey must exist, test step must not already have an exception assertion, and parent TestConfiguration must be unlocked. • RETURNS: Confirmation string "Assert exception has been created for teststep" on success, or an error message string.

## CreateAssertMicroflowReturnValue

Creates a Microflow Return Value assertion on a Microflow Call test step.
• PREREQUISITES: TestStepKey, ComparisonOperator, and ActionFailedAssert must be provided, target test step must call a microflow that returns a primitive literal value, assertion must not already exist, and parent TestConfiguration must be unlocked.
• RETURNS: Confirmation string "Assert microflow return value compare has been created" on success, or an error message string.

## CreateAssertObjectCount

Creates an object count assertion on a specified test step to verify the number of returned or manipulated objects.
• PREREQUISITES: TestStepKey must exist, object count assertions must be allowed on the test step type, the test step must not already have an object count assertion, and parent TestConfiguration must be unlocked.
• RETURNS: Confirmation string ""Assert object count has been created for teststep"" on success, or an error message string.

## CreateAssertValidationFeedbackMessageCompare

Creates an assertion on a test case to compare validation feedback messages on a target entity attribute or association.
• PREREQUISITES: TestCaseKey, ModuleName, and EntityName must exist in the application revision, and parent TestConfiguration must be unlocked.
• RETURNS: Confirmation string "Assert validation feedback message compare has been created for test case" on success, or an error message string.

## CreateAssertValidationFeedbackMessageCount

Creates an assertion on a test case to verify the total count of validation feedback messages.
• PREREQUISITES: TestCaseKey must exist and parent TestConfiguration must be unlocked.
• RETURNS: Confirmation string "Assert validation feedback message count has been created for test case" on success, or an error message string.

## CreateExecutionUser

Creates a new execution user for a specified application and test configuration.
• PREREQUISITES: ApplicationKey and TestConfigurationKey must exist, TestConfiguration must be unlocked, and Username must be non-empty.
• RETURNS: String formatted as "ExecutionUserKey: `<Key>`" on success, or an error message string.

## CreateMicroflowCallTestStep

Creates a microflow call test step within a specified test case to execute a backend microflow.
• PREREQUISITES: TestCaseKey must exist, MicroflowQualifiedName must exist in the application revision model, and parent TestConfiguration must be unlocked.
• RETURNS: String formatted as "Teststep key: `<Key>`" on success, or an error message string.

## CreateObjectActionTestStep

Creates an object action test step (Create, Change, Retrieve, Delete, or Persist object) within a specified test case.
• PREREQUISITES: TestCaseKey must exist, ObjectAction and TestStepName must be provided, EntityQualifiedName must exist in model (if required by action), TestStepOutputKey must exist (for Change/Delete actions), and parent TestConfiguration must be unlocked.
• RETURNS: String formatted as "Teststep key: `<Key>`" on success, or an error message string.

## CreateSelectObjectForAssociation

Creates a SelectObjectForAssociation entity on an Object Action test step to enable setting, adding, removing, or clearing association values.
• PREREQUISITES: TestStepKey and AssociationQualifiedName must be provided, target test step must support associations (Create, Change, or Retrieve Object), association must exist in model, and parent TestConfiguration must be unlocked.
• RETURNS: JSON string containing details and key of the created SelectObjectForAssociation entity on success, or an error message string.

## CreateTestCase

Creates a new test case within a specified test suite.
• 
PREREQUISITES: TestSuiteKey, ApplicationKey, and ExecutionUserKey must exist, parent TestConfiguration must be unlocked, and TestCaseName must be non-empty.
• 
RETURNS: String formatted as "TestCaseKey: `<Key>`" on success, or an error message string.

## CreateTestCaseVariation

Creates a new data variation row for a specified test case by duplicating the baseline variation structure with empty values.
• PREREQUISITES: TestCaseKey must exist, have data variations enabled, and its parent TestConfiguration must be unlocked.
• RETURNS: Confirmation string indicating the created variation key on success, or an error message string if creation fails.

## CreateTestSuite

Creates a new test suite in a specified test configuration.
• PREREQUISITES: TestConfigurationKey must exist, TestConfiguration must be unlocked, ApplicationRevisions must be loaded, and Name must be non-empty.
• RETURNS: String formatted as "TestSuiteKey: `<Key>`" on success, or an error message string.

## CreateTestSuiteVariation

Creates a new data variation row for a specified test suite by duplicating the baseline variation structure with empty values.
• PREREQUISITES: TestSuiteKey must exist, have data variations enabled, and its parent TestConfiguration must be unlocked.
• RETURNS: Confirmation string indicating the created variation key on success, or an error message string if creation fails.

## EditAssertAttributeValueCompare

Edits expected values and comparison operators for an AssertAttributeValueCompare entity (Boolean, AutoNumber, DateTime, Decimal, Enumeration, HashString, Integer, Long, String, Range, or TrimString).
• PREREQUISITES: AssertAttributeValueCompareKey, EditAction, BooleanValue, and TrimStringValue must be provided, target entity must exist, and parent TestConfiguration must be unlocked.
• RETURNS: Confirmation string indicating the updated comparison setting on success, or an error message string.

## EditAssertException

Edits the properties of a specified exception assertion on a test step. • PREREQUISITES: AssertExceptionKey must exist, parent TestConfiguration must be unlocked, and EditAction must be given. • RETURNS: Confirmation status string on success or an error message string

## EditAssertMicroflowReturnValueCompare

Edits expected values and comparison operators for a Microflow Return Value assertion (Boolean, DateTime, Decimal, Enumeration, Integer/Long, String, Range, or TrimString).
• PREREQUISITES: AssertMicroflowReturnValueCompareKey and EditAction must be provided, target assertion must exist, and parent TestConfiguration must be unlocked.
• RETURNS: Confirmation string indicating the updated comparison value on success, or an error message string.

## EditAssertObjectCount

Edits the properties of a specified object count assertion on a test step.
• PREREQUISITES: AssertObjectCountKey must exist, parent TestConfiguration must be unlocked, and EditAction must be given.
• RETURNS: Confirmation status string on success or an error message string.

## EditAssertValidationFeedbackMessageCompare

Edits the properties of a specified validation feedback message comparison assertion.
• PREREQUISITES: AssertValidationFeedbackMessageCompareKey must exist, parent TestConfiguration must be unlocked, and EditAction must be given.
• RETURNS: Confirmation status string on success or an error message string.

## EditAssertValidationFeedbackMessageCount

Edits the properties of a specified validation feedback message count assertion.
• PREREQUISITES: AssertValidationFeedbackMessageCountKey must exist, parent TestConfiguration must be unlocked, and EditAction must be given.
• RETURNS: Confirmation status string on success or an error message string.

## EditAttributeValue

Edits teststep attribute values (includes/excludes attributes, sets literal Boolean/DateTime/Decimal/Enum/Integer/Long/String values, or sets scalar piping from a prior teststep output).
• PREREQUISITES: EditAction and BooleanValue must be provided, along with corresponding required keys (TestStepKey and AttributeName for IncludeAttribute; AttributeValueKey for Set/Exclude actions; TestStepOutputKey and TestStepOutputAttributeName for SetTestStepOutputForSelectValueForValue).
• RETURNS: Confirmation string indicating the updated attribute setting on success, or an error message string.

## EditAttributeValueFilter

Edits filter criteria for a Retrieve Object test step (includes/excludes filter attributes, sets filter operators, sets AutoNumber, Boolean, DateTime, Decimal, Enumeration, HashString, Integer, Long, String, Range, or scalar piping filter values).
• PREREQUISITES: EditAction must be provided, target test step must be a Retrieve Object step, along with corresponding required keys (TestStepKey and AttributeName for IncludeAttribute; AttributeValueKey for Set/Exclude actions; TestStepOutputKey and TestStepOutputAttributeName for SetTestStepOutputForSelectValueForValue).
• RETURNS: Confirmation string indicating the updated filter attribute setting on success, or an error message string.

## EditExecutionUser

Updates the username of an existing execution user.
• PREREQUISITES: ExecutionUserKey must exist, parent TestConfiguration must be unlocked, and Username must be non-empty.
• RETURNS: Confirmation string "Username has been successfully set" on success, or an error message string.

## EditMicroflowObjectParameter

Edits the object input selection for a microflow call parameter (sets teststep output, sets empty, or adds/removes inputs for list parameters).
• PREREQUISITES: SelectObjectForMicroflowParameterKey must exist, parent TestConfiguration must be unlocked, and EditAction must be given.
• RETURNS: Confirmation status string on success or an error message string.

## EditMicroflowParameterValue

Edits the primitive value or binds a teststep output for a microflow call parameter.
• PREREQUISITES: MicroflowParameterValueKey must exist, parent TestConfiguration must be unlocked, and EditAction must be given.
• RETURNS: Confirmation status string on success or an error message string.

## EditTestCase

Edits specifications and execution settings of a specified test case.
• PREREQUISITES: TestCaseKey must exist, parent TestConfiguration must be unlocked, and EditAction must be given.
• RETURNS: Confirmation string indicating the updated property or an error message string.

## EditTestCaseVariation

Edits the name or description of a specified test case data variation.
• PREREQUISITES: TestCaseVariationKey must exist, parent TestConfiguration must be unlocked, and EditAction must be given.
• RETURNS: Confirmation string indicating the updated property or an error message string.

## EditTestStep

Edits the execution settings, metadata, or highlight status of a specified test step.
• PREREQUISITES: TestStepKey must exist, parent TestConfiguration must be unlocked, and EditAction must be given.
• RETURNS: Confirmation status string on success or an error message string.

## EditTestStepAssociation

Edits association binding settings (set teststep output, set to empty, or set operation) for a SelectObjectForAssociation entity.
• PREREQUISITES: SelectObjectForAssociationKey and EditAction must be provided, target entity must exist, and parent TestConfiguration must be unlocked.
• RETURNS: Confirmation string indicating the updated association setting on success, or an error message string.

## EditTestStepRetrieve

Edits retrieve settings (retrieve option source, retrieve cardinality set, or test step) on a Retrieve Objects test step.
• PREREQUISITES: TestStepKey must exist, test step must be a Retrieve Objects step, parent TestConfiguration must be unlocked, and EditAction must be given.
• RETURNS: Confirmation status string on success or an error message string.

## EditTestSuite

Edits the name, description, or execution condition of a specified test suite.
• PREREQUISITES: TestSuiteKey must exist and parent TestConfiguration must be unlocked.
• RETURNS: Confirmation status string indicating the updated attribute or an error message string.

## EditTestSuiteVariation

Edits the name or description of a specified test suite data variation.
• PREREQUISITES: TestSuiteVariationKey must exist, parent TestConfiguration must be unlocked, and EditAction must be given.
• RETURNS: Confirmation string indicating the updated property or an error message string.

## ExecuteTest

[Asynchronous] Executes tests at the specified ExecutionLevel (TestConfiguration, TestSuite, or TestCase) in the background on an application instance.
• 
PREREQUISITES: ExecutionLevel and valid ApplicationInstanceToken must be provided, along with the corresponding key (TestConfigurationKey, TestSuiteKey, or TestCaseKey) matching the chosen level. 
• 
RETURNS: String containing TestRunKey and TestRunExecutionId of the initiated background execution, or an error message string.

## GenerateMicroflowCallTestStepLocatePage

Generates a "Locate Mendix Page" microflow call test step within a test case to locate a specific Mendix UI page by its qualified name and CSS class name during Playwright frontend testing.
• PREREQUISITES: TestCaseKey must exist, PageQualifiedName and PageClassName must match a page in the application revision model, and parent TestConfiguration must be unlocked.
• RETURNS: JSON string containing the generated test step details or an error message string.

## GenerateMicroflowCallTestStepLocateWidget

Generates a "Locate Widget" microflow call test step within a test case to locate a specific UI widget on a Mendix page during Playwright frontend testing.
• PREREQUISITES: TestCaseKey must exist, PageQualifiedName, PageClassName, and WidgetName must match a unique widget on the page in the application revision model, and parent TestConfiguration must be unlocked.
• RETURNS: JSON string containing the generated test step details or an error message string.

## GetAppModelData

[READ-ONLY] Retrieves Mendix app model metadata (pages and widgets) synchronized with MTA for a given application and test configuration.
• PREREQUISITES: TestConfigurationKey and ApplicationKey must exist and be active. When RetrieveAction is "RetrieveWidgetsByPage", PageQualifiedName is required.
• RETURNS: JSON array/object containing page definitions or widget structures, or an error message string if retrieval fails.

## GetApplicationDetails

[READ-ONLY] Retrieves application details by application name or Mendix project ID (AppId).
• PREREQUISITES: Either ApplicationName or AppId must be provided.
• RETURNS: JSON string containing application details or an error message string.

## GetExecutionPlan

[READ-ONLY] Retrieves the details of a saved execution plan by its key for the current user.
• PREREQUISITES: ExecutionPlanKey must exist and belong to the current user.
• RETURNS: JSON string containing execution plan details or an error message string.

## GetExecutionUsers

[READ-ONLY] Retrieves execution users associated with a specific test configuration and application.
• PREREQUISITES: TestConfigurationKey and ApplicationKey must exist, and TestConfiguration must be active.
• RETURNS: JSON string containing the list of execution users or an error message string.

## GetTestCaseDetails

Retrieves full details, specifications, and execution settings for a specified test case.
• PREREQUISITES: TestCaseKey must exist.
• RETURNS: JSON object string containing test case properties (name, objective, preconditions, expected result, security, execution settings), or an error message string if retrieval fails.

## GetTestConfigurationDetails

Retrieves complete details, settings, and metadata of a specified test configuration.
• PREREQUISITES: TestConfigurationKey must exist, and the TestConfiguration must be active and unlocked.
• RETURNS: JSON object string containing test configuration specifications and properties, or an error message string if retrieval fails.

## GetTestRunResults

Retrieves execution status, logs, and detailed result for a completed or running test run by its execution ID.
• PREREQUISITES: TestRunExecutionId must exist and be valid.
• RETURNS: JSON object string containing test run status, assertion outcomes, step execution logs, or an error message string if retrieval fails.

## GetTestSuiteDetails

[READ-ONLY] Retrieves the full details of a specific test suite by its key.
• PREREQUISITES: TestSuiteKey must exist and parent TestConfiguration must be unlocked.
• RETURNS: JSON string containing test suite details or an error message string.

## GetTeststepDetails

Retrieves detailed configuration and parameters of a specified test step, dynamically resolving Object Actions (Create, Change, Retrieve, Delete, Persist) and Microflow Call definitions.
• PREREQUISITES: TestStepKey must exist, and the encompassing TestConfiguration must be unlocked.
• RETURNS: JSON object string containing complete test step parameters and associations, or an error message string if retrieval fails.

## MoveTestStepToOtherTestCase

Moves a specified test step from its current test case to a target test case within the same test suite. • PREREQUISITES: TestStepKey and TargetTestCaseKey must exist, target test case must be a valid candidate, and parent TestConfiguration must be unlocked. • RETURNS: Confirmation string "The teststep is moved to the target test case" on success, or an error message string.

## SaveExecutionPlan

Saves an execution plan content string to the database associated with the current user.
• PREREQUISITES: ExecutionPlan parameter must be non-empty and an active user session must exist.
• RETURNS: JSON string containing the created execution plan key (e.g. {\"key\": 102}) on success, or an error message string.

## SetSequenceOfTestCase

Reorders a test case (through TestCaseKey) within its test suite by placing it after the specified test case before (through the TestCaseBeforeKey).
• 
PREREQUISITES: TestCaseKey must exist, parent TestConfiguration must be unlocked, and TestCaseBeforeKey (if provided) must belong to the same TestSuite.If the TestCaseBeforeKey is set to empty or 0, then the test case (TestCaseKey) will be placed as the first in its test suite
• 
RETURNS: Confirmation string "The sequence is set for test case" on success, or an error message string.

## SetSequenceOfTestStep

Sets the position and execution sequence of a test step within its test case by placing it directly before a specified target step.
• PREREQUISITES: TestStepKey must exist, TestStepBeforeKey must be 0 or exist within the same test case, and parent TestConfiguration must be unlocked.
• RETURNS: Confirmation string "The sequence is set for teststep" on success, or an error message string

## SetSequenceOfTestSuite

Reorders a test suite (through TestSuiteKey) within its test configuration by placing it after the specified test suite before (through TestSuiteBeforeKey).
• 
PREREQUISITES: TestSuiteKey must exist, parent TestConfiguration must be unlocked, and TestSuiteBeforeKey (if provided) must belong to the same TestConfiguration.If the TestSuiteBeforeKey is set to empty or 0, then the test suite (TestSuiteKey) will be placed as the first in its test configuration
• 
RETURNS: Confirmation string "The sequence is set for test suit" on success, or an error message string.

## SetTestStepOutputForSelectObjectForChange

Binds a prior test step output as the target object to be modified by a Change Object test step.
• PREREQUISITES: SelectObjectForChangeKey and TestStepOutputKey must exist, the output step must output a compatible entity type, and parent TestConfiguration must be unlocked.
• RETURNS: Confirmation string "TeststepOutput has been set for SelectObjectForChange" on success, or an error message string.

## SetTestStepOutputForSelectObjectForDelete

Binds a prior test step output as the target object to be removed by a Delete Object test step.
• PREREQUISITES: SelectObjectForDeleteKey and TestStepOutputKey must exist, the output step must output a compatible entity type, and parent TestConfiguration must be unlocked.
• RETURNS: Confirmation string "TeststepOutput has been set for SelectObjectForDelete" on success, or an error message string.
