---
name: VOLT MOBILE
description: Modern Flagship Smartphone Retail & Experience Platform
colors:
  primary: "#0f172a"
  primary-deep: "#090d16"
  secondary: "#1e293b"
  accent: "#0284c7"
  accent-hover: "#0369a1"
  neutral-bg: "#ffffff"
  neutral-surface: "#f8fafc"
  neutral-card: "#ffffff"
  neutral-border: "#e2e8f0"
  neutral-text: "#090d16"
  neutral-muted: "#64748b"
  badge-discount: "#f43f5e"
  badge-bestseller: "#f59e0b"
  status-in-stock: "#059669"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 900
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  2xl: "24px"
  3xl: "32px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.lg}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.lg}"
    padding: "16px 32px"
  card-product:
    backgroundColor: "{colors.neutral-card}"
    rounded: "{rounded.2xl}"
    padding: "20px"
  input-field:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.lg}"
    padding: "10px 14px"
  badge-chip:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-muted}"
    rounded: "{rounded.md}"
    padding: "2px 8px"
---

# Design System: VOLT MOBILE

## Overview

**Creative North Star: "The Precision Tech Atelier"**

VOLT MOBILE treats premium consumer electronics as precision industrial design rather than commodity inventory. The visual language is modeled after world-class technology showrooms and curated industrial studios: clinical optical white canvases, subtle glacial ice surfaces, deep obsidian typography, and razor-sharp electric cyan-cobalt focal points. Every element serves to showcase authentic flagship hardware with maximum fidelity and minimum decorative distortion.

The atmosphere balances showroom authority with retail urgency. Generous whitespace (32px to 64px section separation) gives flagship silhouettes breathing room, while tight data hierarchy (monospace specifications, curated variant pills, and instant price breakdowns) respects the technical literacy of modern smartphone buyers. Unnecessary gradients, toy-like 3D renders, and synthetic visual clutter are strictly excluded in favor of genuine device photography and crisp typographic cadence.

**Key Characteristics:**
- **Atelier Restraint:** Pristine white and soft glacial slate surfaces that recede, allowing physical smartphone hardware to command attention.
- **Electric Precision:** Rare, intentional punctuation with electric cyan-cobalt (`#0284c7`) applied exclusively to interactive calls-to-action and active status indicators.
- **Architectural Tactility:** Subtle 1px hairline borders (`#e2e8f0`) at rest that elevate with soft compound drop shadows upon user focus or hover.
- **Authentic Device Fidelity:** Genuine manufacturer photography displayed in uncropped, unskewed containers with natural device aspect ratios.

## Colors

The palette establishes an engineered, ultra-clean commercial atmosphere through strict separation between high-contrast structural monochrome and focused electric energy.

### Primary
- **Midnight Ink** (`#090d16` / `#0f172a`): Used for primary headlines, structural brand navigation bars, prominent pricing numerals, and high-emphasis display marks. Delivers sharp optical contrast against bright surfaces without harsh pure-black fatigue.

### Secondary
- **Deep Slate** (`#1e293b`): Used for secondary administrative headers, active navigation pills, tooltips, and elevated modal headers.
- **Electric Cyan-Cobalt** (`#0284c7`): The system's defining interactive accent. Reserved for primary purchase buttons, active tab indicators, brand iconography accents, and clickable links.
- **Electric Hover** (`#0369a1`): Deeper cobalt shade invoked on button hover and active focus states.

### Neutral
- **Pure Optical White** (`#ffffff`): The primary surface for product cards, modal dialogues, checkout surfaces, and the main viewport background.
- **Glacial Ice** (`#f8fafc`): Subtle off-white slate tint used for page-level section backgrounds, table headers, product specification chips, and input field fills.
- **Hairline Border** (`#e2e8f0`): Neutral demarcation stroke used across all cards, dividers, table rows, and input perimeters.
- **Muted Slate** (`#64748b`): Used for secondary metadata, product specifications, original strike-through prices, and form label descriptors.

### Named Rules
**The Rare Electric Accent Rule.** Electric blue (`#0284c7`) is reserved strictly for primary interactive intent, selected states, and live badges. It must occupy no more than 10% of any given viewport surface; its rarity is what gives it authoritative pull.

**The Pure Surface Rule.** Backgrounds never use loud multi-stop gradients or saturated colors. Tonal transitions are limited to subtle shifts between Pure Optical White (`#ffffff`) and Glacial Ice (`#f8fafc`).

## Typography

