const path = require('path');
const pkt = require('../package.json');
const cp = require('child_process');

const { peerDependencies } = pkt;

const peersNames = Object.entries(peerDependencies)
  .map(d => d.join('@'))
  .join(' ');

const rootFolder = path.join(__dirname, '..');

cp.spawn('yarn', [
  'add',
  '-P',
  '--no-lockfile',
  peersNames
], {
  cwd: rootFolder,
  stdio: 'inherit',
  env: process.env,
});
