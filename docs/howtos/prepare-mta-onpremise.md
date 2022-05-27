# Prepare MTA for an on-premise installation

## Purpose

This document describes step by step which actions need to be performed whenever an MTA node is going to be implemented on another platform than the Mendix cloud.  

This could be any custom cloud environment like Clound Foundry or an on-premise installation. The main difference with hosting MTA on the Mendix cloud is that the client is responsible for managing the cloud platform.

## Import the MTA Plugin module

*For each Mendix App to be tested in MTA, this action needs to be performed. *

Follow the steps described [here](import-plugin) to complete this action.

## Create an MTA Plugin User 

*For each individual environment and for each Mendix App to be tested in MTA, this action needs to be performed. *

Open the environment that is going to be used as Test application, and login with a user role that has Create rights on Account (like an Administrator). Create a local user (not a web service user) with only the role 'MTAPluginUser'. Give the user a name, and note the Username and Password for later.

## Enable microflow testing for page calls

*For each Mendix App to be tested in MTA, this action needs to be performed.  *

Follow the steps described [here](prepare-mendix-project) to complete this action.

## Create an API key for your Mendix account

*This action needs to be performed by each Mendix developer who wishes to test their Mendix Apps in MTA.*

An API key needs to be created to make communication possible with MTA and the Mendix platform. Make sure to store the API key in a password manager after creation.
Follow the steps described on the Mendix documentation site to complete this action:
https://docs.mendix.com/developerportal/community-tools/mendix-profile/#api-key


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 27 may 2022