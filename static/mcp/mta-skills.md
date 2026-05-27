### MTA Testing Common Knowledge

**CRITICAL**: Load this skill before working with any MTA (Mendix Test Automation) tools.

#### Core Workflow Overview
The standard MTA testing workflow follows this hierarchy:
1. **Application** (identified by ApplicationKey).
2. **Test Configuration** (contains execution users and test suites).
3. **Test Suite** (groups related test cases).
4. **Test Case** (individual test with steps).
5. **Test Steps** (actions: create objects, call microflows, assertions).

#### Always Ask, Never Assume Principle

**CRITICAL USER INTERACTION RULES:**

**When Test Configuration is Not Specified:**
* Call GetTestConfigurationsForApplicationKey.
* **STOP** and present options to user.
* **ASK**: "Which test configuration would you like to use: [list configurations]?".
* **WAIT** for explicit user choice.
* Never default to a configuration without confirmation.

**When Test Suite Might Exist:**
* Call GetTestSuites for the selected test configuration.
* Review all returned suites.
* If any match user intent: **STOP**.
* **ASK**: "I found existing test suite(s): [names]. Would you like to: 1. Add tests to existing suite: [name] 2. Create a new test suite".
* **WAIT** for explicit user choice.
* Only create new suite after user confirmation.

**When Creating New Test Suite:**
* Call GetTestSuites for the selected test configuration.
* Review all returned suites.
* If user confirms creating new suite: **STOP**.
* **ASK**: "Where would you like to place the new test suite: 1. At the beginning (first in sequence) 2. After existing suite: [list all suites with their sequence numbers]".
* **WAIT** for explicit user choice.
* Use appropriate TestSuiteBeforeKey based on user selection ("" for beginning, or Key of suite to place after).


**When Test Case Might Exist:**
* Call GetTestCases for the selected test suite.
* Carefully review all test cases.
* If any match or relate to user request: **STOP**.
* **ASK**: "I found existing test case(s): [names with descriptions]. Would you like to: 1. Update existing test [name] 2. Add variations to existing test 3. Create a new test case".
* **WAIT** for explicit user choice.
* Never modify or create without confirmation.

**When Creating New Test Case:**
* **STOP IMMEDIATELY** - do NOT call CreateTestCase yet
* Call GetTestCases for the selected test suite first
* Review all returned test cases with their sequence numbers
* **ASK USER**: "Where would you like to place the new test case: 1. At the beginning (first in sequence) 2. After existing test case: [list all test cases with their sequence numbers]"
* **WAIT** for explicit user choice
* Only AFTER user confirms: call CreateTestCase with appropriate TestCaseBeforeKey ("" for beginning, or Key of chosen test case)
* CRITICAL: Never call CreateTestCase without asking about placement first

**Execution User Selection:**
* Call GetExecutionUsers first.
* Check if "MxAdmin" exists:
    * **If MxAdmin exists**: ASK "I found execution user "MxAdmin". Would you like to: 1. Use MxAdmin (recommended) 2. Use a different existing user: [list others] 3. Create a new execution user".
    * **If MxAdmin does not exist**: ASK "Which execution user would you like to use: 1. Use existing: [list all users] 2. Create a new execution user".
* **STOP and WAIT** for user choice.
* If user chooses new: call CreateExecutionUser, then use returned key.
* Never auto-select without explicit confirmation.

#### Test Case Creation Workflow

**Standard Creation Sequence (No Data Variations):**
1. **Select/Create Test Configuration** (validate with user if not specified).
2. **Select/Create Test Suite** (validate with user if similar exists).
3. **MANDATORY CHECKPOINT**: Call GetTestCases to review existing tests
4. **MANDATORY: Ask Placement** - STOP and ask user where to place new test case
5. **WAIT for placement confirmation** before proceeding
6. **Validate Execution User** (see Execution User Selection above).
7. **Create Test Case** (CreateTestCase with confirmed TestCaseBeforeKey).
8. **MANDATORY: Validate Variation Table Format in Specifications** - count columns and verify separator row 
9. **Set Specifications** (SetTestCaseSpecifications).
    * **STOP** after setting specifications.
    * Present to user for validation.
    * **ASK**: "Please review these specifications. Should I proceed with creating test steps?".
    * **WAIT** for confirmation.