**Display Font:** Inter, sans-serif (with system Apple-system, BlinkMacSystemFont fallback; theme-switchable to Plus Jakarta Sans, Outfit, Space Grotesk)
**Body Font:** Inter, sans-serif
**Label/Mono Font:** Inter, -apple-system, sans-serif

**Character:** Clean, hyper-legible geometric grotesque typography engineered for numeric clarity, technical specification scanning, and authoritative editorial impact.

### Hierarchy
- **Display** (Black 900, `3.75rem` / 60px, line-height 1.08, letter-spacing `-0.025em`): Hero headlines and promotional flagship campaign titles.
- **Headline** (ExtraBold 800, `2.25rem` / 36px, line-height 1.15, letter-spacing `-0.02em`): Section titles ("Trending Flagships", "Curated Brands", "Showroom Offers").
- **Title** (Bold 700, `1.125rem` / 18px, line-height 1.3, letter-spacing `-0.015em`): Product card names, checkout section titles, and modal headers.
- **Body** (Regular 400, `0.875rem` / 14px, line-height 1.5, letter-spacing `0em`): Product descriptions, customer addresses, policy copy, and specs tables (max line length 68ch).
- **Label** (Bold 700, `0.6875rem` / 11px, line-height 1.2, letter-spacing `0.05em`, uppercase): Spec badge chips, brand markers, stock status indicators, and table headers.

### Named Rules
**The Tighter Headline Rule.** All headings from h1 to h3 enforce negative tracking (`letter-spacing: -0.02em`) to eliminate loose optical spacing in digital display sizes and maintain editorial density.

**The Numerical Dominance Rule.** Price numerals are always rendered in Bold 700 or Black 900 with tabular digit alignment, ensuring instantaneous price appraisal without layout wobble.

## Layout

The spatial model is organized around a strict 12-column grid within a centered maximum container of `80rem` (1280px / `max-w-7xl`), padded with responsive horizontal guttering:
- **Mobile (< 640px):** 16px (`px-4`) side gutters, single-column product stacking, fixed bottom mobile action bars.
- **Tablet (640px – 1024px):** 24px (`px-6`) side gutters, 2-column to 3-column product grids.
- **Desktop (≥ 1024px):** 32px (`px-8`) side gutters, 4-column product grids (`grid-cols-4`), 12-column editorial splits (e.g. 7-col hero text / 5-col flagship card).

Spacing follows an 8px base rhythm (`4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`). Vertical spacing between major homepage sections is standardized at `4rem` to `6rem` (64px to 96px) to maintain editorial calm.

## Elevation & Depth

VOLT MOBILE follows a hairline-first, flat-by-default structural philosophy. Surfaces at rest rely on crisp 1px borders (`#e2e8f0`) and subtle tonal contrast rather than heavy atmospheric drop shadows. Elevation is reserved for dynamic responses to user intent (hover, modal overlays, sticky headers, and drawer popouts).

### Shadow Vocabulary
- **Subtle Rest** (`box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)`): Applied to resting product cards, filter bars, and header panels.
- **Elevated Hover** (`box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)`): Applied when a user hovers over a product card, primary action button, or interactive showcase item.
- **Electric Glow** (`box-shadow: 0 0 25px -5px rgba(2, 132, 199, 0.25)`): Applied exclusively to primary interactive focal points during active focus or hover.
- **Backdrop Veil** (`background-color: rgba(0, 0, 0, 0.60)` with `backdrop-filter: blur(4px)`): Modal dialogue and search overlay backdrop.

### Named Rules
**The Border-First Resting Rule.** Every card and surface container must possess a visible 1px border stroke (`#e2e8f0`) at rest. Drop shadows may only augment the border, never replace it.

**The Kinetic Lift Rule.** Hoverable interactive surfaces elevate smoothly via `transform: translateY(-2px)` or `scale(1.02)` coupled with a transition timing of `300ms cubic-bezier(0.16, 1, 0.3, 1)`.

## Shapes

The form language is disciplined and modern:
- **Product Cards & Modal Containers:** Curved with a smooth 16px to 24px corner radius (`rounded-2xl` / `1.5rem`), softening large surfaces while matching the physical corner curvature of modern flagship smartphones.
- **Buttons & Form Fields:** Built with a standardized 12px corner radius (`rounded-xl` / `0.75rem`), creating a consistent tactile grip.
- **Chips, Pills, & Badges:** Use either full pill geometry (`rounded-full` / `9999px`) for category switches and status tags, or compact rounded corners (`rounded-md` / `6px`) for technical specs.
- **Device Viewports:** Product image containers use a dedicated 4:3 aspect ratio (`aspect-[4/3]`) with `object-fit: contain`, ensuring device frames are never cropped, distorted, or stretched.

