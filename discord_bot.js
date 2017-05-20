// Require Configs
const configApp = require('config').get('app');
const configDiscord = require('config').get('discord');

// Require Module Libraries
const _ = require('lodash');
const Yargs = require('yargs');
const ConsoleTargetDummy = require('taregetdummy-console');
const Commando = require('discord.js-commando');

const targetdummy = yargs
  .version(pkg.version)
  .help('help')
  .alias('help', 'h')
  .alias('version', 'v')
  .commandDir('cmds')
  .demandCommand(1)
  .argv;

// create an instance of a Commando Client, and initalize anything we need to
try {
  const bot = new Commando.Client({
    owner: configDiscord.owner
  });
  bot.registry

    //
    .registerGroups([])

    // Registers all built-in groups, commands, and argument types
    .registerDefaults()

    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'lib/discord/commands'));
} catch (e) {
  console.log(e.stack);
  console.log(process.version);
  console.log("Please run npm install and ensure it passes with no errors!");
  process.exit();
}
console.log("Starting DiscordBot\nNode version: " + process.version + "\nDiscord.js version: " + Discord.version);


// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
bot.on('ready', () => {
  bot.user.setStatus("online", "td! help")
    .then(console.log('TargetDummy logged in! Serving in ' + bot.guilds.array().length + " servers"));

  let guild = bot.guilds.find("name", configDiscord.get('console.server'));

  if (guild.available) {
    // check if output channel exists
    let channel = guild.channels.find("name", configDiscord.get('console.channel'));

    if (_.isNull(channel)) {
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
      channel.sendMessage('TargetDummy channel online');
    }
  }
});

// create an event listener for messages
bot.on('message', message => {
  // Return first element of message contant, check our a
  let prefixes = configApp.get("app.prefixes");

  console.log(message.content);

  // check against all prefixes first, to avoid doing more work
  if (!prefixes.indexOf(getFirstWord(message.content))) return;

  targetdummy.parse(message.content || '', context, (err, argv, output) => {
    if (err) logger.error(err.message)
    if (output) argv.respond(output)
  })
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