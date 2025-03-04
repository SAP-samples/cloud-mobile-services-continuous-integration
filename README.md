## Deprecation Notice

This public repository is read-only and no longer maintained.

![](https://img.shields.io/badge/STATUS-NOT%20CURRENTLY%20MAINTAINED-red.svg?longCache=true&style=flat)

---
# SAP Mobile Services Continuous Integration Examples

[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/cloud-mobile-services-continuous-integration)](https://api.reuse.software/info/github.com/SAP-samples/cloud-mobile-services-continuous-integration)

Sample projects and workflow configuration for tools and SDKs shipped available with SAP Mobile Services. Please follow either of these guides to learn more:

1. [CI Best Practices with SAP: BTP SDK for Android](https://blogs.sap.com/2020/07/02/continuous-integration-ci-best-practices-with-sap-cloud-platform-sdk-for-android/)
1. [CI Best Practices with SAP: Custom Fiori Client](https://blogs.sap.com/2020/07/08/continuous-integration-ci-best-practices-with-sap-custom-fiori-client)
    * Note: Currently Android only
1. [Previous Series on Jenkins CI with SAP BTP SKD for iOS](https://blogs.sap.com/2020/06/15/continuous-integration-ci-best-practices-with-sap-cloud-platform-sdk-for-ios/)
## Requirements

1. You are familiar with [SAP Mobile Services](https://help.sap.com/doc/f53c64b93e5140918d676b927a3cd65b/Cloud/en-US/docs-en/index.html) and its features.
1. You have gone through [the tutorials](https://developers.sap.com/tutorial-navigator.html?tag=topic:mobile) to learn how to install tools such as the SAP SDK for Android Wizard on your desktop.
1. These samples build on top of the [Repository-Based Shipment Channel](https://help.sap.com/viewer/product/RBSC/Cloud/en-US). Please make sure that you meet the [documented prerequisites](https://help.sap.com/viewer/0a64be17478d4f5ba45d14ab62b0d74c/Cloud/en-US/896168db683a4115b885faa0718e5f20.html) and have a [technical user](https://help.sap.com/viewer/0a64be17478d4f5ba45d14ab62b0d74c/Cloud/en-US/7e83dfc309834942b441fc2106c5b7f5.html) ready for accessing SAP-provided dependencies and tools.

## Download and Installation

Fork this repository or create your own using the [sample Github Workflows](.github/workflows), then follow the respective configuration guide for the tool or SDK of your choice.

### License and Copyright Compliance Checks

* Requires any version of Python and `virtualenv`: `pip install virtualenv --user`
* Run `npm install` to set up the [Reuse tool](https://github.com/fsfe/reuse-tool)
* Run `npm run reuse:lint` to verify compliance

## How to Obtain Support

Feel free to ask questions and to provide feedback in the [issue tracker](/issues).

## To-Do

## License

Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.
