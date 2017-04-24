import test from 'ava';
import { execFile } from 'child_process';
import fs from 'fs';
import glob from 'glob';

test('should display error message without argument', async t => {
  const error = await new Promise((resolve) => {
    execFile('./dist/cli.js', [], (error, stdout) => resolve(error));
  })
  t.true(/please specify target/.test(error));
});

test('should convert all schemas', async t => {
  const error = await new Promise((resolve) => {
    execFile('./dist/cli.js', ['./samples', '-O', '__test_output__'], (error, stdout) => resolve(error));
  })
  const files = glob.sync('./__test_output__/**/*.js');
  t.is(files[0], './__test_output__/dir1/dir2/json-schema-json-sample.js');
  t.is(files[1], './__test_output__/dir1/json-schema-yml-sample.js');
  t.is(files[2], './__test_output__/json-schema-yaml-sample.js');
});
