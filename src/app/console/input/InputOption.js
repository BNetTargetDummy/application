const value_none = 0;
const value_required = 1;
const value_optional = 2;

class InputOption {

    constructor(name, shortcut = null, mode = null, description = '', defaultOption = null) {
        if(name.startsWith("--")) {
            name.substring(2, name.length);
        }

        if(name.isEmpty) {
            throw new Error("An option nme cannot be empty.")
        }

        if (!shortcut.isNull) {
            if(shortcut.isArray) {
                shortcut = shortcut.join('|')
            }
        }

        if(!mode.isNull) {
            mode = value_none;
        } else if(mode.isInteger) {
            throw new Error('Option mode is not valid.');
        }

        this._name = name;
        this._shortcut = shortcut;
        this._mode = mode;
        this._description = description;
        this._defaultOption = defaultOption;
    }

    get name() {
        return this._name;
    }

    get shortcut() {
        return this._shortcut;
    }

    get mode() {
        return this._mode;
    }

    get description() {
        return this._description;
    }

    get defaultOption() {
        return this._defaultOption
    }

    isValueRequired() {
        return this.value_required === (this.value_required & this._mode);
    }

    isValueOptional() {
        return this.value_optional === (this.value_optional & this._mode);
    }

}