10. **Create Test Steps** (after user approval).
11. **Synchronize Documentation** Follow Documentation Synchronization Protocol
12. **Execute and Verify** (if requested).

**CRITICAL: Specifications Validation Step:**
After calling SetTestCaseSpecifications, you MUST:
1. Display the created specifications in clear, readable format.
2. Explicitly ask for approval before proceeding.
3. **STOP - do not call any test step creation tools**.
4. **WAIT** for user confirmation.
5. Only proceed to test steps after explicit approval.
This prevents investing time in detailed test steps if specifications need adjustment.

Here is the text converted into clean Markdown format without any icons:

---

## Documentation Synchronization Protocol

**CRITICAL: This protocol is MANDATORY after ANY test modification. NO EXCEPTIONS.**

### When This Protocol Applies

This protocol MUST be triggered automatically after ANY of these actions:
- `DuplicateTestCaseDataVariation` - adding new variations
- `SetAttributeIntegerValue`, `SetAttributeDecimalValue`, `SetAttributeStringValue`, `SetAttributeEnumerationValue` - changing attribute values
- `AddAttributeValueAsVariationItem` - making attributes configurable per variation
- `AddTestCaseVariationItemAssertMicroflowReturnValue` - making assertions configurable per variation
- `CreateTestStepCreateObject`, `CreateMicroflowCallTstp`, `CreateAssertMicroflowReturnValue` - adding test steps to existing test
- Any modification to existing test structure

### Required Workflow (Execute Automatically)

When you modify a test, you MUST immediately:

1. **Read Current Specifications**: Call GetTestCases to retrieve current documentation
2. **Analyze Differences**: 
Compare actual test structure vs. documented specifications:
- Count variations: Does documentation match actual count?
- Check values: Do documented values match actual attribute values?
- Verify assertions: Do documented expected results match actual assertions?
- Review test steps: Do documented steps match actual test steps?

3. **Present Differences to User** (MANDATORY FORMAT):

3. **Present Differences to User**: Show clear comparison: 
   * CURRENT DOCUMENTATION shows: [what specifications say] 
   * ACTUAL TEST has: [what test actually contains] 
   * DIFFERENCES: [list specific mismatches]
4. **STOP and ASK**: "The test and documentation don not match. Would you like to:
   1. Update documentation to match the test
   2. Update the test to match the documentation
   3. Keep both as-is"

5. **WAIT** for explicit user choice before proceeding

6. **Never automatically update** - only update after user selects option 1

### Exception Cases

**Only skip this protocol when:**
- Creating a brand new test from scratch (documentation is set initially)
- User explicitly says "update documentation" or "keep documentation in sync" in their request

**Never skip when:**
- Modifying existing test (even if user does not mention documentation)
- Adding/removing variations
- Changing any test values or structure

### Self-Check Questions (Ask Before Proceeding)

After modifying a test, ask yourself:
- ☐ Did I just modify an existing test?
- ☐ Did I call GetTestCases to read current specifications?
- ☐ Did I compare actual test vs documented specifications?
- ☐ Did I present a clear CURRENT vs ACTUAL comparison to the user?
- ☐ Did I STOP and offer 3 options?
- ☐ Did I WAIT for user his explicit choice?

If you answered NO to any question, you violated the protocol.

### Common Violations (DO NOT DO THIS)

** WRONG - Asking without detection:**
*Violation: Never asked user first, did not read current specs, did not present comparison*

** WRONG - Updating automatically:**
*Violation: Updated documentation without user approval*

** WRONG - Skipping the protocol:**
*Violation: Did not check documentation at all*

** CORRECT - Following protocol:**



### Why This Protocol Exists

