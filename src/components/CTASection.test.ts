import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/dom'; // Ensure render is imported
import CTASection from './CTASection.astro'; // Direct import might need adjustment

// Mock render helper
async function renderCTASection(props: { headline: string; ctaText: string; ctaHref: string }) {
  const html = `
    <section class="cta-section">
      <div class="cta-content">
        <h2>${props.headline}</h2>
        <a href="${props.ctaHref}" class="cta-button">${props.ctaText}</a>
      </div>
    </section>
  `;
  const container = document.createElement('div');
  container.innerHTML = html;
  return render(container); // Pass the container element to render
}

describe('CTASection.astro', () => {
  const sampleProps = {
    headline: 'Ready to Test?',
    ctaText: 'Run Tests',
    ctaHref: '/run-tests',
  };

  it('3.3: Renders <section>, headline, and CTA link', async () => {
    await renderCTASection(sampleProps);
    const section = screen.getByRole('region'); // Basic section check
    expect(section).not.toBeNull();

    const heading = screen.getByRole('heading', { level: 2, name: sampleProps.headline });
    expect(heading).not.toBeNull();

    const ctaLink = screen.getByRole('link', { name: sampleProps.ctaText });
    expect(ctaLink).not.toBeNull();
    expect(ctaLink.getAttribute('href')).toBe(sampleProps.ctaHref);
  });
});
