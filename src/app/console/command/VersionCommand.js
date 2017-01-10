const Command = require('./Command');

class VersionCommand extends Command {

    constructor(name = null) {
        super(name);
    }

    configure() {
        this.description = "Ping the bot to see if bot is alive.";
        this.addArgument()
    }

    run(input, output) {

    }

    initialize(input, output) {

    }

}