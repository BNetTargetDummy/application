class Command {

    /* Set Application instance of command. */
    set application(application) {
        if(application) {
            this._application = application;
        }
    }

    /* Description of command. */
    set description(description) {
        if(description){
            this._description = description;
        }
    }

    set name(name) {
        if(name) {
            this._name = name;
        }
    }

    /* Called when command is created. */
    constructor(name = null) {
        if(name) {
            this._name = name;
        }
    }

    configure() {

    }

    run(input, output) {

    }

    initialize(input, output) {

    }

    addArgument(name, mode = null, description = '', normal = null) {

    }

    addOption(name, shortcut = null, mode = null, description = '', normal = null) {

    }

}