- **Test = Source of Truth**: The actual test structure is what executes
- **Documentation = Communication**: Specifications communicate intent to humans
- **Mismatch = Confusion**: When they diverge, users waste time investigating discrepancies
- **User Choice = Control**: Only the user knows whether the change was intentional

### Integration with Other Workflows

- **After "Create Test Steps"**: Before reporting completion, check documentation sync
- **After "Adding Variations to Existing Tests"**: MANDATORY sync check
- **After "Variation Duplication"**: Check documentation immediately
- **After "Setting Values"**: If values differ from specs, trigger protocol

---


#### Data Variations Workflow

**When to Use Data Variations:**
Use data variations for data-driven testing when:
* Same test logic applies to multiple input combinations.
* Testing boundary values, edge cases, null values.
* Multiple scenarios with different expected results.

**Creation Sequence (With Data Variations):**
1. Follow steps 1-6 from Standard Creation Sequence.
2. **Enable Data Variations** (EnableTestCaseDataVariations).
3. **Create Test Steps** (these become templates for all variations).
4. **Add Variation Items** (AddAttributeValueAsVariationItem, AddTestCaseVariationItemAssertMicroflowReturnValue).
5. **Create Additional Variations** (DuplicateTestCaseDataVariation).
6. **Configure Each Variation**: Set name (TestCaseDataVariationName), Set description (TestCaseDataVariationDescription), and Set values using appropriate SetAttribute*Value tools.
7. **Execute and Verify**.
8. **Synchronize Documentation** Follow Documentation Synchronization Protocol

##### Variation Table Format in Specifications

**CRITICAL REQUIREMENTS** for data variation tables in specifications:

**Structure:**
* COLUMNS = Individual test case variations (VAR1, VAR2, VAR3...).
* ROWS = Input parameters and assertions in EXECUTION ORDER.
* Maximum 8 columns per table (1 label column + 7 test case columns).
* For >7 variations, create multiple tables, always repeating the label column.

**CORRECT Table Format:**

| Step | #1-Diesel | #2-Petrol | #3-Zero |
| :--- | :--- | :--- | :--- |
| CarSize.FreeKm | 100 | 100 | 0 |
| Car.Fuel | Diesel | Petrol | Diesel |
| Assert Return | 120 | 100 | 0 |

Code: Variations are in COLUMNS, parameters/assertions are in ROWS

**WRONG Format (Do NOT Use):**

| Test Case | CarSize.FreeKm | Car.Fuel | Assert Return |
| :--- | :--- | :--- | :--- |
| #1-Diesel | 100 | Diesel | 120 |
| #2-Petrol | 100 | Petrol | 100 |
| #3-Zero | 0 | Diesel | 0 |

Code: This is INCORRECT - test cases are in rows instead of columns

**Pre-Check Before Setting Specifications:**
Before calling SetTestCaseSpecifications with data variations, verify:
1. Are my variations arranged as COLUMNS (horizontal)?
2. Are my input parameters and assertions arranged as ROWS (vertical)?
3. Does the first column contain step labels, and subsequent columns contain variation names?
Count total columns in header row (including Step/label column)
4. Count separator cells - must EXACTLY match header column count
5. Example check: 
   - Header: | Step | #1-Var | #2-Var | #3-Var | = 4 columns
   - Separator MUST be: |---|---|---|---| = 4 cells
   - NOT: |---|---|---| = 3 cells 


**CRITICAL: Table Separator Row Formatting**  

The markdown table separator row MUST have the EXACT same number of cells as the header row.

**CORRECT:**
| Step | #1-Var | #2-Var | #3-Var |
|---|---|---|---|
| Attribute | val1 | val2 | val3 |

(4 header columns = 4 separator cells)

**INCORRECT:**
| Step | #1-Var | #2-Var | #3-Var |
|---|---|---|
| Attribute | val1 | val2 | val3 |

(4 header columns but only 3 separator cells - table will not render!)

**Rule**: Count your header columns (including the Step/label column), then ensure the separator row has exactly that many `|---|` segments.

**Multiple Tables Example (>7 Variations):**
If you have more than 7 variations, split into multiple tables keeping the same row labels:

