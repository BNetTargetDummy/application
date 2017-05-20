const Commando = require('discord.js-commando');

module.exports = class HelpCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'help',
      group: 'commands',
      memberName: 'help',
      description: 'Output help prompt for all commands.',
      details: 'Provides a list of all available commands for the guild instance',
      examples: ['enable util', 'enable Utility', 'enable prefix'],
      guarded: true,
    });
  }

    hasPermission(msg) {
      if(!msg.guild) return this.client.isOwner(msg.author);
      return msg.member.hasPermission('ADMINISTRATOR');
    }

    async run(msg, args) {
      Parser.parse(req.body.text || '', context, (err, argv, output) => {
        if (err) logger.error(err.message);
        if (output) argv.respond(output);
      })
    }
}