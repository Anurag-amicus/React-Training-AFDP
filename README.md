# AmiCart — React + Vite + TypeScript

A simple e-commerce product listing built with **React, TypeScript, and Vite**. The project demonstrates basic React fundamentals, reusable typed components, JSX, event handling, and responsive CSS layouts.

## Features

* React + TypeScript project scaffolded with Vite
* Assignment 1:

  * Header, heading, supporting content, and button
  * Button click event with browser console logging
* Assignment 2:

  * Reusable `ProductCard` component
  * Strongly typed product data using TypeScript
  * Static product catalog stored separately in a **JSON file**
  * Products imported from the JSON file and rendered using `.map()`
  * Product image, name, category, rating, price, and Add to Cart button
  * Star-based product ratings
  * Indian Rupee currency formatting
  * Add-to-cart console logging
* Responsive CSS grid:

  * 4 columns on desktop
  * 3 columns on smaller desktop/tablet
  * 2 columns on tablet
  * 1 column on mobile
* Custom `Industry Test` font
* Hover states and e-commerce styled UI
* Responsive header, product section, and footer

## Tech Stack

* **React**
* **TypeScript**
* **Vite**
* **CSS**
* **JSON** for static product data

## Project Structure

```text
src/
├── assets/
│   └── fonts/
│       └── IndustryTest-Black.otf
├── components/
│   └── ProductCard.tsx
├── data/
│   └── products.json
├── types/
│   └── product.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

The product catalog is intentionally kept outside the component in `products.json`, making the product data easier to maintain and keeping the component focused on presentation.

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in the terminal.

## Production Build

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## React Concepts Demonstrated

* JSX
* Functional components
* Component composition
* TypeScript interfaces/types
* Props
* Array `.map()`
* Event handling with `onClick`
* Conditional rendering
* JSON-based static data
* Responsive CSS Grid
* Reusable component design
