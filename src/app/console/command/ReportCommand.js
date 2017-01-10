const Command = require('./Command');

class ReportCommand extends Command {

    constructor(name = null) {
        super(name);
    }

    configure() {
        this.description = "Report based on the responses of previous endpoints.";
    }

    run(input, output) {

    }

    initialize(input, output) {
        return new InputDefintion([
                new InputArgument('')
        ]
        )

    }

}