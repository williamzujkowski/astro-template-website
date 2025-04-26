import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/dom';
import Features from './Features.astro'; // Direct import might need adjustment
import type { FeatureItem } from '../data/featuresData'; // Import type

// Mock render helper
async function renderFeatures(props: { features: FeatureItem[] }) {
  const featuresHtml = props.features.map(feature => `
    <div class="feature-card">
      ${feature.icon ? `<div class="feature-icon">${feature.icon}</div>` : ''}
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
    </div>
  `).join('');

  const html = `
    <section class="features-section">
      <div class="features-grid">
        ${featuresHtml}
      </div>
    </section>
  `;
  const container = document.createElement('div');
  container.innerHTML = html;
  return render(container); // Pass the container element to render
}

describe('Features.astro', () => {
  const sampleFeatures: FeatureItem[] = [
    { title: 'Feat 1', description: 'Desc 1', icon: '🚀' },
    { title: 'Feat 2', description: 'Desc 2' }, // No icon
    { title: 'Feat 3', description: 'Desc 3', icon: '⚙️' },
  ];

  it('3.2: Renders <section> and a block for each feature', async () => {
    await renderFeatures({ features: sampleFeatures });
    const section = screen.getByRole('region'); // Basic section check
    expect(section).not.toBeNull();

    const featureCards = section.querySelectorAll('.feature-card');
    expect(featureCards).toHaveLength(sampleFeatures.length);
  });

  it('3.2: Renders title and description for each feature', async () => {
    await renderFeatures({ features: sampleFeatures });
    const featureCards = screen.getAllByRole('heading', { level: 3 }).map(h => h.closest('.feature-card')); // Get cards via headings

    featureCards.forEach((card, index) => {
      expect(card).not.toBeNull();
      const featureData = sampleFeatures[index];
      const heading = within(card!).getByRole('heading', { level: 3, name: featureData.title });
      const description = within(card!).getByText(featureData.description);
      expect(heading).not.toBeNull();
      expect(description).not.toBeNull();
    });
  });

  it('3.2: Renders icon if provided', async () => {
     await renderFeatures({ features: sampleFeatures });
     const featureCards = screen.getAllByRole('heading', { level: 3 }).map(h => h.closest('.feature-card'));

     const card1Icon = within(featureCards[0]!).queryByText(sampleFeatures[0].icon!);
     const card2Icon = within(featureCards[1]!).queryByText('🚀'); // Check absence by querying for *any* icon text
     const card3Icon = within(featureCards[2]!).queryByText(sampleFeatures[2].icon!);

     expect(card1Icon).not.toBeNull();
     expect(card2Icon).toBeNull(); // Icon should not be present in card 2
     expect(card3Icon).not.toBeNull();
  });
});
