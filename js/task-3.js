class StringBuilder {
    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        this.#value += str; // Append the string to the end of the current value
    }

    padStart(str) {
        this.#value = str + this.#value; // Prepend the string to the start of the current value
    }

    padBoth(str) {
        this.#value = str + this.#value + str; // Append and prepend the string around the current value
    }
}

// Testing the class with provided use cases
const builder = new StringBuilder(".");
console.log(builder.getValue()); // Outputs: "."
builder.padStart("^");
console.log(builder.getValue()); // Outputs: "^."
builder.padEnd("^");
console.log(builder.getValue()); // Outputs: "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // Outputs: "=^.^="
