class Smoothie {
    constructor(name, size, base, fruits, addons, notes) {
        this.name = name;
        this.size = size;
        this.base = base;
        this.fruits = fruits;
        this.addons = addons;
        this.notes = notes;
    }

    displayOrder() {
        alert(`Smoothie Order:
        Size: ${this.size}
        Base: ${this.base}
        Fruits: ${this.fruits.join(', ')}
        Add-ons: ${this.addons.join(', ')}
        Special Instructions: ${this.notes}`);
    }
}

