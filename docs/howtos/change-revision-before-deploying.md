# Change revision before deploying

If a new revision is deployed on a Test environment running on the Mendix cloud, MTA will detect that revision automatically. However, sometimes it may be useful to create Teststeps using changes in a Microflow or Entity, that don't yet exist on the Test environment. It is possible to achieve this, even if the revision containing the changes, is not yet deployed. In that scenario, it is necessary to create a Custom environment in MTA, pointing to the Test environment in the Mendix cloud. 

- Navigate to the Test Configuration and select the "Test applications" tab.
- Use the <i class="fa fa-exchange"></i> button to switch environments.
- Select the MendixCloud environment that you are currently using, for instance "Acceptance".
- Copy the URL to the clipboard (<code>Ctrl+C</code>).
- Create a new Custom environment, and name it accordingly, for instance "Custom Acceptance". 
- Paste the URL in the URL box and fill in the Plugin User's credentials.
- Hit Save; you will now see <i class="fa fa-pencil"></i> button next to the revision number, allowing you to select a different revision.


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 21 april 2022