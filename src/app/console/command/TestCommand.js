const Command = require('./Command');

class TestCommand extends Command {

    constructor(name = null) {
        super(name);
    }

    configure() {
        this.description = "Test using predetermined cases on an endpoint resource and output results to the current" +
            " the current channel. Note useful for determining the status of known test cases.";
    }

    run(input, output) {

    }

    initialize(input, output) {

    }

}