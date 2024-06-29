class Storage {
    // Private field to store items
    #items;

    // Constructor to initialize the items array
    constructor(items) {
        this.#items = items;
    }

    // Method to get all items
    getItems() {
        return this.#items;
    }

    // Method to add an item
    addItem(newItem) {
        this.#items.push(newItem);
    }

    // Method to remove an item
    removeItem(itemToRemove) {
        this.#items = this.#items.filter(item => item !== itemToRemove);
    }
}

// Initializing an instance and testing the methods as specified
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // Outputs: ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // Outputs: ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // Outputs: ["Nanitoids", "Antigravitator", "Droid"]
