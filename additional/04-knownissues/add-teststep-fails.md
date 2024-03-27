# Add teststep fails

## Issue summary

While adding a teststep, MTA seems to freeze, or even shuts down and restarts. 

The teststep is of type Create / Change / Retrieve. 

The freezing starts either:
- after selecting the Entity, or
- after selecting a teststep to fill an Association, or
- after selecting a teststep as source for "Retrieve by previous teststep".

## Possible causes and resolutions

### Too many attributes or associations

There are too many attributes or associations in the Entity. Generally, more than 200 is problematic on an S21 resource pack. 

**Resolution**

The least expensive solution is to create a microflow in the Mendix model that Creates / Changes / Retrieves the object, and [call that microflow in MTA](../../Teststep/microflow).

An alternative is to upgrade the Mendix resource pack. See Mendix docs: https://docs.mendix.com/developerportal/deploy/mendix-cloud-deploy/#resource-pack.
