# TODO - Reusable Astro Homepage Template

This checklist follows the Test-Driven Development (TDD) plan for building the reusable Astro homepage. Each item represents a small, testable step.

## Phase 1: Project Setup & Basic Structure

### 1.1: Initialize Astro Project
- [ ] Initialize Astro project using `npm create astro@latest` (or equivalent).
- [ ] Choose minimal template and install dependencies.
- [ ] Verify basic setup: Run `npm run dev` and view the default page.

### 1.2: Basic Layout Component (`src/layouts/Layout.astro`)
- [ ] **(Test - Red)** Write test: Assert `Layout.astro` renders `<html>`, `<head>`, `<body>`.
- [ ] **(Test - Red)** Write test: Assert `Layout.astro` renders content via `<slot />`.
- [ ] **(Test - Red)** Write test: Assert `Layout.astro` accepts and renders a `title` prop in `<title>`.
- [ ] **(Code - Green)** Create `src/layouts/Layout.astro` with basic structure, `<slot />`, and `title` prop.
- [ ] **(Code - Refactor)** Add basic meta tags (charset, viewport) to `Layout.astro`.
- [ ] **(Integration)** Update `src/pages/index.astro` to use `Layout.astro`, passing a title.
- [ ] **(Test - Green)** Verify tests pass and `index.astro` renders correctly within the Layout.

## Phase 2: Core Navigation Components

### 2.1: Header Component Shell (`src/components/Header.astro`)
- [ ] **(Test - Red)** Write test: Assert `Header.astro` renders `<header>`, a title/logo placeholder, and `<nav>`.
- [ ] **(Code - Green)** Create `src/components/Header.astro` with the minimal tested structure.
- [ ] **(Code - Refactor)** Add appropriate ARIA roles (`banner`, `navigation`) to Header elements.
- [ ] **(Integration)** Import and use `Header` component inside `Layout.astro` (before `<slot />`).
- [ ] **(Test - Green)** Verify tests pass and header structure appears on `index.astro`.

### 2.2: Header Site Title/Logo
- [ ] **(Test - Red)** Update test: Assert `Header.astro` accepts and displays `siteTitle` prop (as a link to `/`).
- [ ] **(Code - Green)** Update `Header.astro` to accept and display `siteTitle` prop.
- [ ] **(Code - Refactor)** Add basic CSS classes for the site title/logo area.
- [ ] **(Integration)** Pass `siteTitle` prop from `Layout.astro` (or page) to `Header`.
- [ ] **(Test - Green)** Verify tests pass and site title appears correctly.

### 2.3: Header Navigation Links
- [ ] **(Test - Red)** Update test: Assert `Header.astro` accepts `navItems` array prop and renders `<ul><li><a>...</a></li></ul>` structure within `<nav>`.
- [ ] **(Code - Green)** Update `Header.astro` to accept and render `navItems` prop.
- [ ] **(Code - Refactor)** Add basic CSS classes for nav list (`<ul>`), items (`<li>`), and links (`<a>`).
- [ ] **(Integration)** Define sample `navItems` and pass them to the `Header` component.
- [ ] **(Test - Green)** Verify tests pass and navigation links appear correctly.

### 2.4: Footer Component Shell (`src/components/Footer.astro`)
- [ ] **(Test - Red)** Write test: Assert `Footer.astro` renders `<footer>` with copyright placeholder.
- [ ] **(Code - Green)** Create `src/components/Footer.astro` with the minimal tested structure.
- [ ] **(Code - Refactor)** Add ARIA role (`contentinfo`) to Footer.
- [ ] **(Integration)** Import and use `Footer` component inside `Layout.astro` (after `<slot />`).
- [ ] **(Test - Green)** Verify tests pass and footer structure appears on `index.astro`.

### 2.5: Footer Dynamic Copyright Year
- [ ] **(Test - Red)** Update test: Assert `Footer.astro` displays copyright with the *current* year (and handles optional `startYear` prop for range).
- [ ] **(Code - Green)** Update `Footer.astro` to calculate and display the current year (and optional range).
- [ ] **(Code - Refactor)** Add basic CSS classes for footer content.
- [ ] **(Integration)** Pass optional `startYear` prop if needed.
- [ ] **(Test - Green)** Verify tests pass and the correct copyright year/range appears.

