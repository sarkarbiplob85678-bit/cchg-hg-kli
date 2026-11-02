# VOLT MOBILE — Premium Smartphone Retail E-Commerce Platform

A production-quality, premium smartphone showroom e-commerce platform built for **VOLT MOBILE**, a high-end mobile electronics retail showroom based in Bengaluru, India.

---

## ⚡ Key Highlights & Capabilities

- **Editorial Visual Identity:** White and soft-grey primary surfaces, midnight typography, electric blue accents, generous whitespace, and authentic studio smartphone photography.
- **Authentic Smartphone Imagery:** Real, recognizable manufacturer models (Apple iPhone 17 Pro Max, iPhone 16, Samsung Galaxy S25 Ultra, Galaxy S25, OnePlus 13, OnePlus 13R, Google Pixel 10 Pro, Nothing Phone (3), Redmi Note 14 Pro+, POCO X7 Pro, Realme GT 7 Pro, Vivo X200 Pro).
- **Persistent Database:** SQLite database (`node:sqlite`) with full ACID compliance, foreign keys, constraints, and audit logging.
- **Manual Direct UPI QR Payment Workflow:**
  - Automated unique Order ID generation (e.g., `VM-2026-XXXX`).
  - Dynamic display of verified merchant UPI QR code and payable amount.
  - Customer submission of 12-digit UTR reference and optional payment screenshot proof.
  - Human verification workflow: Status moves from `PENDING` &rarr; `PENDING_VERIFICATION` &rarr; `PAID` / `REJECTED`.
  - Automatic synchronization between payment status and order fulfillment status.
- **Order Tracking:** Secure tracking by Order ID + registered 10-digit mobile phone number with complete timeline stages and masked customer privacy.
- **Owner Admin Dashboard (`/admin/login`):**
  - **Showroom Overview:** Real-time revenue from verified payments, order counters, pending reviews, low-stock alerts, and activity audit trails.
  - **Product Management:** Full CRUD with specifications (RAM, storage, display, processor, camera, battery, colors), multiple variants, image upload, and stock control.
  - **Order Fulfillment:** Comprehensive customer address review, ordered products breakdown, status updates, and internal showroom notes.
  - **Payment Verification:** Pending queue, UTR inspection, screenshot proof inspection, and one-click Approve/Reject with audit logs.
  - **Inventory Control:** Real-time stock levels, low-stock warnings (< 5 units), quick restock adjustments, and reason tracking.
  - **Live Website Customization:** Edit showroom brand name, logo, announcement bar, hero section, contact numbers, address, WhatsApp, Google Maps link, and SEO metadata.
  - **Theme System & Design Tokens:** 5 ready-made presets (*Midnight Blue*, *Pure Minimal*, *Graphite Luxury*, *Royal Violet*, *Emerald Tech*) + Custom theme with live color pickers, HEX inputs, custom palette manager, and typography selector.
  - **Homepage Section Manager:** Reorder, enable/disable, and edit titles for all homepage components.
  - **Business & UPI Settings:** Change merchant UPI ID, Payee name, instructions, upload custom QR image, and configure shipping thresholds.
  - **Account & Security:** Change owner email, rotate password with enforcement for initial provisioned access.
  - **Activity Logs:** Audit trail of all administrative actions.

---

## 🔐 Initial Owner Account Credentials

- **Admin Login Route:** `/admin/login`
- **Email:** `admin@voltmobile.in`
- **Initial Password:** `VoltAdmin@2026!`
- *Note:* Upon first login, the owner is prompted to rotate this password in Account Settings.

---

## 🚀 Running the Application

### 1. Start the Production Server
```bash
node server/index.js
```
The application will be live at: **http://localhost:5000**

### 2. Development Mode (with hot module reload)
```bash
# In terminal 1:
node server/index.js

# In terminal 2:
npm run dev
```

---

## 📁 Architecture Overview

```
├── public/
│   ├── images/
│   │   ├── products/       # Authentic manufacturer studio images
│   │   └── brands/         # SVG brand marks (Apple, Samsung, OnePlus, etc.)
│   └── default-upi-qr.png  # Showroom UPI QR code
├── server/
│   ├── data/
│   │   └── volt_mobile.db  # Persistent SQLite database
│   ├── uploads/            # Payment screenshots and uploaded product media
│   ├── db.js               # Database schema initialization
│   ├── seed.js             # Seed data with 12 flagship models and default owner
│   └── index.js            # Express API server & static asset host
└── src/
    ├── components/         # Header, Footer, CartDrawer, ProductCard, SearchModal, QuickViewModal
    ├── context/            # AuthContext, CartContext, SettingsContext, WishlistContext
    ├── pages/              # Home, Shop, Brands, ProductDetails, Offers, Cart, Checkout, OrderConfirmation, TrackOrder, About, Contact, Policies
    └── pages/admin/        # Complete Owner Admin Dashboard & management modules
```

# Mobile-Shop-demo-1
