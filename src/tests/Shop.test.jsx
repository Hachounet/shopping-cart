import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import router from '../routes/router';
import * as matchers from '@testing-library/jest-dom/matchers';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

expect.extend(matchers);

const routerTest = (initialEntries = ['/']) => {
  return createMemoryRouter(router.routes, { initialEntries });
};

describe('Shop test component', () => {
  it('should display some cards', () => {
    const testRouter = routerTest(['/Shop']);

    render(<RouterProvider router={testRouter} />);
    expect(
      screen.getAllByRole('button', { name: 'Add to cart' }).length
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole('button', { name: 'Add to cart' }).length
    ).toEqual(8); // Depend of VarSetup.jsx
  });
});
