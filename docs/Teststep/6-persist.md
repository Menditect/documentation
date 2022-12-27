# Persist

## Definition

With this [Teststep](../Teststep), objects are stored to the database or permanently deleted. Objects are stored from a Create or Change Object Teststep that is positioned previously in the same Test Case. Objects are deleted from a Delete Object Teststep that is positioned previously in the same Test Case.

## Actions

### Add a Persist Teststep

To add a Persist step, select Persist as the Action when creating a Teststep. Note that when selecting Persist, the name of the Teststep will be set to "Persist" automatically.

Make sure to always insert the Persist Teststep after the Teststeps that perform other Object actions. 

A persist step will store all objects created or changed after the previous Persist Teststep in the same Test Case, or since the start of the Test Case. 

A persist step will delete all objects that are marked as deleted after the previous Persist Teststep in the same Test Case, or since the start of the Test Case. 

It is possible to have multiple Persist Teststeps in the same Test Case. However, if there is a technical error while executing the Test Case, the entire transaction for that Test Case is always rolled back.

_Note_: an object that is created by a microflow (as the output parameter), is not committed to the database by a Persist action. To achieve this, put a [Change Object](change) Teststep before the Persist Teststep, that changes the object created by the Microflow Teststep (without actually changing any of the members).

When encountering problems, also consult the [Known issues](../../additional/knownissues/persist-step-fails).