const Ajv = require('ajv');

// const baseSchema = require('../schemas/extension-package.json');
const mobileSchema = require('../schemas/extension-package-mobile.json');
const webSchema = require('../schemas/extension-package-web.json');

const mobileExample = require('./example-extension-mobile.json');
const webExample = require('./example-extension-web.json');

const ajv = new Ajv({schemaId: 'auto'});
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
// ajv.addSchema(baseSchema)

const mobileValidate = ajv.compile(mobileSchema);
const webValidate = ajv.compile(webSchema);

const mobileIsValid = mobileValidate(mobileExample);
const webIsValid = webValidate(webExample);

if (!mobileIsValid && webIsValid) {
  console.log(mobileValidate.errors);
} else if (!webIsValid) {
  console.log(webValidate.errors);
} else {
  console.log('VALID!');
}
