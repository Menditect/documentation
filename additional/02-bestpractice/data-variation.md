# Data variation 

## Add only relevant attributes

Only add relevant attributes to datavariation. Attributes that have the same value for all variations can be specified in the test case. This keeps the datavariation pages clean.


### Wrong:

Consider the situation of booking a rental car, where the booking price is determined by only a couple attribute's values.

![Do not add all attributes](bp_dv_01_wrong.png)

### Right:

![Add only relevant attributes](bp_dv_01_right.png)




## Vary with only one value

Only change a single attribute value per variation. Add more variations if you need to cover more situations. If you get an unexpected test run result, you will know which attribute caused it.

### Wrong:

Consider the situation of booking a rental car, where the booking price is determined by only a couple attribute's values.

![Do not vary more than 1 attribute](bp_dv_02_wrong.png)

### Right:

![Vary only 1 attribute](bp_dv_02_right.png)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 1 March 2024