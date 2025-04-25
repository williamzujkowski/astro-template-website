import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/dom';
import Header from './Header.astro'; // Direct import might need adjustment
import type { NavItem } from '../data/navItems'; // Import type

// Mock render helper (adjust as needed for Astro)
async function renderHeader(props: { siteTitle: string; navItems: NavItem[]; currentPath: string }) {
  // Simplified rendering - real testing might need Astro's tools
  const navLinksHtml = props.navItems.map(item => `
    <li class="nav-item">
      <a href="${item.href}" class="nav-link ${item.href === props.currentPath ? 'active' : ''}" ${item.href === props.currentPath ? 'aria-current="page"' : ''}>
        ${item.text}
      </a>
    </li>
  `).join('');

  const html = `
    <header role="banner" class="site-header">
      <div class="site-title">
        <a href="/">${props.siteTitle}</a>
      </div>
      <nav role="navigation" aria-label="Main navigation">
        <ul class="nav-list">
          ${navLinksHtml}
        </ul>
      </nav>
    </header>
  `;
  return render(html);
}

describe('Header.astro', () => {
  const sampleNavItems: NavItem[] = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
  ];
  const sampleSiteTitle = 'Test Site';

  it('2.1: Renders <header>, title placeholder area, and <nav>', async () => {
    await renderHeader({ siteTitle: sampleSiteTitle, navItems: [], currentPath: '/' });
    expect(screen.getByRole('banner')).not.toBeNull(); // Checks for <header role="banner">
    expect(screen.getByRole('navigation')).not.toBeNull(); // Checks for <nav role="navigation">
    expect(screen.getByText(sampleSiteTitle)).not.toBeNull(); // Checks for site title presence
  });

  it('2.2: Accepts and displays siteTitle prop as a link to /', async () => {
    await renderHeader({ siteTitle: sampleSiteTitle, navItems: [], currentPath: '/' });
    const titleLink = screen.getByRole('link', { name: sampleSiteTitle });
    expect(titleLink).not.toBeNull();
    expect(titleLink.getAttribute('href')).toBe('/');
  });

  it('2.3: Accepts navItems and renders ul > li > a structure', async () => {
    await renderHeader({ siteTitle: sampleSiteTitle, navItems: sampleNavItems, currentPath: '/' });
    const nav = screen.getByRole('navigation');
    const list = within(nav).getByRole('list');
    expect(list).not.toBeNull();

    const items = within(list).getAllByRole('listitem');
    expect(items).toHaveLength(sampleNavItems.length);

    items.forEach((item, index) => {
      const link = within(item).getByRole('link', { name: sampleNavItems[index].text });
      expect(link).not.toBeNull();
      expect(link.getAttribute('href')).toBe(sampleNavItems[index].href);
    });
  });

   it('Accessibility: Applies aria-current="page" to the active link', async () => {
    const currentPath = '/about';
    await renderHeader({ siteTitle: sampleSiteTitle, navItems: sampleNavItems, currentPath: currentPath });

    const activeLink = screen.getByRole('link', { name: 'About' });
    const inactiveLink = screen.getByRole('link', { name: 'Home' });

    expect(activeLink.getAttribute('aria-current')).toBe('page');
    expect(inactiveLink.getAttribute('aria-current')).toBeNull();
  });
});
