const argument_required = 0;
const argument_optional = 1;

class InputArgument {

    constructor(name, mode = null, description = '', defaultArgument = null) {

        if(mode.isNull) {
            mode = argument_optional;
        } else if(!mode.isInteger) {
            throw new Error('Option mode is not valid.');
        }

        this._name = name;
        this._mode = mode;
        this._description = description;
        this._defaultArgument = defaultArgument;
    }

    get name() {
        return this._name;
    }

    get mode() {
        return this._mode;
    }

    get description() {
        return this._description;
    }

    get defaultArgument() {
        return this._defaultArgument;
    }

    isRequired() {
    }

}