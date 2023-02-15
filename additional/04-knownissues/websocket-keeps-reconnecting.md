# Websocket keeps reconnecting 

## Issue summary

This is a very specific issue for Menditect customers with an "On premise" or "Bring your own cloud" license, where MTA is not hosted and managed by Menditect in the Mendix cloud, but by the customer.
When hosting MTA in a private cloud, like Google Cloud Platform (GCP) or Amazon Web Services (AWS), system administrators may notice that the Websocket communication between a Mendix App under test and MTA keeps dropping and reconnecting.
Also Test Automators in MTA will notice that the connection to their Mendix App under test appears stable but whenever they execute a test it will fail with an error. 

## Possible causes and resolutions

The issue is due to a default timeout setting on the container orchestration software like Kubernetes. The result will be that any connection will be dropped after a certain amount of time like for example 30 or 60 seconds.

The resolution is to extend the WebSocket Gateway Default Timeout for Mendix Private Cloud. How or where to adjust this setting depends on the software being used.

Some more information is provided below.


## Additional resources

### Mendix Private Cloud
— [Kubernetes - NGINX Ingress - Websocket](https://kubernetes.github.io/ingress-nginx/user-guide/miscellaneous/#websockets)
- [Endpoint (network) configuration](https://docs.mendix.com/developerportal/deploy/private-cloud-cluster/#advanced-network-settings)
- [Editing the CR](https://docs.mendix.com/developerportal/deploy/private-cloud-operator/#edit-cr)

### Google Cloud Platform (GCP)
- [Ingress Configuration - Create Backend Config](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-configuration#create_backendconfig)
- [Ingress Configuration - Creating a Service](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-configuration#create_service)
- [Ingress Configuration - Backend service timeout](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-configuration#timeout)
- [Ingress Configuration - Adding BackendConfig](https://cloud.google.com/kubernetes-engine/docs/how-to/ingress-configuration#same_backendconfig_for_all_service_ports)