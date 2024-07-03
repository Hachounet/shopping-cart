import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';
import router from '../routes/router';
import * as matchers from '@testing-library/jest-dom/matchers';
import {
  MemoryRouter,
  createMemoryRouter,
  RouterProvider,
} from 'react-router-dom';

expect.extend(matchers);

const routerTest = (initialEntries = ['/']) => {
  return createMemoryRouter(router.routes, { initialEntries });
};

describe('Header component in App', () => {
  it('should be in DOM', () => {
    render(
      <MemoryRouter initialEntries={['/Shop']}>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('should have a "The Factory" text inside Header', () => {
    render(
      <MemoryRouter initialEntries={['/Shop']}>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText('The Factory')).toBeInTheDocument();
  });

  it('should go to homepage when button Home is clicked', async () => {
    // RouterProvider instead of MemoryRouter to see if Outlet containing Landing component with "Introducing the new" is displayed
    const user = userEvent.setup();
    const testRouter = routerTest(['/Shop']);

    render(<RouterProvider router={testRouter} />);
    const link = screen.getByRole('link', { name: 'Home button' });
    await user.click(link);
    expect(screen.getByText('Introducing the new')).toBeInTheDocument();
  });

  it('should go to shop page when button Shop is clicked', async () => {
    // RouterProvider instead of MemoryRouter to see if card items are displayed with Add to Cart btn
    const user = userEvent.setup();
    const testRouter = routerTest(['/']);
    render(<RouterProvider router={testRouter} />);
    const link = screen.getByRole('link', { name: 'Shop button' });
    await user.click(link);

    const addToCart = screen.getAllByText(/Add to cart/);
    expect(addToCart.length > 0).toBeTruthy();
    expect(addToCart[0]).toBeVisible();
  });

  it('should display cart-container when browser display Shop page', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/Shop']}>
        <Header />
      </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: 'Shop button' });
    await user.click(link);
    expect(screen.getByText(/items/)).toBeInTheDocument();
  });

  it('should display gotocheckout button when cart container is hovered ', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/Shop']}>
        <Header />
      </MemoryRouter>
    );
    const items = screen.getByText(/items/);

    await user.hover(items);

    const goToCheckoutButtons = screen.getAllByText(/Go to checkout/);
    expect(goToCheckoutButtons.length > 0).toBeTruthy();
    expect(goToCheckoutButtons[0]).toBeVisible();
  });

  it('should display numbers of items and price when props are passed to it', () => {
    // Props : items, sum

    render(
      <MemoryRouter initialEntries={['/Shop']}>
        <Header
          items={3}
          sum={151}
        />
      </MemoryRouter>
    );

    expect(screen.getByText(/3 items/)).toBeInTheDocument();
    expect(screen.getByText(/151/)).toBeInTheDocument();
  });
});
