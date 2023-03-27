# Prepare for using MTA for the first time

## Purpose

This document describes step by step which actions need to be performed whenever MTA is going to be used for the first time.

This can be useful to prepare for a first time implementation, a deep dive, or an on-premise implementation.

## 1. Import the MTA Plugin module

*For each Mendix App to be tested in MTA, this action needs to be performed. *

Follow the steps described [here](import-plugin) to complete this action.

## 2. Enable microflow testing for page calls

*For each Mendix App to be tested in MTA, this action needs to be performed.  *

Follow the steps described [here](prepare-mendix-project) to complete this action.

## 3. Create an API key and PAT for your Mendix account

*This action needs to be performed by each Mendix developer who wishes to test their Mendix Apps in MTA.*

An API key and Personal Access Token (PAT) need to be created to make communication possible with MTA and the Mendix platform.<br/>Make sure to store both in a password manager after creation. 

Create your PAT and personal API key in your Mendix account. Go to:
- https://user-settings.mendix.com/link/developersettings
- Click "New token". Name it 'MTA Test'.
- Select only `mx:modelrepository:repo:read`
- Click "Create".
- Store it in the password manager so you don't lose it.
- Now click "Configure API Keys".
- Create a new API key. Description 'MTA Test'.
- Click "Generate API key".
- Store it in the password manager so you don't lose it.

Finally, follow [these steps](access-mendix-model) to finish the setup after MTA is up and running.


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 27 march 2023