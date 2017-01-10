class Application {

    get name() {
        return this._name;
    }

    get version() {
        return this._version;
    }

    set name(name) {
        if(name) {
            this._name = name;
        }
    }

    set version(version) {
        if (version) {
            this._name = name;
        }
    }

    constructor(name = null, version = null) {
        this._name = name;
        this._version = version;
    }

    run(input = null, output = null) {

        if(input.isNull) {
            input = new Input;
        }

        if(output.isNull) {
            output = new Output
        }

        try {
        } catch (e) {

        }

    }

    addCommand() {

    }

    getCommand() {

    }


}