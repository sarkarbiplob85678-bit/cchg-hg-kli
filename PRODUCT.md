# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: High-trust Indian smartphone buyers and tech enthusiasts seeking genuine factory-sealed flagship, camera, and gaming smartphones without gray-market risks, counterfeit accessories, or opaque markups.
Secondary: VOLT MOBILE showroom managers and store owners executing order fulfillment, verifying UPI bank credits via UTR reconciliation, managing live inventory, and customizing storefront branding.

## Product Purpose

VOLT MOBILE bridges the gap between digital e-commerce speed and physical showroom trust. It eliminates buyer skepticism surrounding high-value mobile devices by offering guaranteed authentic manufacturer stock, transparent all-inclusive showroom pricing, zero-surcharge direct UPI settlement, and physical walk-in diagnostic backup.

## Positioning

The premier high-touch smartphone showroom experience in India—pairing digital ordering and instant UPI QR settlement with physical showroom credibility, guaranteed sealed inventory, and zero payment processing surcharges.

## Operating Context

- Operates within the Indian retail electronics landscape with a flagship physical showroom in Bengaluru, Karnataka.
- Direct UPI payment ecosystem (Google Pay, PhonePe, Paytm, BHIM, Cred) with 12-digit UTR bank statement reconciliation.
- Statutory GST tax invoices with IMEI serial tracking for official manufacturer warranty claims.
- Hybrid fulfillment: nationwide express insured logistics plus same-day showroom counter pickup and trade-in exchange diagnostics.

## Capabilities and Constraints

- **Dynamic Catalogue & Search:** Real-time search with debounced querying, multi-facet filtering (Brand, Category, Price Range, In-Stock), and grid/list view toggles.
- **Hardware Configurator:** Multi-variant selection (RAM, Storage, Color) dynamically updating price, SKU, and stock availability.
- **Cart & Server-Side Validation:** LocalStorage cart synchronization with strict server-side price recalculation and stock caps.
- **Form & Order Security:** Checkout with 10-digit Indian mobile and 6-digit PIN code validation; unique order reference generation (`VM-2026-XXXX`).
- **Direct UPI QR Workflow:** Dynamic merchant QR display, exact payable amount, UTR reference submission, optional payment screenshot upload, and human verification queue (`PENDING` -> `PENDING_VERIFICATION` -> `PAID` / `REJECTED`).
- **Privacy-Preserving Tracking:** Order tracking protected by matching Order ID and registered phone number, presenting masked customer data and a 6-stage fulfillment timeline.
- **Admin Command Center:** Owner authentication with scrypt password hashing, real-time verified revenue statistics, product CRUD with specification management, order fulfillment controls, inventory restock adjustments with audit logging, and website identity customization.
- **Theme Engine:** Design token system supporting 5 presets (Midnight Blue, Pure Minimal, Graphite Luxury, Royal Violet, Emerald Tech) plus custom palette building and typography selection.

## Brand Commitments

- **Brand Name:** VOLT MOBILE (editable by store owner from Admin Dashboard).
- **Tagline:** Next-Gen Mobile Showroom & Flagship Experience Store.
- **Visual Identity:** Modern minimalist aesthetics, midnight typography, electric blue accents, generous whitespace, and authentic studio device photography.
- **Voice & Tone:** Authoritative, transparent, sophisticated, and customer-centric.

## Evidence on Hand

- Authentic studio photography for 12 recognizable flagship smartphone models stored locally in `public/images/products/` (Apple iPhone 17 Pro Max, iPhone 16, Samsung Galaxy S25 Ultra, Galaxy S25, OnePlus 13, OnePlus 13R, Google Pixel 10 Pro, Nothing Phone (3), Redmi Note 14 Pro+, POCO X7 Pro, Realme GT 7 Pro, Vivo X200 Pro).
- Official vector brand marks for Apple, Samsung, OnePlus, Google, Nothing, Xiaomi, Realme, and Vivo stored in `public/images/brands/`.
- Official showroom merchant UPI QR graphic in `public/images/default-upi-qr.png`.
- Full-stack codebase with SQLite database (`server/data/volt_mobile.db`) and Express API running on `http://localhost:5000`.

## Product Principles

1. **Uncompromising Authenticity:** Only factory-sealed devices traceable to authorized brand distribution channels with verifiable IMEI credentials.
2. **Zero-Surcharge Integrity:** Direct merchant UPI settlement with dual human verification, eliminating intermediary payment gateway processing fees.
3. **Radical Transparency:** Transparent pricing with taxes included, visible live stock quantities, and clear warranty terms.
4. **Omnichannel Assurance:** Digital convenience backed by an operational physical flagship showroom with walk-in support and trade-in diagnostics.

## Accessibility & Inclusion

- Semantic HTML structure with accessible ARIA landmarks.
- WCAG AA contrast compliance across all five theme presets and dark surfaces.
- Focus visible indicators across all interactive form controls, buttons, and drawers.
- Respect for `prefers-reduced-motion` settings.

