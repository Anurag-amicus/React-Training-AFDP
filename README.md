# AmiCart — React + Vite + TypeScript

A simple e-commerce product application built with **React, TypeScript, and Vite**. The project was developed progressively through six assignments covering React fundamentals, reusable components, state management, controlled inputs, filtering, responsive layouts, and a static e-commerce home page.

## Features

* React + TypeScript project scaffolded with Vite

* Assignment 1 — React + Vite + TypeScript Basics:
  * Created a basic React application using Vite and TypeScript
  * Added a heading, supporting paragraph, and button using JSX
  * Implemented a typed click event handler
  * Logged a message to the browser console when the button is clicked
  * Used the standard Vite development and production build setup

* Assignment 2 — Reusable Product Card:
  * Created a reusable `ProductCard` component
  * Defined a TypeScript `Product` type for product data
  * Stored the static product array separately in `products.json`
  * Imported the JSON data into the React application
  * Rendered products dynamically using `.map()`
  * Displayed product image, name, category, rating, review count, and price
  * Added star-based rating display
  * Formatted product prices using Indian Rupee (`₹`) formatting
  * Added an Add to Cart button with console logging
  * Created a responsive product grid using CSS Grid

* Assignment 3 — Reusable Button & Card Components:
  * Created a reusable `Button` component with four visual variants:
    `primary`, `secondary`, `outline`, and `danger`
  * Added a `generic` Button variant for cases where custom styling is required
  * Used typed props for button variant, children, disabled state, click handling, and custom classes
  * Added a default Button variant when no variant is provided
  * Created a reusable `Card` component with three variants:
    `elevated`, `bordered`, and `flat`
  * Used `children` to allow different content to be composed inside Cards
  * Reused the Button and Card components in later assignments instead of creating separate implementations

* Assignment 4 — Interactive Product Quantity Selector:
  * Added a reusable `QuantitySelector` component
  * Managed the product quantity using React `useState`
  * Added increase and decrease controls using the reusable `Button` component
  * Prevented the quantity from going below `1`
  * Disabled the decrease button when the quantity is already `1`
  * Added a controlled quantity input
  * Allowed users to type a quantity directly into the input
  * Handled temporarily empty or invalid input values before validating them on blur
  * Used functional state updates where the new quantity depends on the previous quantity
  * Calculated and displayed the dynamic total price using unit price × quantity

* Assignment 5 — Product List with Category Filter:
  * Extended the product data with categories
  * Created a reusable `CategoryFilter` component
  * Added category options for Electronics, Fashion, Home, and Clothing
  * Implemented an `All` option to display all products
  * Used `useState` to track the selected categories
  * Implemented multi-category filtering using `.filter()` and `.includes()`
  * Derived the filtered product list from the original product array without modifying it
  * Reused the existing `ProductCard` component for filtered products
  * Added an empty state when the selected category has no matching products
  * Included a category with no products to demonstrate the empty-state behavior

* Assignment 6 — Static E-commerce Home Page:
  * Built a static e-commerce home page using separate React components
  * Added a header with brand name, navigation links, utility links, and a CTA button
  * Added a hero section with an eyebrow heading, main headline, supporting text, and primary CTA
  * Created four reusable CTA cards using the existing `Card` and `Button` components
  * Added a Featured Products section using the existing product data
  * Integrated **Swiper** for the featured product carousel
  * Configured responsive slides per view for desktop, tablet, and mobile layouts
  * Added one-slide-at-a-time navigation, built-in navigation arrows, pagination dots, and infinite looping
  * Added a category section using reusable Button variants
  * Added a responsive footer with trust information, useful links, social links, legal links, and brand information
  * Added responsive layouts for desktop, tablet, and mobile screen sizes
  * Reused existing `Button`, `Card`, and `ProductCard` components instead of duplicating UI logic

## Tech Stack

* **React**
* **TypeScript**
* **Vite**
* **CSS**
* **Swiper** for the featured product carousel
* **JSON** for static product data
* **Industry Test** custom fonts

## Project Structure

```text
src/

├── assets/
│   └── fonts/
│       ├── IndustryTest-Black.otf
│       └── IndustryTest-Medium.otf

├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── CategoryFilter.tsx
│   ├── CategoryGrid.tsx
│   ├── CtaCard.tsx
│   ├── CtaGrid.tsx
│   ├── FeaturedCarousel.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   └── QuantitySelector.tsx

├── data/
│   └── products.json

├── types/
│   └── product.ts

├── App.tsx
├── App.css
├── index.css
└── main.tsx