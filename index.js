const { writeFileSync } = require('fs');
const { Spinner } = require('cli-spinner');
const glob = require('glob');
const mkdirp = require('mkdirp');
const { parseSchema } = require('json-schema-to-flow-type');
const schema = require('./samples/json-schema-sample01');
const SCHEMA_FILES = './samples/**/*.+(json|yml|yaml)';

const spinner = new Spinner('[Processing].. %s');
spinner.setSpinnerString('|/-\\');
spinner.start();

const files = glob.sync(SCHEMA_FILES);

console.log(files)

const flow = parseSchema(schema);
writeFileSync('./flow.js', flow);
spinner.stop(true);