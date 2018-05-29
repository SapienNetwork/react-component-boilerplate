const ora = require('ora');
const path = require('path');
const pkt = require('../package.json');
const cp = require('child_process');
var executioner = require('executioner');

const { peerDependencies } = pkt;

const rootFolder = path.join(__dirname, '..');

const spinner = ora('Installing Peers as Dev...');
spinner.start();

const peersNames = Object.entries(peerDependencies)
  .map(d => d.join('@'))
  .join(' ');

  executioner(`yarn add --peer --no-lockfile ${peersNames}`, {}, (error, result) => {
    spinner.stop();
    if (error) {
      console.error('Unable to install peerDependencies', error);
      process.exit(1);
      return;
    }
  });
