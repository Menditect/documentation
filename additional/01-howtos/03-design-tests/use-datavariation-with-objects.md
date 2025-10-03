# Use Datavariation to test (non-)Empty Objects

The [Datavariation](../../../datavariation) feature only allows for adding Attribute Values or Asserts as [Datavariation Item Rows](../../../datavariation-item-row). 

If the requirement is to vary the amount of Objects between variations, or pass `Empty` in one variation, it is required to use a workaround.

This example retrieves one object in the first variation, and `Empty` in the second. It passes that object as a Microflow parameter:
- [Add a Teststep that retrieves the output of an existing Teststep](../../../Teststep/retrieve#retrieve-from-former-teststep). 
- [Include an Attribute Filter](../../../Teststep/retrieve#include-or-exclude-an-attribute-filter) on an Attribute that can be used to drive the amount of objects retrieved.
- Add the Atribute to a Datavariation.
- In the respective Datavariation page, choose an attribute value for one [column](../../../datavariation-column) that results in 1 object retrieved.
- Add a variation, and choose an attribute value that results in `Empty` being retrieved.
- Add the [Microflow Teststep](../../../Teststep/microflow) and fill the parameter with the output of the Teststep that was just created.

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 26 September 2025