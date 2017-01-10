/* Eventually we may want to run a standalone application that does not
 require Discord support. For now it loads this by default. Any app
 instance context will be called directly from the DiscordBot.
 */
const Discord = require('./discord_bot');
const logo = require('figlet');

// Constants
const name = process.env.npm_package_name;
const version = process.env.npm_package_version;

logo("TargetDummy", {
        font: 'Doom',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    },
    function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
    console.log("Welcome to...");
    console.log(data);
    console.log("Package Name: " + name);
    console.log("Package Version: " + version);
});