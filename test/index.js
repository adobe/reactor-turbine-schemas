const Ajv = require('ajv');

// const baseSchema = require('../schemas/extension-package.json');
const mobileSchema = require('../schemas/extension-package-mobile.json');
const webSchema = require('../schemas/extension-package-web.json');
const containerSchema = require('../schemas/container.json');

const mobileExample = require('./example-extension-mobile.json');
const webExample = require('./example-extension-web.json');
const containerExample = require('./example-container.json');

const ajv = new Ajv({schemaId: 'auto'});
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
// ajv.addSchema(baseSchema)

const mobileValidate = ajv.compile(mobileSchema);
const webValidate = ajv.compile(webSchema);
const containerValidate = ajv.compile(containerSchema);

const mobileIsValid = mobileValidate(mobileExample);
const webIsValid = webValidate(webExample);
const containerIsValid = containerValidate(containerExample);

if (!mobileIsValid) {
  console.log('Mobile schema is invalid! ', mobileValidate.errors);
}
if (!webIsValid) {
  console.log('Web schema is invalid!', webValidate.errors);
}
if (!containerIsValid) {
  console.log('Container schema is invalid!', containerValidate.errors);
}
if (mobileIsValid && webIsValid && containerIsValid) {
  console.log('VALID!');
}
