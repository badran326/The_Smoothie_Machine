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

    // Calculate the total price based on size, fruits, and add-ons
    calculatePrice() {
        // Base prices by size
        const sizePrices = {
            small: 5.00,
            medium: 6.50,
            large: 8.00
        };

        // Price per fruit ($0.75 each)
        const fruitPrice = 0.75;

        // Price per add-on ($1.00 each)
        const addonPrice = 1.00;

        // Calculate total
        let total = sizePrices[this.size] || 0;
        total += this.fruits.length * fruitPrice;
        total += this.addons.length * addonPrice;

        // Return rounded to 2 decimal places
        return parseFloat(total.toFixed(2));
    }

    //Updates and display the orderSummary element with formatted order details
    displayOrder() {
        // Get the summary display element
        const orderSummary = document.getElementById('orderSummary');
        
        // Calculate the total price
        const totalPrice = this.calculatePrice();

        // Format the order details with line breaks for readability
        orderSummary.innerHTML = `Thank you, ${this.name}!<br>
        <br>
        Your ${this.size} smoothie with:<br>
        - ${this.base}<br>
        - Fruits: ${this.fruits.join(', ') || 'None'}<br>
        - Add-ons: ${this.addons.join(', ') || 'None'}<br>
        - Special instructions: "${this.notes}"<br>
        <br>
        <strong>Total Price: $${totalPrice.toFixed(2)}</strong><br>
        <br>
        has been received.`;

        // Show the bill
        this.showBill();
    }

    // Show bill with order details
    showBill() {
        const bill = document.getElementById('billSection');
        const sizePrices = { small: 5.00, medium: 6.50, large: 8.00 };
        const basePrice = sizePrices[this.size];
        const fruitsTotal = this.fruits.length * 0.75;
        const addonsTotal = this.addons.length * 1.00;
        const total = this.calculatePrice();

        // Populate bill
        document.getElementById('billName').textContent = this.name;
        document.getElementById('billSize').textContent = `${this.size} - ${this.base}`;
        document.getElementById('billSizePrice').textContent = `$${basePrice.toFixed(2)}`;
        document.getElementById('billTotal').textContent = `$${total}`;

        // Show fruits if selected
        if (this.fruits.length > 0) {
            document.getElementById('billFruitsRow').style.display = 'flex';
            document.getElementById('billFruitsPriceRow').style.display = 'flex';
            document.getElementById('billFruits').textContent = this.fruits.join(', ');
            document.getElementById('billFruitsPrice').textContent = `$${fruitsTotal.toFixed(2)}`;
        }

        // Show add-ons if selected
        if (this.addons.length > 0) {
            document.getElementById('billAddonsRow').style.display = 'flex';
            document.getElementById('billAddonsPriceRow').style.display = 'flex';
            document.getElementById('billAddons').textContent = this.addons.join(', ');
            document.getElementById('billAddonsPrice').textContent = `$${addonsTotal.toFixed(2)}`;
        }

        // Show notes if provided
        if (this.notes) {
            document.getElementById('billNotesRow').style.display = 'flex';
            document.getElementById('billNotes').textContent = this.notes;
        }

        // Show bill section
        bill.classList.add('show');
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

