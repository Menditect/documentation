---
sidebar_position: 2
---

# Host Playwright Browsers

## Purpose

This document describes the options to host the Playwright Browsers, which are required to run a Frontend Test with MTA.

:::note Playwright
Menditect uses the Playwright runtime to execute these frontend tests. 
Playwright is a library with which you can locate elements on a web page and execute actions on these elements.
See https://playwright.dev/java/ for the relevant documentation.
:::

## Run Playwright Locally

Playwright can be hosted locally with the Mendix App running in Studio Pro (e.g. localhost). For this, you only need to add the necessary jar file (driver-bundle.jar) to the /userlib folder of the Mendix project. 

The currently supported version is 1.53.0. Download it here:<br/>
https://repo1.maven.org/maven2/com/microsoft/playwright/driver-bundle/1.53.0/driver-bundle-1.53.0.jar

If this jar file is added to the Mendix project and the app is deployed to a local server that allows Playwright to load the dependencies it needs, this is sufficient for executing the Test Cases. Separate hosting of the Playwright browsers is not needed then. However, if the jar-file is not added and/or the local server is also limited in the access it requires for Playwright to load its dependencies, it is needed to host a Playwright server elsewhere. 

:::note Licensed Mendix node not supported
The Mendix Cloud currently does not allow for third party frameworks, like Playwright, to load its own dependencies. This is why it is currently not possible to use Frontend testing in MTA when the app under test is hosted in the Mendix Cloud.
:::

## Run Playwright in Browserstack

One alternative option to hosting Playwright locally is to use Browserstack. BrowserStack is a cloud-based testing platform that enables developers and QA teams to test applications across various browsers and devices. It offers native support for Playwright, allowing users to run automated end-to-end tests on real devices and browsers within its cloud infrastructure. 

Currently, using Browserstack is only supported if the Mendix App is running in the cloud. 
Local Testing is currently only supported if Playwright is also running locally.
[Local Testing with Browserstack](https://www.browserstack.com/docs/local-testing) will be supported in a future release of the Playwright Connector.

## Run Playwright in a Docker container 

This chapter describes the situation where the Test Application is started from Studio Pro, and Docker Desktop is running on the same machine. When running the Test Application in the cloud, the URL in the Navigate action in step 19 will be replaced by the Application URL in the cloud. When running Docker in the cloud, omit the steps to install Docker Desktop, and replace the command in step 9 by the one noted in https://playwright.dev/docs/docker#running-the-playwright-server.

1.	Install Docker Desktop https://www.docker.com/products/docker-desktop/.
2.	Although not always required by Docker, restart Windows.
3.	Start Studio Pro that will run the Test Application and connect to MTA. 
4.	Make sure the Connector and Mendix Frontend Testkit are imported.
5.	Check the playwright version that is being used by the Connector. 
This should be noted in the documentation in the Mendix Marketplace.
6.	Run the Test Application. Check MTA to see if it's connected.
7.	Run Docker Desktop. No need to sign-in, just click Skip.
8.	Run a command line prompt (cmd).
9.	Copy the command line noted here into a text editor (use the copy button): https://playwright.dev/docs/docker#network-configuration.
10.	Replace the two parts where the playwright version is denoted, by the playwright version in use by the Connector. Example:<br/>
`docker run --add-host=hostmachine:host-gateway -p 3000:3000 --rm --init -it --workdir /home/pwuser --user pwuser mcr.microsoft.com/playwright:v1.53.0-noble /bin/sh -c "npx -y playwright@1.53.0 run-server --port 3000 --host 0.0.0.0"`
11.	Copy and paste the command line in the prompt and press Enter.<br/>This will do three things:<br/>1. download the docker image containing the playwright server<br/>2. run this image in a virtualized Docker container<br/>3. make sure that the hostmachine can be reached from the container.
12.	Wait until it says `Listening on ws://0.0.0.0:3000/` in the prompt.
13.	To shutdown the locally running docker container simply press Ctrl+C in the prompt.

:::note Important note
You cannot navigate to `localhost`, because the localhost will point to inside the virtualized container. You have to navigate to http://hostmachine:8080 (assuming the Test Application is running on port 8080). This will only work if you correctly executed step 10.
:::

## Next step for Frontend Testing

[Connect Playwright to MTA](../connect-mta/connect-playwright-to-mta)

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 15 September 2025