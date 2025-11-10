//This class handles the structure and display of a single smoothie order
class Smoothie {
    constructor(name, size, base, fruits, addons, notes) {
        this.name = name;
        this.size = size;
        this.base = base;
        this.fruits = fruits;
        this.addons = addons;
        this.notes = notes;
    }

    //Updates and display the orderSummary element with formatted order details
    displayOrder() {
        // Get the summary display element
        const orderSummary = document.getElementById('orderSummary');
        
        // Format the order details with line breaks for readability
        orderSummary.innerHTML = `Thank you, ${this.name}!<br>
        <br>
        Your ${this.size} smoothie with:<br>
        - ${this.base}<br>
        - Fruits: ${this.fruits.join(', ')}<br>
        - Add-ons: ${this.addons.join(', ')}<br>
        - Special instructions: "${this.notes}"<br>
        <br>
        has been received.`;
    }
}

// Handle form submission
document.querySelector('form').onsubmit = function(e) {
    // Prevent the default form submission
    e.preventDefault();
    
    // Collect form data
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const base = document.querySelector('input[name="base"]:checked')?.value || '';
    
    // Get all checked fruits
    const fruits = Array.from(
        document.querySelectorAll('input[name="fruits"]:checked')
    ).map(cb => cb.value);
    
    // Get all checked add-ons
    const addons = Array.from(
        document.querySelectorAll('input[name="extras"]:checked')
    ).map(cb => cb.value);
    
    // Get any special instructions
    const notes = document.getElementById('notes').value;

    // Create and display the order
    const smoothie = new Smoothie(name, size, base, fruits, addons, notes);
    smoothie.displayOrder();
};

