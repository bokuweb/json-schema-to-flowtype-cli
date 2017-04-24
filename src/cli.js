#!/usr/bin/env node

/* @flow */

const meow = require('meow');
const path = require('path');
const generate = require('./');

if (!process.argv[2]) {
  console.error('please specify target directory.');
  console.error('e.g.: $ json-schema-to-flowtype /path/to/target-dir');
  process.exit(1);
}

const cli = meow(`
  Usage
    $ json-schema-to-flowtype /path/to/target-dir -O /path/to/output-dir
  Options
    -O, --outputDir specify output directory.
`, {
    alias: {
      O: 'outputDir',
    },
  });

generate({
  targetDir: process.argv[2],
  outputDir: cli.flags.outputDir
    ? cli.flags.outputDir
    : process.argv[2],
});