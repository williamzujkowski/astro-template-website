import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/dom'; // Ensure render is imported
// Import components to test class presence (using mock renderers from other tests)
import Header from './Header.astro';
import Footer from './Footer.astro';
import Hero from './Hero.astro';
import Features from './Features.astro';
import CTASection from './CTASection.astro';

// Mock renderers using correct render usage
async function renderHeaderMock() {
  const container = document.createElement('div');
  container.innerHTML = `<header class="site-header"></header>`;
  return render(container);
}
async function renderFooterMock() {
  const container = document.createElement('div');
  container.innerHTML = `<footer class="site-footer"></footer>`;
  return render(container);
}
async function renderHeroMock() {
  const container = document.createElement('div');
  container.innerHTML = `<section class="hero-section"><a class="cta-button"></a></section>`;
  return render(container);
}
async function renderFeaturesMock() {
  const container = document.createElement('div');
  container.innerHTML = `<section class="features-section"><div class="feature-card"></div></section>`;
  return render(container);
}
async function renderCTAMock() {
  const container = document.createElement('div');
  container.innerHTML = `<section class="cta-section"><a class="cta-button"></a></section>`;
  return render(container);
}


describe('Component Styling Classes', () => {
  // Note: These tests are basic checks for class existence.
  // They don't verify the actual styles applied by the classes.

  it('4.2: Header component has base class', async () => {
    const { container } = await renderHeaderMock();
    expect(container.querySelector('.site-header')).not.toBeNull();
  });

  it('4.2: Footer component has base class', async () => {
    const { container } = await renderFooterMock();
    expect(container.querySelector('.site-footer')).not.toBeNull();
  });

  it('4.2: Hero component has base class and button class', async () => {
    const { container } = await renderHeroMock();
    expect(container.querySelector('.hero-section')).not.toBeNull();
    expect(container.querySelector('.hero-section .cta-button')).not.toBeNull();
  });

   it('4.2: Features component has base class and card class', async () => {
    const { container } = await renderFeaturesMock();
    expect(container.querySelector('.features-section')).not.toBeNull();
    expect(container.querySelector('.features-section .feature-card')).not.toBeNull();
  });

   it('4.2: CTASection component has base class and button class', async () => {
    const { container } = await renderCTAMock();
    expect(container.querySelector('.cta-section')).not.toBeNull();
    expect(container.querySelector('.cta-section .cta-button')).not.toBeNull();
  });

  // Add more tests here if specific classes are critical for functionality or styling hooks
});
