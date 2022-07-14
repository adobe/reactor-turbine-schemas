# @adobe/reactor-turbine-schemas

Adobe Experience Platform Tags is a next-generation tag management solution enabling simplified deployment of marketing technologies. For more information regarding Tags, please visit our [product website](http://www.adobe.com/enterprise/cloud-platform/launch.html).

This project is a collection of schemas based on the [JSON Schema vocabulary](https://json-schema.org/) that are used for validation of JSON objects within Tags. The schemas are not intended to be used directly by consumers; they are used by the Tags system and extension development tools.

## Available Schemas

### container.json

A schema describing the "container" output for [Turbine (Web)](https://github.com/adobe/reactor-turbine) (the Experience Platform Tags rule engine). The container object contains configuration specific to a Platform Tags property. Turbine uses the container as instruction on how to behave when running on a client website.

### extension-package-web.json

A schema describing the `extension.json` found in a web extension package. The `extension.json` file describes the contents of an extension. More information can be found on the [extension development guide](https://experienceleague.adobe.com/docs/launch/using/extension-dev/overview.html#extension-dev).

### extension-package-mobile.json

A schema describing the `extension.json` found in a mobile extension package. The `extension.json` file describes the contents of an extension.

## Contributing

Contributions are welcomed! Read the [Contributing Guide](CONTRIBUTING.md) for more information.

To get started:

1. Install [node.js](https://nodejs.org/).
3. Clone the repository.
4. After navigating into the project directory, install project dependencies by running `npm install`.

### Scripts

To run tests a single time, run the following command:

`npm run test`

## Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
