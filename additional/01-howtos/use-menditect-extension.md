# Use Menditect Extension in Studio Pro

:::caution
The Menditect Call Hierarchy extension is currently in BETA.
:::

## Howto

This document describes how to import and configure the [Menditect Call Hierarchy extension](https://marketplace.mendix.com/link/component/xxx), so you can use it in Mendix Studio Pro.

The Menditect Call Hierarchy extension can be used on a microflow in Mendix Studio Pro, to recusively view all submicroflows that are called from that microflow in a tree structure.

The Menditect Call Hierarchy extension can also be used to [generate a microflow test](generate-test#test-a-microflow), and view [test cases](../../test-case) where that microflow is executed.

### Prerequisites

...

### Installation

...

### Microflow Call Hierarchy function

...

### MTA functions

...

### Known limitations

- Viewing a very large microflow call hierarchy will crash the extension webviewer tab in Studio Pro.
- Excluded microflows are not viewed differently than included microflows.
- If the project contains errors, the call hierarchy is not reliable.
- Using SSO for the credentials that are used to login to MTA is not supported.
- The credentials that are used to login to MTA are stored in the Windows Account settings. This is done to prevent having to manually login everytime the extension is used.
- A large number of user sessions can appear in MTA when using the extension intensively. 

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 3 April 2024