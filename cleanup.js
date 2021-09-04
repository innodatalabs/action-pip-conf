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
    await fs.unlink(path.dirname(PIP_CONFIG_LOCATION));
})().catch(error => core.setFailed(error.message));
