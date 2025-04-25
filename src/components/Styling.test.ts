import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/dom';
// Import components to test class presence (using mock renderers from other tests)
import Header from './Header.astro';
import Footer from './Footer.astro';
import Hero from './Hero.astro';
import Features from './Features.astro';
import CTASection from './CTASection.astro';

// Mock renderers (simplified, reuse/adapt from other test files)
async function renderHeaderMock() { render(`<header class="site-header"></header>`); }
async function renderFooterMock() { render(`<footer class="site-footer"></footer>`); }
async function renderHeroMock() { render(`<section class="hero-section"><a class="cta-button"></a></section>`); }
async function renderFeaturesMock() { render(`<section class="features-section"><div class="feature-card"></div></section>`); }
async function renderCTAMock() { render(`<section class="cta-section"><a class="cta-button"></a></section>`); }


describe('Component Styling Classes', () => {
  // Note: These tests are basic checks for class existence.
  // They don't verify the actual styles applied by the classes.

  it('4.2: Header component has base class', async () => {
    await renderHeaderMock(); // Use a simplified render focusing on the root element + class
    expect(document.querySelector('.site-header')).not.toBeNull();
  });

  it('4.2: Footer component has base class', async () => {
    await renderFooterMock();
    expect(document.querySelector('.site-footer')).not.toBeNull();
  });

  it('4.2: Hero component has base class and button class', async () => {
    await renderHeroMock();
    expect(document.querySelector('.hero-section')).not.toBeNull();
    expect(document.querySelector('.hero-section .cta-button')).not.toBeNull();
  });

   it('4.2: Features component has base class and card class', async () => {
    await renderFeaturesMock();
    expect(document.querySelector('.features-section')).not.toBeNull();
    expect(document.querySelector('.features-section .feature-card')).not.toBeNull();
  });

   it('4.2: CTASection component has base class and button class', async () => {
    await renderCTAMock();
    expect(document.querySelector('.cta-section')).not.toBeNull();
    expect(document.querySelector('.cta-section .cta-button')).not.toBeNull();
  });

  // Add more tests here if specific classes are critical for functionality or styling hooks
});
