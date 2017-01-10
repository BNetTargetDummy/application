const Command = require('./Command');

class RequestCommmand extends Command {

    constructor(name = null) {
        super(name);
    }

    configure() {
        this.description = "Request an endpoint resource. Return a link to the endpoint response to the current" +
            "channel. Useful when discussing about various fields of data in the response. Note results are cached" +
            "but not permanenetly stored.";
    }

    run(input, output) {

    }

    initialize(input, output) {

    }
}