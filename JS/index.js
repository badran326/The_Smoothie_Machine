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
        const orderSummary = document.getElementById('orderSummary');
        orderSummary.textContent = `Thank you, ${this.name}! Your ${this.size} smoothie with ${this.base}, fruits: ${this.fruits.join(', ')}, add-ons: ${this.addons.join(', ')}, and special instructions: "${this.notes}" has been received.`;
    }
}

document.querySelector('form').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const base = document.querySelector('input[name="base"]:checked')?.value || '';
    const fruits = Array.from(document.querySelectorAll('input[name="fruits"]:checked')).map(cb => cb.value);
    const addons = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(cb => cb.value);
    const notes = document.getElementById('notes').value;
    const smoothie = new Smoothie(name, size, base, fruits, addons, notes);
    smoothie.displayOrder();
};

