const { writeFileSync, readFileSync } = require('fs');
const path = require('path');
const { Spinner } = require('cli-spinner');
const glob = require('glob');
const yaml = require('js-yaml');
const mkdirp = require('mkdirp');
const { parseSchema } = require('json-schema-to-flow-type');

const SCHEMA_FILES = './samples/**/*.+(json|yml|yaml)';
const OUT = './__gen__';

const spinner = new Spinner('processing... %s');
spinner.setSpinnerString('⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏');
spinner.start();

const files = glob.sync(SCHEMA_FILES);

files.forEach(file => {
  try {
    const schema = readFileSync(file, 'utf8')
    const extname = path.extname(file);
    const json = extname === '.yml' || extname === '.yaml'
      ? yaml.safeLoad(schema)
      : JSON.parse(schema);
    const dir = path.join(OUT, path.dirname(file));
    mkdirp.sync(dir);
    const flow = '/* @flow */\n\n' + parseSchema(json);
    const filename = path.join(dir, path.basename(file, extname)) + '.js';
    writeFileSync(filename, flow);
  } catch (e) {
    console.error(e);
    spinner.stop(true);
    process.exit(1);
  }
});

spinner.stop(true);

