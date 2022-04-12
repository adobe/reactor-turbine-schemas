/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const Ajv = require("ajv-draft-04")
const addAJVFormats = require("ajv-formats")

// const baseSchema = require('../schemas/extension-package.json');
const edgeSchema = require('../schemas/extension-package-edge.json');
const mobileSchema = require('../schemas/extension-package-mobile.json');
const webSchema = require('../schemas/extension-package-web.json');
const containerSchema = require('../schemas/container.json');

const edgeExample = require('./example-extension-edge.json');
const mobileExample = require('./example-extension-mobile.json');
const webExample = require('./example-extension-web.json');
const containerExample = require('./example-container.json');

const ajv = new Ajv({
  schemaId: 'auto',
  strict: false
});
addAJVFormats(ajv);
// ajv.addSchema(baseSchema)

const edgeValidate = ajv.compile(edgeSchema);
const mobileValidate = ajv.compile(mobileSchema);
const webValidate = ajv.compile(webSchema);
const containerValidate = ajv.compile(containerSchema);

const edgeIsValid = edgeValidate(edgeExample);
const mobileIsValid = mobileValidate(mobileExample);
const webIsValid = webValidate(webExample);
const containerIsValid = containerValidate(containerExample);

if (!edgeIsValid) {
  console.log('Edge schema is invalid! ', edgeValidate.errors);
}
if (!mobileIsValid) {
  console.log('Mobile schema is invalid! ', mobileValidate.errors);
}
if (!webIsValid) {
  console.log('Web schema is invalid!', webValidate.errors);
}
if (!containerIsValid) {
  console.log('Container schema is invalid!', containerValidate.errors);
}
if (edgeIsValid && mobileIsValid && webIsValid && containerIsValid) {
  console.log('VALID!');
  process.exit(0);
}

process.exit(1);
