# Websocket error message

## Issue summary

While running a Mendix Application locally on a computer from Mendix Studio Pro it sometimes fails to connect to MTA. Additionally, when trying to connect to MTA using the MTA Plugin, an error message about a Websocket connection keeps appearing in the Console.

## Possible causes and resolutions

The MTA Plugin uses a websocket connection to connect to MTA:<br/>
https://docs.mendix.com/refguide/websockets-in-runtime/

On some business networks, such connections are blocked by network settings or firewall settings that disallow the websocket (ws or wss) protocol. 
The connection to MTA is created on port 443; please make sure this port allows access for the websocket protocol.

One way to test if the websocket connection is actively being blocked on the business network, is to try to connect to MTA from outside the business network, such as from home.

Please contact your network administrator if this issue persists.