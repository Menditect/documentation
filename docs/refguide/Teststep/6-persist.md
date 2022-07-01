# Persist

## Definition

With this [../Teststep](.) type, all the objects are stored to the database that are created or changed by a Create or Change Object Teststep in the same Test Case. Also, all the objects that are marked as deleted, are deleted. 

## Actions

### Add a Persist Teststep

To add a Persist step, select Persist as the Action when creating an Object Teststep. Note that when selecting Persist, the name of the Teststep will be set to "Persist" automatically.

Make sure to always insert the Persist Teststep after the Teststeps that perform other Object actions. 

A persist step will delete all the objects that are marked as deleted after the previous Persist Teststep in the same Test Case, or since the start of the Test Case. 

It is possible to have multiple Persist Teststeps in the same Test Case. However, if there is a technical error while executing the Test Case, the entire transaction for that Test Case is always rolled back.

_Note_: an object that is created by a microflow (as the output parameter), is not committed to the database by a Persist action. To achieve this, put a [Change Object](change) Teststep before the Persist Teststep, that changes the object created by the Microflow Teststep (without actually changing any of the members).

When encountering problems, also consult the [Known issues](../../knownissues/persist-step-fails).