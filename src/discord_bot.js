// Require Configs
const configTD = require('config').get('TargetDummy');
const configDiscord = require('config').get('Discord');

// Require Modules
const _ = require('lodash');

let Discord = null;

// create an instance of a Discord Client, and call it bot
try {
    Discord = require("discord.js");
} catch (e) {
    console.log(e.stack);
    console.log(process.version);
    console.log("Please run npm install and ensure it passes with no errors!");
    process.exit();
}
console.log("Starting DiscordBot\nNode version: " + process.version + "\nDiscord.js version: " + Discord.version);

const bot = new Discord.Client();


// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
bot.on('ready', () => {
    bot.user.setStatus("online", "td! help")
        .then(console.log('TargetDummy logged in! Serving in ' + bot.guilds.array().length + " servers"));

    let guild = bot.guilds.find("name", configDiscord.get('console.server'));

    if(guild.available) {
        // check if output channel exists
        let channel = guild.channels.find("name", configDiscord.get('console.channel'));

        if(_.isNull(channel)) {
            guild.createChannel(configDiscord.get('console.channel'), 'text')
                .then(
                    channel => {
                        console.log(`Created new channel ${channel.name}`);
                        channel.setTopic('TargetDummy output console...');
                        channel.sendMessage('TargetDummy channel created!');
                    }
                )
                .catch(console.error);
        } else {
            //channel.sendMessage('TargetDummy channel online');
        }
    }
});

// create an event listener for messages
bot.on('message', message => {
    // Return first element of message contant, check our a
    let prefixes = configTD.get("app.prefixes");

    console.log(message.content);

    // check against all prefixes first, to avoid doing more work
    if(!prefixes.indexOf(getFirstWord(message.content))) return;
});

bot.on("messageUpdate", (oldMessage, newMessage) => {
    //checkMessageForCommand(newMessage,true);
});

bot.on("disconnected", function () {

    console.log("Disconnected!");
    process.exit(1); //exit node.js with an error

});

// log our bot in
bot.login(process.env.DISCORD_API_TOKEN);

function getFirstWord(str) {
    if (str.indexOf(' ') === -1)
        return str;
    else
        return str.substr(0, str.indexOf(' '));
};