Table 1:

| Step | #1-Var | #2-Var | #3-Var | #4-Var | #5-Var | #6-Var | #7-Var |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Attribute1 | val1 | val2 | val3 | val4 | val5 | val6 | val7 |
| Assert | exp1 | exp2 | exp3 | exp4 | exp5 | exp6 | exp7 |

Code

Table 2:

| Step | #8-Var | #9-Var | #10-Var |
| :--- | :--- | :--- | :--- |
| Attribute1 | val8 | val9 | val10 |
| Assert | exp8 | exp9 | exp10 |

###### Critical: Verify Data Variation Values After Creation
**MANDATORY VERIFICATION STEP:** After creating all data variations and setting their values, you MUST:
1. **Call GetTestCaseDataVariationsDetails** to retrieve the complete variation structure.
2. **Verify each variation** has the correct values for:
    * All attribute values (integers, decimals, strings, enumerations, etc.)
    * All assertion expected values
3. **If any values are incorrect or missing:**
    * Identify the specific AttributeValueKeys or AssertMicroflowReturnValueCompareKeys that need correction.
    * Call the appropriate Set*Value tools to fix them.
4. **Call GetIncludedAttributeValuesTeststep** (if needed) to verify enumeration values are properly set, as they may not show detailed values in GetTestCaseDataVariationsDetails.

**Common Issues to Check:**
1. **Inherited Values from Duplication:**
    * When duplicating variations, ALL values are copied from the source.
    * Values that should differ between variations must be explicitly set for EACH variation.
    * Do not assume values changed just because you called Set* once - you must call it for each variation his AttributeValueKey.
2. **Enumeration Values:**
    * Verify enumeration values are set correctly for each variation.
    * Empty enumerations should show no EVLE_EnumerationValue in GetIncludedAttributeValuesTeststep.
    * Non-empty enumerations should show the correct Value (e.g., "Diesel", "Petrol", "Other").
3. **Assertion Values:**
    * Each variation should have its own AssertMicroflowReturnValueCompare with the correct expected value.
    * Verify ValueDecimal, ValueInteger, ValueString, or EnumerationValue matches the specification.
4. **Integer/Decimal Attributes:**
    * Verify ValueInteger or ValueDecimal matches the specification for each variation.
    * Check boundary values carefully (0, negative numbers, minimums, maximums).

**Verification Workflow:**
After setting all variation values:
* Call GetTestCaseDataVariationsDetails
* For each variation in TCVT_TestCaseVariations:
    a. Check ATVL_AttributeValues for correct ValueInteger, ValueDecimal, ValueString
    b. Check AMRC_AssertMcfwReturnValueCompares for correct ValueDecimal, ValueInteger, etc.
* If enumeration attributes exist, call GetIncludedAttributeValuesTeststep
* Compare actual values against specification table
* If discrepancies are found: Identify the Key values that need correction, call the appropriate Set* tools with correct keys, and re-verify with GetTestCaseDataVariationsDetails

**Example Verification:**
Specification says:

| Step | #1-Diesel | #2-Petrol | #3-Zero |
|---|---|---|---|
| CarSize.FreeKm | 100 | 100 | 0 |
| Car.Fuel | Diesel | Petrol | (empty) |
| Assert Return | 120 | 100 | 0 |

After GetTestCaseDataVariationsDetails, verify:
* Variation 1: FreeKm=100, Fuel=Diesel, Assert=120
* Variation 2: FreeKm=100, Fuel=Petrol, Assert=100
* Variation 3: FreeKm=0, Fuel=(empty), Assert=0

If Variation 3 shows FreeKm=100 (inherited from duplication), you must:
1. Find the AttributeValueKey for FreeKm in Variation 3
2. Call SetAttributeIntegerValue with that Key and value 0
3. Re-verify

**NEVER assume values are correct without verification. Always check before reporting completion.**

#### Working with Existing Test Cases

