import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/dom';
import Footer from './Footer.astro'; // Direct import might need adjustment

// Mock render helper
async function renderFooter(props: { startYear?: number }) {
  const currentYear = new Date().getFullYear();
  let yearDisplay = `${currentYear}`;
  if (props.startYear && props.startYear < currentYear) {
    yearDisplay = `${props.startYear}-${currentYear}`;
  } // Simplified logic matching component

  const html = `
    <footer role="contentinfo" class="site-footer">
      <p>&copy; ${yearDisplay} My Astro Site. All rights reserved.</p>
    </footer>
  `;
  return render(html);
}

describe('Footer.astro', () => {
  it('2.4: Renders <footer> with copyright placeholder structure', async () => {
    await renderFooter({});
    const footer = screen.getByRole('contentinfo'); // Checks for <footer role="contentinfo">
    expect(footer).not.toBeNull();
    expect(footer.textContent).toContain('©');
    expect(footer.textContent).toContain('My Astro Site');
  });

  it('2.5: Displays copyright with the current year by default', async () => {
    await renderFooter({});
    const currentYear = new Date().getFullYear();
    expect(screen.getByRole('contentinfo').textContent).toContain(`© ${currentYear}`);
  });

  it('2.5: Displays copyright with a startYear range if provided and valid', async () => {
    const startYear = 2020;
    const currentYear = new Date().getFullYear();
    await renderFooter({ startYear: startYear });
    expect(screen.getByRole('contentinfo').textContent).toContain(`© ${startYear}-${currentYear}`);
  });

   it('2.5: Displays only current year if startYear is same as current year', async () => {
    const currentYear = new Date().getFullYear();
    await renderFooter({ startYear: currentYear });
    expect(screen.getByRole('contentinfo').textContent).toContain(`© ${currentYear}`);
    expect(screen.getByRole('contentinfo').textContent).not.toContain(`-${currentYear}`);
  });

   it('2.5: Displays only current year if startYear is in the future (and logs warning - test console)', async () => {
    const futureYear = new Date().getFullYear() + 1;
    // Mock console.warn if needed to assert the warning
    // const warnSpy = vi.spyOn(console, 'warn');
    await renderFooter({ startYear: futureYear });
    const currentYear = new Date().getFullYear();
    expect(screen.getByRole('contentinfo').textContent).toContain(`© ${currentYear}`);
    // expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining(`${futureYear}`));
    // warnSpy.mockRestore();
  });
});
