# AUTOHAUS – My Favorite Car Store

A Persian RTL car store frontend built with **HTML5, CSS3, Bootstrap, and Vanilla JavaScript**.

The project provides a dark-themed car catalog where users can browse sample vehicles, search through a list of car brands, add new products, and remove existing ones.

## Overview

AUTOHAUS is a frontend practice project focused on building a car store interface and working with JavaScript product data.

It includes a hero section, dynamically generated product cards, a brand search field, and a form for adding new vehicles.

Product data is currently managed on the client side using a JavaScript array.

## Features

### 1. Navigation

- Persian RTL navigation layout.
- Sticky Bootstrap navbar.
- AUTOHAUS brand identity.
- Navigation links for Home and Cars.
- Quick navigation to the car catalog.
- Dark, semi-transparent navbar with a blur effect.

### 2. Hero Section

- Premium car collection introduction.
- Persian headline and description.
- BMW-themed hero image.
- 16:9 image container.
- Decorative M Power badge and image caption.
- Call-to-action button that navigates to the car catalog.

### 3. Dynamic Car Catalog

Car cards are generated dynamically using JavaScript template literals.

The initial product list contains:

| Car | Price | Stock |
|---|---:|---:|
| BMW M4 | €114,100 | 3 |
| BMW i8 | €79,990 | 0 |
| Lamborghini Revuelto | €990,000 | 1 |

Each product contains:

- Product ID
- Name
- Price
- Stock quantity
- Image path

Additional catalog features:

- Dynamic product card generation.
- Price formatting using `toLocaleString("de-DE")`.
- Euro currency display.
- Stock availability information.
- Special visual treatment for sold-out products.
- Disabled details button when a product is out of stock.
- Lazy loading for product images.
- Hover effects on product cards.

### 4. Brand Search

- Search input for car brands.
- Live filtering using the `keyup` event.
- Case-insensitive matching with `toLowerCase()`.
- Matching list items remain visible.
- Non-matching list items are hidden dynamically.

The current search filters the brand suggestion list rather than the product cards.

### 5. Add New Products

Users can enter new vehicle information through a custom form.

The form includes:

- Vehicle name
- Vehicle price in euros
- Stock quantity
- Add Product button

JavaScript functionality:

- Reads input values from the form.
- Trims unnecessary whitespace using `trim()`.
- Checks for empty fields.
- Highlights empty inputs with a custom `danger` CSS class.
- Converts price and stock values into numbers using `Number()`.
- Creates a new product object.
- Adds the product to the products array.
- Generates updated product cards.
- Clears the input fields after submission.

### 6. Remove Products

- Each product card has a Remove Product button.
- Removes the selected card from the page.
- Updates the products array using `filter()`.
- Uses the product ID to identify the selected item.

### 7. UI and Styling

The interface uses a dark automotive-inspired visual theme.

CSS features include:

- Custom CSS variables.
- Deep navy background.
- Aqua and cyan accent colors.
- Gradient-based text and buttons.
- Glass-like navbar using `backdrop-filter`.
- Custom card borders and shadows.
- Neon-inspired glow effects.
- Hover transitions.
- Smooth scrolling.
- Custom focus styles for interactive elements.
- Reduced-motion support with `prefers-reduced-motion`.
- Custom styling for search and product form inputs.

### 8. Responsive Layout

- Bootstrap container and grid system.
- Responsive hero layout.
- Product grid with one column on small screens, two on medium screens, and three on large screens.
- Responsive spacing and typography utilities.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Custom styling and visual effects |
| Bootstrap | Layout, grid, and UI components |
| Vanilla JavaScript | Product rendering, search, add, and remove functionality |

No frontend JavaScript framework or backend is currently used.

## Project Structure

```text
My-favorite-car-store/
│
├── index.html
│
└── assets/
    ├── css/
    │   ├── bootstrap.min.css
    │   └── style.css
    │
    ├── js/
    │   └── main.js
    │
    └── img/
        ├── BMW images
        ├── Lamborghini images
        └── Other car images
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/HydraXpOp/My-favorite-car-store.git
```

### 2. Open the project folder

```bash
cd My-favorite-car-store
```

### 3. Run the project

Open `index.html` directly in your browser.

You can also use the Live Server extension in Visual Studio Code.

## Current Limitations

This project is a frontend practice project and is not a complete e-commerce application.

- Product data is stored in a JavaScript array.
- Added and removed products are not saved permanently.
- Product information resets after refreshing the page.
- The brand search currently filters only the predefined brand list.
- The product details buttons do not yet open dedicated product pages.
- There is no shopping cart or checkout system.
- There is no user authentication or admin dashboard.
- There is no backend or database integration.

## Author

**Alireza Gholami**

GitHub: [@HydraXpOp](https://github.com/HydraXpOp)