## Components

### Buttons
- **Shape:** Softened tactile curve (`12px` / `0.75rem` radius).
- **Primary:** Electric Cyan-Cobalt background (`#0284c7`), Pure White text (`#ffffff`), 12px to 16px vertical padding, 24px to 32px horizontal padding. Bold 700 text weight.
- **Hover / Focus:** Transitions to `#0369a1` with `box-shadow: 0 10px 25px -5px rgba(2, 132, 199, 0.3)` and `transform: translateY(-1px)`.
- **Secondary / Ghost:** Glacial Ice background (`#f8fafc`), 1px Hairline Border (`#e2e8f0`), Midnight text (`#090d16`). On hover, transitions to border `#cbd5e1` and background `#f1f5f9`.

### Chips & Badges
- **Discount Badge:** Rose punch background (`#f43f5e`), white bold uppercase text (`10px`), `rounded-lg`, `padding: 3px 8px`.
- **Bestseller Badge:** Amber gold background (`#f59e0b`), white bold uppercase text (`10px`), `rounded-lg`, `padding: 3px 8px`.
- **Hardware Spec Chip:** Glacial Ice background (`#f8fafc`), 1px Border (`#e2e8f0`), Muted Slate text (`#64748b`), `rounded-md`, `padding: 2px 8px`.
- **Stock Status Indicator:** Emerald green dot (`#059669`) with uppercase tracking text for in-stock units; Rose red (`#f43f5e`) for depleted inventory.

### Cards / Containers
- **Corner Style:** `rounded-2xl` (16px to 24px).
- **Background:** Pure Optical White (`#ffffff`).
- **Shadow Strategy:** Resting `shadow-subtle` transitioning to `shadow-elevated` on card hover.
- **Border:** 1px Hairline Border (`#e2e8f0` at rest, transitioning to `#0284c7/50` on hover).
- **Internal Padding:** 16px (`p-4`) on mobile up to 24px (`p-6`) on desktop.

### Inputs / Fields
- **Style:** Glacial Ice background (`#f8fafc`), 1px Hairline Border (`#e2e8f0`), `rounded-xl` (12px), text color `#090d16`, placeholder `#94a3b8`.
- **Focus:** Border transitions to Electric Cyan-Cobalt (`#0284c7`) with `outline: none` and subtle electric ring `ring-2 ring-sky-500/20`.
- **Error State:** Border shifts to `#f43f5e` with red helper message text (`11px`).

### Navigation
- **Style:** Sticky top positioning (`sticky top-0 z-40`), semi-translucent backdrop blur (`backdrop-blur-md bg-white/95`), hairline bottom border (`#e2e8f0`).
- **Announcement Ribbon:** Top slim bar in Midnight Navy (`#0f172a`), white micro-copy, animated zap icon, and quick action link.
- **Cart & Wishlist Badges:** Electric blue circular pills with white bold counts, pulsing on state updates.

### Signature Component: The Flagship Studio Card
A hero-grade device showcase container featuring:
- Tonal gradient background from `#f8fafc` to `#ffffff`.
- Floating "Showroom Special" status pill in Midnight Ink with an electric zap icon.
- Unconstrained, high-resolution smartphone photography with an authentic device drop-shadow (`drop-shadow-2xl`).
- Hover-activated 5% physical scale zoom with smooth cubic bezier deceleration.
- Integrated bottom metadata cluster displaying manufacturer grade, silicon platform, real-time price, and quick-route anchor.

## Do's and Don'ts

### Do:
- **Do** use authentic manufacturer product photography isolated cleanly on white or transparent backgrounds with `object-fit: contain`.
- **Do** preserve the strict 10% usage ceiling for Electric Cyan-Cobalt (`#0284c7`), keeping it reserved for action intent.
- **Do** pair all numeric currency prices with the Indian Rupee symbol (`₹`) formatted with standard Indian commas (`₹1,54,900`).
- **Do** maintain 1px hairline border containment on all white cards against white and glacial surfaces.
- **Do** ensure all form inputs carry accessible placeholder text, explicit labels, and visible focus rings.

### Don't:
- **Don't** use cartoon-style smartphone illustrations, 3D toy models, or generic AI-generated device mockups under any circumstances.
- **Don't** stretch, crop, or distort smartphone product images across card viewports.
- **Don't** flood entire page sections with dark or neon background fills; keep surfaces bright, clinical, and editorial.
- **Don't** place heavy multi-layered glassmorphism or muddy blurry shadows behind content.
- **Don't** make unsupported dealership or certification claims; let authentic product presentation convey authority.

