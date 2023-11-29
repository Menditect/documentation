# Configure MTA to use SAML SSO

## Definition

This document describes how to configure MTA to use SAML SSO to authenticate users logging into MTA, instead of using Local Accounts.

This document does *not* describe how to test an application using SSO authentication. Please read [this howto](test-without-local-account) for that.

## Enable SAML SSO
The SAML20 module, and the necessary dependency modules, have been imported into MTA. 

If you have a on-premises license, please follow the [run mta on premises](run-mta-on-premise#saml-sso) howto for SAML SSO first.

If Menditect is hosting MTA for you, please [contact support](mailto:support@menditect.com) to have it enabled. 


## Configure SAML SSO

The basic configuration for SAML SSO is the same for all Identity Providers and described in the Mendix documentation. The current location of the relevant documenation page is here: https://docs.mendix.com/appstore/modules/saml/

This configuration has to be done when logged in with the MTA Manager role in MTA.

Use this settings:

| IdP configuration                            |                                                                                         |
| -------------------------------------------- | --------------------------------------------------------------------------------------- |
| Alias                                        | *[Name your configuration]*                                                             |
| Response protocol binding                    | POST_BINDING                                                                            |
| Use AssertionConsumerService Concept         | No                                                                                      |
| Assertion consumer service index             | 0                                                                                       |
| Read IDP metadata from URL                   | No                                                                                      |
| Preferred entity descriptor                  | *[Will be filled automatically, after uploading the .xml file]*                         |
| Authentication context                       | *[Use default configuration]*                                                           |
| Identifying assertion type                   | Use Name ID                                                                             |
| Entity where the user is to be found         | Administration.Account                                                                  |
| Attribute where the user principal is stored | FullName                                                                                |
| Allow the module to create users             | Yes                                                                                     |
| Use Custom logic for user provisioning       | Yes                                                                                     |
| Custom microflow                             | SSOConfigModule.CustomUserProvisioning                                                  |
| Encryption settings                          | *[Choose your preference, uploading a keypair is not required to enable this setting.]* |


### Additional configuration 

The SAML20 module will create an Account if a user can be authenticated by the IdP. However, by default, the Account will have no UserRoles.

In order to have MTA assign the desired roles to created Accounts, you must configure your IdP to use assertion attributes.

The rules for that, are as follows:

```
- If there are Assertions in the AssertionAttributeList List with 'Keys' which contain 'MTA' and 'userrole'; 
- and the value is 'Tester', then assign 'Tester' role;
- and the value is 'MTAManager', then assign the 'MTAManager' role;
- and the value is 'CiCdApiUser', then assign the 'CiCdApiUser' role;
```


## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 29 November 2023