**Adding Variations to Existing Tests:**
**CRITICAL**: Before duplicating or modifying existing test structure:
1. Call GetTestCaseDataVariationsDetails to understand current structure.
2. Present current variations to user.
3. **ASK**: "Would you like to: 1. Add new variations to this test 2. Modify existing variations 3. Create a separate test case".
4. **WAIT** for confirmation.
5. **Never modify existing test structure without explicit approval**.
6. **Synchronize Documentation** Follow Documentation Synchronization Protocol

**Variation Duplication and NULL Values:**
**Creating NULL/EMPTY Variations:**
When duplicating a variation to create one with NULL values:
1. Call DuplicateTestCaseDataVariation (creates copy with all values).
2. Update name and description for the new variation.
3. **For attributes that should be NULL:**
    * Do NOT call any Set*Value tool for those attributes.
    * System automatically treats unset values as NULL/empty.
4. **For attributes that should have specific values:** Call appropriate SetAttribute*Value tool.

*Example*: Duplicate VAR1 (Age=25, Name="John") to create VAR2 (Age=NULL, Name="John") by duplicating, setting the name, keeping the string, and explicitly NOT setting the integer value for Age.

**CRITICAL LIMITATION: Cannot Unset Inherited Values**
**Problem**: When you duplicate a variation, most attribute values are COPIED and cannot be unset to NULL.
**Affected Data Types**: Integer/Long, Decimal, DateTime (when using SetAttributeDateTimeValue), CurrentDateTime setting.
**Workarounds**:
1. Create variations from scratch instead of duplicating.
2. Inform user this is a current limitation.
3. Suggest manual clearing in MTA UI.
4. For DateTime: Use SetAttributeDateTimeValue with specific date to override CurrentDateTime.

**Can Be Unset:** String (set to empty string "") and Enumeration (set to "" (empty string)).



#### Test Step Sequencing

**CRITICAL Sequencing Rule:**
When creating multiple test steps in sequence, you MUST:
1. Create first step with provided TestStepBeforeKey.
2. **Capture the returned Key from response**.
3. **Use that captured Key as TestStepBeforeKey for next step**.
4. Repeat: always use Key from previous step as TestStepBeforeKey for next.

*First Test Step in Test Case:* To create the first test step, set TestStepBeforeKey to empty string "".

#### Test Step Types and Usage

**CreateTestStepCreateObject**
**Purpose**: Create NEW test data objects that do not exist yet.
**Use When**: Setting up test data before calling microflow, Creating objects to pass as parameters, Building test scenario prerequisites.
**DO NOT Use For**: Retrieving objects after microflow calls, Changing existing objects, Re-fetching objects for assertion.
**If User Needs Object Verification**: Inform them that object attribute verification after microflow execution is not yet available, and only microflow return value assertions are supported.

**Setting Associations on Created Objects**
REQUIRED SEQUENCE when creating object with associations:
1. CreateTestStepCreateObject (returns TestStepOutputKey).
2. CreateSelectObjectForAssociation (returns SelectObjectForAssociationKey).
3. **MANDATORY**: SetTestStepOutputForSelectObjectForAssociation.
4. **Optional**: SetOperationOfSelectObjectForAssociation (if not using default "set").
**Never skip step 3 - the association is not functional without it**.

**CreateMicroflowCallTstp**
**Purpose**: Call a microflow as part of test execution.
**After Creation**: If microflow has object parameters, connect them using SetTestStepOutForSelectObjectForMicroflowParameter, and use returned TestStepOutputKey to reference microflow output in assertions.

**CreateAssertMicroflowReturnValue**
**Purpose**: Verify microflow return values.
**Workflow**:
1. Create assertion with appropriate comparison operator.
2. Set action on failure (ContinueTestRun or StopTestRun).
3. **MANDATORY**: Set expected value using appropriate tool (SetIntegerLongValueAssertMicroflowReturnValue, SetDecimalAssertMicroflowReturnValue, SetEnumerationValueAssertMicroflowReturnValue).

**Comparison Operators**: Single value (Equals, NotEquals, GreaterThan, LessThan), Range (Range, NotRange), String (Contains, NotContains).

