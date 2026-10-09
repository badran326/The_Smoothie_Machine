# 🥤 The Smoothie Machine

**The Smoothie Machine** is an interactive smoothie-ordering web application that lets users build a custom smoothie, choose ingredients, and instantly view an itemized bill. Built with **HTML, CSS, and vanilla JavaScript**, the project demonstrates object-oriented programming, form handling, DOM manipulation, and dynamic price calculation—without requiring a backend or external libraries.

## ✨ Features

- **Build a custom smoothie:** Choose a size, base, fruits, and optional extras.
- **Flexible ingredient selection:** Add multiple fruits and add-ons using checkboxes.
- **Special instructions:** Include personalized notes with an order.
- **Automatic price calculation:** Calculate the total based on smoothie size and selected ingredients.
- **Order confirmation:** Display a personalized summary after submitting the form.
- **Itemized bill:** Show the smoothie price, ingredient subtotals, and final total.
- **Clean interface:** Present the form and receipt with modern card layouts, gradient accents, and subtle animations.

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| **HTML5** | Structures the order form and receipt |
| **CSS3** | Styles the interface, layout, and animations |
| **JavaScript (ES6+)** | Handles form input, smoothie objects, pricing, and DOM updates |

No frameworks, package managers, or third-party dependencies are required.

## 💵 Pricing

### Smoothie sizes

| Size | Starting price |
| --- | ---: |
| Small | $5.00 |
| Medium | $6.50 |
| Large | $8.00 |

### Customization options

| Category | Available choices | Additional cost |
| --- | --- | ---: |
| Base | Yogurt, Juice, Milk | Included |
| Fruits | Strawberry, Banana, Mango, Blueberry | $0.75 per fruit |
| Add-ons | Protein Powder, Honey, Chia Seeds | $1.00 per add-on |
| Special instructions | Custom notes | Free |

**Price formula:**

```text
Total = Size Price + (Number of Fruits × $0.75) + (Number of Add-ons × $1.00)
```

For example, a **medium smoothie with yogurt, strawberry, mango, and protein powder** costs:

```text
Medium smoothie       $6.50
2 fruits              $1.50
1 add-on              $1.00
---------------------------
Total                  $9.00
```

## 🚀 Getting Started

### Prerequisites

All you need is a modern web browser, such as Chrome, Firefox, Edge, or Safari.

### Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/The_Smoothie_Machine.git
   ```

2. Open the project directory:

   ```bash
   cd The_Smoothie_Machine
   ```

3. Open `index.html` in your browser.

No installation, build process, or development server is necessary.

> **Note:** Replace `YOUR-USERNAME` in the clone URL with your GitHub username, or download the repository as a ZIP and extract it.

## 📖 How to Use

1. Enter your name.
2. Select a smoothie size: small, medium, or large.
3. Choose a base: yogurt, juice, or milk.
4. Select any fruits and add-ons you would like.
5. Optionally, enter special instructions.
6. Click **Place Order**.
7. Review your personalized order summary and itemized bill.

## 📁 Project Structure

```text
The_Smoothie_Machine/
├── index.html          # Smoothie order form and bill markup
├── css/
│   └── styles.css      # Interface styles and animations
└── JS/
    └── index.js        # Order handling and price calculation
```

## ⚙️ How It Works

The application's JavaScript uses a `Smoothie` class to represent each order.

- **`constructor(name, size, base, fruits, addons, notes)`** stores the customer's selections.
- **`calculatePrice()`** determines the total from the selected size and the number of fruits and add-ons.
- **`displayOrder()`** generates a personalized order confirmation and triggers the bill display.
- **`showBill()`** updates the receipt with the selected ingredients, subtotals, notes, and total.

When the form is submitted, JavaScript prevents the page from reloading, reads the form values, creates a new `Smoothie` object, and updates the page through the DOM.

## 🎯 Skills Demonstrated

- Object-oriented programming with JavaScript classes and methods
- Form submission and input validation using HTML and JavaScript
- DOM selection and dynamic content updates
- Working with arrays and checkbox selections
- Conditional display of UI elements
- Price calculations and currency formatting
- CSS layouts, gradients, and keyframe animations

## 🔮 Possible Future Improvements

- Add a live price preview while users customize their smoothies.
- Allow customers to edit or reset an order.
- Support multiple smoothies in a shopping cart.
- Save order history using local storage or a backend.
- Improve accessibility and mobile layouts.
- Add automated tests for pricing and form behavior.

## 📌 Project Scope

This is a **front-end demonstration project**. Orders are displayed in the browser only; they are not saved to a database, sent to a restaurant, or processed for payment.

---

*Made with HTML, CSS, and JavaScript.*