## Phase 3: Homepage Content Sections

### 3.1: Hero Section Component (`src/components/Hero.astro`)
- [ ] **(Test - Red)** Write test: Assert `Hero.astro` renders `<section>`, `headline`, `subheadline`, and a CTA link/button based on props (`ctaText`, `ctaHref`).
- [ ] **(Code - Green)** Create `src/components/Hero.astro` implementing the structure and props.
- [ ] **(Code - Refactor)** Add CSS classes for layout, background, text styling, and CTA button.
- [ ] **(Integration)** Import and use `Hero` component in `src/pages/index.astro`, passing sample props.
- [ ] **(Test - Green)** Verify tests pass and Hero section renders correctly on the index page.

### 3.2: Features Section Component (`src/components/Features.astro`)
- [ ] **(Test - Red)** Write test: Assert `Features.astro` renders `<section>` and multiple feature items (title, description, optional icon) based on a `features` array prop.
- [ ] **(Code - Green)** Create `src/components/Features.astro` implementing the structure and props.
- [ ] **(Code - Refactor)** Add CSS classes for section layout (grid/flex) and individual feature cards.
- [ ] **(Integration)** Import and use `Features` component in `src/pages/index.astro`, passing a sample `features` array.
- [ ] **(Test - Green)** Verify tests pass and Features section renders correctly.

### 3.3: Call To Action (CTA) Section Component (`src/components/CTASection.astro`)
- [ ] **(Test - Red)** Write test: Assert `CTASection.astro` renders `<section>`, `headline`, and a prominent CTA link/button based on props.
- [ ] **(Code - Green)** Create `src/components/CTASection.astro` implementing the structure and props.
- [ ] **(Code - Refactor)** Add CSS classes for distinct styling and layout.
- [ ] **(Integration)** Import and use `CTASection` component in `src/pages/index.astro`, passing sample props.
- [ ] **(Test - Green)** Verify tests pass and CTA section renders correctly.

## Phase 4: Styling & Responsiveness

### 4.1: Basic Global Styles
- [ ] Create `src/styles/global.css` (or chosen convention).
- [ ] Add basic CSS resets (e.g., normalize.css or custom).
- [ ] Define base font styles (consider importing web fonts).
- [ ] Define CSS custom properties (variables) for colors, spacing, etc.
- [ ] **(Integration)** Import `global.css` into `Layout.astro`.
- [ ] **(Test - Visual/Class Check)** Verify global styles are applied (fonts change, margins reset, etc.).

### 4.2: Component-Scoped Styling
- [ ] **(Test - Red)** If needed, add tests verifying key elements within components have specific CSS classes.
- [ ] **(Code - Green/Refactor)** Add component-specific styles using `<style>` tags within `.astro` files for Header, Footer, Hero, Features, CTASection.
- [ ] **(Code - Refactor)** Utilize global CSS custom properties within component styles.
- [ ] **(Test - Visual/Test)** Verify component styles render correctly and tests for classes pass.

### 4.3: Basic Responsiveness
- [ ] **(Test - Conceptual/Manual)** Plan responsive strategy (breakpoints, mobile-first?). Test might check for existence of mobile-specific elements (e.g., hamburger icon placeholder).
- [ ] **(Code - Green)** Add CSS media queries to `global.css` and/or component styles.
- [ ] **(Code - Green)** Adjust layout (flex direction, grid columns), font sizes, element visibility etc., for different screen sizes.
- [ ] **(Code - Refactor)** Test thoroughly using browser developer tools across various viewport widths.
- [ ] **(Test - Visual)** Manually verify layout adapts correctly and remains usable on mobile, tablet, and desktop.

## Phase 5: Final Review & Cleanup
- [ ] Review all components for consistency and reusability.
- [ ] Check semantic HTML and basic accessibility (ARIA roles, alt text if images were added).
- [ ] Remove any placeholder code or unused variables/imports.
- [ ] Ensure all tests are passing.
- [ ] Build the project (`npm run build`) and preview the production output.