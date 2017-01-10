const Command = require('./Command');

class LogCommand extends Command {

    constructor(name = null) {
        super(name);
    }

    configure() {
        this.description = "Log an endpoint resource. Return log result based on endpoint response, and output" +
            "results to the current channel Note useful when logging an endpoint behavior.";
    }

    run(input, output) {

    }

    initialize(input, output) {

    }

}