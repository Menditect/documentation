# Test and debug locally

It is possible to have MTA test against a Mendix App running on a developer's computer instead of in the cloud. This means that the Mendix runtime is using the trial license that expires after a couple hours, so this should not be used for a long period of time. However to avoid waiting for a deployment to complete, it can be very efficient to test during development. 


## Test before deploying

To test locally:
1. Make sure the computer is connected to the internet, and not behind a proxy or VPN. 
2. Download a (third party) tunnel sofware tool, like [cloudflared](https://github.com/cloudflare/cloudflared/releases) or [ngrok](https://ngrok.com/download). These need to be executed in an (elevated) command prompt window. Please consult the respective tool documentation to learn the syntax. 
3. Open the Mendix modeler and commit the changes to teamserver
4. Run the project
5. Open the homepage (using View App button in Mendix), make sure that a Plugin User exists
6. Copy the URL of the homepage (for instance, "http://localhost:8080")
7. Configure and run the tunnel sofware with that URL
8. Copy the resulting URL that the tunnel software has created to the clipboard (<code>Ctrl+C</code>) 
9. Open MTA
10. Navigate to the Test Configuration and select the "Test applications" tab.
11. Use the <i class="fa fa-exchange"></i> button to switch environments.
12. Select the MendixCloud environment that you are currently using, for instance "Acceptance".
13. Create a new Custom environment, and name it accordingly, for instance "Local [your name]".
14. Paste the URL in the URL box and fill in the Plugin User's credentials.
15. Hit Save; you will now see <i class="fa fa-pencil"></i> button next to the revision number, allowing you to select the revision that you just created.

## Test before committing

Although not recommended, in some situations it is even possible to test before committing the changes to teamserver. 

What needs to be the same, when testing without committing changes?
- Microflow names
- Microflow input parameters
- Microflow output parameters (return value)
- Entity names
- Entity attributes and data types
- Enumerations and Constants

What can be different?
- The content of microflows
- Anything frontend, like Pages, Widgets, Snippets and Nanoflows
- Entity access

## Debugging

It is possible to create breakpoints to debug locally. Or, connect the debugger to a cloud environment. This can be useful to discover where in a Microflow a Test Run failed. Remember that MTA will wait until the app is continued, but the Test Case will stop executing after the set Execution time-out is hit. 

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 13 may 2022