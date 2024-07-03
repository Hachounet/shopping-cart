import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as matchers from '@testing-library/jest-dom/matchers';
import router from '../routes/router.jsx';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

expect.extend(matchers);

const routerTest = (initialEntries = ['/']) => {
  return createMemoryRouter(router.routes, { initialEntries });
};

vi.mock('../components/Landing.jsx', () => ({
  __esModule: true,
  default: () => <div>Landing Component</div>,
}));

vi.mock('../components/LandingVenom.jsx', () => ({
  __esModule: true,
  default: () => <div>Landing Venom Component</div>,
}));

describe('Scroll Component test', () => {
  it('should change Landing to LandingVenom when scrolled', async () => {
    userEvent.setup();

    const testRouter = routerTest(['/']);

    render(<RouterProvider router={testRouter} />);

    expect(screen.getByText('Landing Component')).toBeVisible();

    await act(async () => {
      window.scrollY = 21;
      window.dispatchEvent(new Event('scroll'));
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
    });

    expect(screen.getByText('Landing Venom Component')).toBeVisible();
  });

  it('should change Landing to LandingVenom when scrolled and comeback to Landing', async () => {
    userEvent.setup();

    const testRouter = routerTest(['/']);

    render(<RouterProvider router={testRouter} />);

    expect(screen.getByText('Landing Component')).toBeVisible();

    await act(async () => {
      window.scrollY = 21;
      window.dispatchEvent(new Event('scroll'));
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
    });

    expect(screen.getByText('Landing Venom Component')).toBeVisible();

    await act(async () => {
      window.scrollY = -21;
      window.dispatchEvent(new Event('scroll'));
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
    });

    expect(screen.getByText('Landing Component')).toBeVisible();
  });
});
