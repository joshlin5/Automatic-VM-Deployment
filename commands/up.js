const chalk = require('chalk');

const VBoxProvider = require('../lib/provider/vbox');
const VirtualizationFrameworkProvider = require('../lib/provider/vf');

exports.command = 'up';
exports.desc = 'Provision and configure a new development environment';
exports.builder = yargs => {
    yargs.options({
        force: {
            alias: 'f',
            describe: 'Force the old VM to be deleted when provisioning',
            default: false,
            type: 'boolean'
        }
    });
};


exports.handler = async argv => {
    const { force, processor } = argv;

    let provider = new VBoxProvider()

    if( processor === "Arm64" ) {
        provider = new VirtualizationFrameworkProvider();
    }

    let name = `V`;
    console.log(chalk.keyword('pink')(`Bringing up machine ${name}`));

    try {
        //await provider.up(force);
        let ip = await provider._macToIP("f2:d8:8f:cb:ee:6a");

        console.log(ip);
        
    } catch (err) {
        console.log( chalk.red( err.message ) );
    }

};