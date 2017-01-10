const Command = require('./Command');

class PingCommand extends Command {

    constructor(name = null) {
        super(name)
    }

    configure() {
        this.description = "Ping the bot to see if bot is alive.";
    }

    run(input, output) {

    }

    initialize(input, output) {

    }

}
