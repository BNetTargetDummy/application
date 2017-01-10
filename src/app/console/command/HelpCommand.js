const Command = require('./Command');

class HelpCommand extends Command {

    constructor(name = null) {
        super(name);
    }

    configure() {
        this.description = "Output help prompt for all commands.";
    }

    run(input, output) {

    }

    initialize(input, output) {

    }

}