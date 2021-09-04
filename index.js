const core = require('@actions/core');
const { promises: fs, constants } = require('fs');
const path = require('path');
const os = require('os');


const PIP_CONFIG_LOCATION = (() => {
    if (process.platform === 'win32') {
        return path.join(homedir, 'AppData', 'Roaming', 'pip', 'pip.ini')
    } else {
        return path.join(homedir, '.config', 'pip', 'pip.conf');
    }
})();


(async () => {
    const pipConfig = core.getInput('pip-conf');
    await fs.mkdir(path.dirname(PIP_CONFIG_LOCATION), { recursive: true });
    await fs.writeFile(PIP_CONFIG_LOCATION, pipConfig, { encoding: 'utf-8' });
})().catch(error => core.setFailed(error.message));
