# Websocket keeps reconnecting 

## Issue summary

This is an issue that occurs specifically when Menditect customers have an "On premise" or "Bring your own cloud" license, where MTA is not hosted and managed by Menditect in the Mendix cloud, but by the customer.
When hosting MTA in a private cloud, like Google Cloud Platform (GCP) or Amazon Web Services (AWS), system administrators may notice that the Websocket communication between a Mendix App under test and MTA keeps dropping and reconnecting.
Also Testers in MTA will notice that the connection to their Mendix App under test appears stable but whenever they execute a test it will fail with an error. 

:::info Kubernetes
We have noticed that Mendix also started hosting environments on Kubernetes. Currently, hosting MTA on Kubernetes on the Mendix Cloud also results in the same issue with Websockets reconnecting. This can result in Test Runs stopping halfway because MTA no longer receives results from the Plugin. Mendix is analyzing the issue. Until they have a solution, please make sure to use Cloud Foundry environments instead.
:::

## Possible causes and resolutions

The issue is due to a default timeout setting on the container orchestration software like Kubernetes. The result will be that any connection will be dropped after a certain amount of time like for example 30 or 60 seconds.
The resolution is to extend this setting (the WebSocket Gateway Default Timeout for Mendix Private Cloud). 
How or where to adjust this setting depends on the software being used.

**Resolution**

The setting should be adjusted to an adequate time period, higher than the highest expected execution time of a Test Run. 
For example: one hour (3600 sec).

Some more information is provided below.


## Additional resources

### Mendix Private Cloud
- [Kubernetes - NGINX Ingress - Websocket](https://kubernetes.github.io/ingress-nginx/user-guide/miscellaneous/#websockets)
- [Endpoint (network) configuration](https://docs.mendix.com/developerportal/deploy/private-cloud-cluster/#advanced-network-settings)
- [Editing the CR](https://docs.mendix.com/developerportal/deploy/private-cloud-operator/#edit-cr)

### Google Cloud Platform (GCP)
- [Ingress Configuration - Create Backend Config](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-configuration#create_backendconfig)
- [Ingress Configuration - Creating a Service](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-configuration#create_service)
- [Ingress Configuration - Backend service timeout](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-configuration#timeout)
- [Ingress Configuration - Adding BackendConfig](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-configuration#same_backendconfig_for_all_service_ports)