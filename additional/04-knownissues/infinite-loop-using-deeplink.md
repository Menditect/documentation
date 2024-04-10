# Infinite loop when using deeplink

## Issue summary

When using a deeplink to share a Test Configuration /  Test Case / Test Run etc. combined with SAML SSO, you will run into an infinite redirect loop. 

This will only happen after logging in and logging out using SAML SSO.

For example:
- Login using SAML SSO
- Logout
- Paste the deeplink in the Address bar and click Go to in the browser, for example:
- `https://mta-menditect-9fo2p.mendixcloud.com/link/testconfiguration/208`

## Possible causes and resolutions

This is a known issue for the Deeplink module.

The best way is to first login using SAML SSO and then open the deeplink URL, instead of using the deeplink URL directly.