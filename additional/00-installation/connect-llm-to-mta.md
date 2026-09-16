---
sidebar_position: 4
---

# Connect an LLM to MTA

## Purpose

This document describes how to connect any LLM (AI agentic conversational tool) to the MTA MCP Server.

If you specifically want to connect Mendix Maia, checkout the Mendix documentation at: https://docs.mendix.com/refguide/maia-mcp/

## Prerequisites

- Make sure that the [MTA Plugin](/Tools/mta-plugin) module is [imported and configured](import-plugin).

## Prepare MTA

- Login as [Service Account Manager](/mta/account#service-account-manager) and create a new [Service Account](/mta/account#service-account).
- Make sure to enable the `Call MCP primitive tools` scope.
- Add a new [Session token](/mta/account#session-token) and make sure to copy it into a password manager so you don't loose it.

## Setup MCP Connection

- Open the configuration or edit the configuration file (for example, `mcp_config.json`) for the LLM that you are using.
- Enter the URL to the MTA MCP Server, typically https://your-mta-installation.mendixcloud.com/primitivetools/mcp. 
- Make sure the URL to the MTA MCP Server ends with `/primitivetools/mcp`
- Enter the Authorization bearer token (session token) that you created above.
- When the connection is succesful, you should see some indication of this, including a list of MCP tools that are enabled.

## Loading MCP Skills

Loading the Skill files can be done by importing the Menditect agentic test skills module from https://marketplace.mendix.com/link/component/305457 into your Mendix App, or by cloning the Agentic Test Skills Github repository. Follow the instructions here: https://github.com/Menditect/agentic-test-skills#setup--usage-options

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 15 September 2026