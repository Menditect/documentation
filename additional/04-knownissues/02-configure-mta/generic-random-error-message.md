# Generic random error message

## Issue summary

While navigating through MTA, a "generic" error message is sometimes shown. The occurence may feel random.

The message could be:

 `An error occured, please contact your system administrator`

 Or:

 `A connection error occurred, please try again later.`

If this generic message is shown only once while navigating, and does not come back when after you retry the same action, it is nothing to worry about.

The cause is that the [XAS interface](https://apidocs.rnd.mendix.com/4/client/xas.html) between the browser and the Mendix server did not respond in time because too much data was being processed. 

#### Resolutions

Processing large amounts of data in MTA becomes troublesome when running MTA on an instance which resources are inadequate. There are too many user sessions and/or too many requests to handle. The solution is to buy more resources for your cloud node. 

For Mendix resource packs, see https://docs.mendix.com/developerportal/deploy/mendix-cloud-deploy/#resource-pack. When using MTA intensively with more than 2 users, an M21 resource pack or larger is recommended.

