# Paradise Nursery

A shopping app for houseplants built with React, Vite and Redux Toolkit.

## Features

- Landing page with company intro and a Get Started button
- Product listing grouped by category (Air Purifying, Aromatic, Succulents)
- Add to Cart with a disabled state once an item is in the cart
- Cart icon in the navbar showing the total number of items
- Shopping cart page with increase, decrease and delete controls
- Per-item subtotal and overall total cost
- Checkout (coming soon) and Continue Shopping buttons

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the address printed in the terminal (usually http://localhost:5173).

## Project structure

```
paradise-nursery/
  README.md
  index.html
  package.json
  vite.config.js
  src/
    AboutUs.jsx     Company description shown on the product page
    App.css         All styling
    App.jsx         Landing page and page switching
    CartItem.jsx    Shopping cart page
    CartSlice.jsx   Redux slice (addItem, removeItem, updateQuantity)
    ProductList.jsx Product grid and navbar
    main.jsx        App entry point with the Redux Provider
    plantData.js    Plant catalogue
    store.js        Redux store
```

## Redux state

`cart.items` is an array of `{ name, image, description, cost, quantity }`.
The total item count and total cost are derived from this array.