**Assertions in Data Variations**:
1. Create assertion first.
2. Call AddTestCaseVariationItemAssertMicroflowReturnValue.
3. Set different expected values per variation using appropriate Set*AssertMicroflowReturnValue tool.

#### Attribute Value Management

**Setting Values Without Data Variations**
**For EMPTY values:**
* Integer/Long, Decimal, DateTime, CurrentDateTime: Do NOT call their respective SetAttribute* tools.
* Enumeration: Call SetAttributeEnumerationValue with "" (empty string)
* String: Call SetAttributeStringValue with "" (empty string).

**Setting Values With Data Variations**
**General Pattern:**
1. Call SetAttribute*Value once per variation that needs a specific value.
2. For variations needing NULL: Do NOT call the Set tool (if never set before).
3. For duplicated variations with unwanted values: See "Cannot Unset Inherited Values" limitation above.

**Special Case: CurrentDateTime**
**Behavior**: Sets attribute to current date/time at test RUN time (not creation time), is dynamic, and is useful for "now" timestamps.
**In Data Variations**: Inherited when duplicating variation, cannot be unset to NULL in duplicated variation, but can be overridden by calling SetAttributeDateTimeValue with a specific date.

#### Test Execution

**Running Tests**
**CRITICAL**: ExecuteTestConfiguration is ASYNC.
* Call this tool ONLY ONCE per request.
* DO NOT call in parallel with other tools.
* Wait for completion before subsequent calls.
* Calling multiple times terminates in-progress executions.

**Retrieving Results**
Use RetrieveTestRunResults with the TestRunExecutionId returned from execution.
**Results Include**: Overall execution status, Per-test-case results, Per-variation results, Failure reasons, Execution times, and Summary statistics.

#### Naming Conventions

**Test Case Variation Names**
Format: [key characteristic]-[scenario type] (e.g., Diesel-Happy, Null-CarSize). Keep short as they are displayed in test results. Remove any pre- or postfixes that do not follow this format when calling TestCaseDataVariationName


**Test Case Variation Descriptions**
Format: [Entity].[Attribute]=[value], [Entity2].[Attribute2]=[value]. Expected: [outcome].

#### Safety Rules

**CRITICAL Preconditions for Modification**
Before calling ANY tool that creates or modifies test structure:
1. Verify user explicitly confirmed this action.
2. If working with existing tests without confirmation: **STOP and ASK**.
3. Never assume user intent when alternatives exist.

**Operations Requiring User Approval**: Enabling data variations on existing test case, Duplicating variations, Adding variation items, Creating test steps on existing test case, Modifying test case specifications.

#### Common Patterns

**Pattern 1: Simple Test Without Variations**
Workflow involves getting configurations, suites, cases, and users while presenting options and gaining approval before creating the Test Case and setting specifications. After approval, create object steps, microflow call steps, and assertions.

**Pattern 2: Data-Driven Test With Variations**
Similar to Pattern 1, but after specification approval, variations are enabled, template test steps created, and variation items are duplicated and configured across scenarios.

**Pattern 3: Adding Variations to Existing Test**
Locate test -> Review current variations structure -> **STOP** and present to user -> ASK to add or create new -> Wait for confirmation -> Duplicate, configure, repeat. -> Synchronize Documentation

#### Error Handling and Limitations

**When Operations Are Not Supported**
If user requests something not currently supported:
* Clearly explain the limitation.
* Suggest available alternatives.
* Offer to implement what IS possible.

**Enumeration Values**
**CRITICAL**: Use actual enumeration value names, NOT captions. For empty enumeration: Use "" (empty string).

#### Best Practices

**Specification Detail Level**
Set specifications detailed enough that someone could build the test case without access to the Mendix model. Include all input values, associations, expected behavior, and preconditions.

**Test Organization**
Group related tests in the same test suite, use descriptive test case names, document expected vs actual in descriptions, and keep test steps focused and minimal.

**Performance Considerations**
Batch similar operations when possible, create execution users once and reuse, and consider test execution order when setting up test data.