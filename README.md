# FreshCart - E-Commerce Application

A fully-featured e-commerce web application built with **Angular 16** that provides a seamless shopping experience with user authentication, product browsing, cart management, and order processing.

## 🎯 Project Purpose

FreshCart is a modern, responsive e-commerce platform designed to deliver an intuitive and efficient online shopping experience. It serves as a comprehensive solution for customers to browse products, manage their cart, save favorite items, and complete purchases securely.

## ✨ Key Features

### Authentication & User Management

- **User Registration** - Create a new account with email and password
- **User Login** - Secure authentication with JWT tokens
- **Password Recovery** - Forget password functionality to reset credentials
- **Protected Routes** - Authentication guard to secure user-specific pages

### Product Management

- **Product Catalog** - Browse all available products with detailed information
- **Product Search** - Search for products by name and keywords
- **Product Details** - View comprehensive product information including descriptions, prices, and images
- **Product Filtering** - Filter products by categories and brands
- **Categories** - Explore products organized by categories
- **Brands** - Browse products from different brands

### Shopping Cart

- **Add to Cart** - Add products to your shopping cart
- **View Cart** - Review cart items with quantities and prices
- **Update Quantities** - Adjust product quantities in the cart
- **Remove Items** - Delete products from the cart
- **Cart Total** - Calculate and display cart subtotal and total

### Wish List

- **Add to Wish List** - Save favorite products for later
- **View Wish List** - Access all saved products
- **Move to Cart** - Transfer wish list items to shopping cart

### Checkout & Orders

- **Secure Payment** - Process payments through integrated payment gateway
- **Order Placement** - Complete and place orders
- **Order History** - View all previous orders with details
- **Order Tracking** - Monitor order status and details

### User Interface

- **Responsive Design** - Fully responsive layout using Bootstrap 5
- **Navigation Bars** - Context-aware navigation for authenticated and non-authenticated users
- **Image Carousel** - Product image carousels using Owl Carousel
- **Toast Notifications** - Real-time feedback using NGX-Toastr
- **Loading Spinner** - Loading indicators during API calls
- **Custom Pipes** - Text truncation and search filtering pipes
- **Footer** - Application footer with relevant links and information

## 🛠️ Technology Stack

### Frontend Framework

- **Angular 16** - Modern web framework with TypeScript

### UI/Styling

- **Bootstrap 5** - Responsive CSS framework
- **SCSS** - Styling language for custom styles
- **Font Awesome 6** - Icon library

### UI Components & Libraries

- **NGX-Owl-Carousel** - Carousel/slider component
- **NGX-Spinner** - Loading spinner component
- **NGX-Toastr** - Toast notification library

### State Management & Networking

- **RxJS 7** - Reactive programming with observables
- **HttpClientModule** - HTTP client for API requests

### Form Handling

- **Angular Reactive Forms** - Form validation and management
- **Angular Forms** - Template-driven forms

### Development Tools

- **Angular CLI 16** - Command-line interface for Angular
- **TypeScript 5** - Programming language
- **Jasmine & Karma** - Unit testing framework and test runner

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Feature components
│   │   ├── home/
│   │   ├── products/
│   │   ├── cart/
│   │   ├── wish-list/
│   │   ├── categories/
│   │   ├── brands/
│   │   ├── product-details/
│   │   ├── payment/
│   │   ├── all-orders/
│   │   ├── login/
│   │   ├── register/
│   │   ├── forget-password/
│   │   └── navbar-* & footer/
│   ├── layouts/             # Layout components
│   │   ├── auth/           # Layout for auth pages
│   │   └── blank/          # Layout for main pages
│   ├── services/           # API services
│   │   ├── auth.service.ts
│   │   ├── products.service.ts
│   │   ├── cart.service.ts
│   │   ├── wish-list.service.ts
│   │   ├── payment.service.ts
│   │   └── ...
│   ├── guard/              # Route guards
│   │   └── auth.guard.ts
│   ├── interceptor/        # HTTP interceptors
│   │   ├── token.interceptor.ts
│   │   └── loading.interceptor.ts
│   ├── pipes/              # Custom pipes
│   │   ├── cut-text.pipe.ts
│   │   └── search.pipe.ts
│   ├── app-routing.module.ts
│   ├── app.module.ts
│   └── app.component.ts
├── assets/                 # Static assets
└── styles.scss            # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI 16

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Ecommerce
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:4200`

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Run tests**
   ```bash
   npm test
   ```

## 🔐 Authentication

The application uses **JWT (JSON Web Tokens)** for secure authentication:

- Tokens are managed via the `TokenInterceptor` which automatically includes auth tokens in API requests
- Protected routes are secured with the `authGuard` that prevents unauthorized access
- User credentials are safely stored and validated on login

## 📡 API Integration

The application communicates with a backend API for:

- User authentication and authorization
- Product data retrieval
- Cart and order management
- Payment processing

HTTP interceptors handle:

- Automatic token injection in request headers
- Loading state management during API calls

## 🎨 Responsive Design

The application is fully responsive and optimized for:

- Desktop browsers
- Tablets
- Mobile devices

Bootstrap 5 grid system ensures perfect layout across all screen sizes.

## 🌐 Live Demo

**[Visit FreshCart Live Application](https://freshcart-ecommerce-mohamedelsharif22.vercel.app/login)**

## 📝 License

This project is part of the FullStack Diploma course by Route.

## 👨‍💻 Developer

**Mohamed Elsharif**

---

**Happy Shopping! 🛍️**
