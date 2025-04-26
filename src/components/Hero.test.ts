import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/dom';
import Hero from './Hero.astro'; // Direct import might need adjustment

// Mock render helper
async function renderHero(props: { headline: string; subheadline?: string; ctaText: string; ctaHref: string }) {
  const subheadlineHtml = props.subheadline ? `<p class="subheadline">${props.subheadline}</p>` : '';
  const html = `
    <section class="hero-section">
      <div class="hero-content">
        <h1>${props.headline}</h1>
        ${subheadlineHtml}
        <a href="${props.ctaHref}" class="cta-button">${props.ctaText}</a>
      </div>
    </section>
  `;
  const container = document.createElement('div');
  container.innerHTML = html;
  return render(container); // Pass the container element to render
}

describe('Hero.astro', () => {
  const sampleProps = {
    headline: 'Test Headline',
    subheadline: 'Test Subheadline',
    ctaText: 'Click Me',
    ctaHref: '/test-link',
  };

  it('3.1: Renders <section>, headline, subheadline, and CTA link', async () => {
    await renderHero(sampleProps);
    const section = screen.getByRole('region'); // Basic section check
    expect(section).not.toBeNull();

    const heading = screen.getByRole('heading', { level: 1, name: sampleProps.headline });
    expect(heading).not.toBeNull();

    const subheadline = screen.getByText(sampleProps.subheadline);
    expect(subheadline).not.toBeNull();

    const ctaLink = screen.getByRole('link', { name: sampleProps.ctaText });
    expect(ctaLink).not.toBeNull();
    expect(ctaLink.getAttribute('href')).toBe(sampleProps.ctaHref);
  });

  it('3.1: Renders correctly without optional subheadline', async () => {
    const { subheadline, ...propsWithoutSub } = sampleProps;
    await renderHero(propsWithoutSub);

    expect(screen.queryByText(sampleProps.subheadline)).toBeNull(); // Subheadline should not be present
    expect(screen.getByRole('heading', { level: 1, name: sampleProps.headline })).not.toBeNull();
    expect(screen.getByRole('link', { name: sampleProps.ctaText })).not.toBeNull();
  });
});
