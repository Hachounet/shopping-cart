import { describe, it, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '../components/Card';

vi.mock('../components/CardImage.jsx', () => {
  return {
    default: () => <p>Mocked Img</p>,
  };
});

vi.mock('../components/CardTitle.jsx', () => {
  return {
    default: () => <p>Mocked Title</p>,
  };
});

vi.mock('../components/CardPrice.jsx', () => {
  return {
    default: () => <p>Mocked Price</p>,
  };
});

describe('Card component test', () => {
  const fakeFn = vi.fn();

  const fetchID = 1;

  it('should be displayed', () => {
    render(
      <Card
        addItemToCart={fakeFn}
        fetchID={fetchID}
      />
    );

    expect(
      screen.getByRole('button', { name: 'Add to cart' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Increment button' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Decrement button' })
    ).toBeInTheDocument();
    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });

  it('should increment spinbutton via increment btn', async () => {
    userEvent.setup();

    render(
      <Card
        addItemToCart={fakeFn}
        fetchID={fetchID}
      />
    );
    expect(screen.getByRole('spinbutton').value).toBe('1');
    await act(async () => {
      await userEvent.click(
        screen.getByRole('button', { name: 'Increment button' })
      );
    });

    expect(screen.getByRole('spinbutton').value).toBe('2');
  });

  it('should decrement (2 to 1) spinbutton via decrement btn', async () => {
    userEvent.setup();

    render(
      <Card
        addItemToCart={fakeFn}
        fetchID={fetchID}
      />
    );

    expect(screen.getByRole('spinbutton').value).toBe('1');
    await act(async () => {
      await userEvent.click(
        screen.getByRole('button', { name: 'Increment button' })
      );
    });
    expect(screen.getByRole('spinbutton').value).toBe('2');

    await act(async () => {
      await userEvent.click(
        screen.getByRole('button', { name: 'Decrement button' })
      );
    });
    expect(screen.getByRole('spinbutton').value).toBe('1');
  });

  it('should not decrement less than 1 via decrement btn', async () => {
    userEvent.setup();

    render(
      <Card
        addItemToCart={fakeFn}
        fetchID={fetchID}
      />
    );

    expect(screen.getByRole('spinbutton').value).toBe('1');
    await act(async () => {
      await userEvent.click(
        screen.getByRole('button', { name: 'Decrement button' })
      );
    });
    expect(screen.getByRole('spinbutton').value).toBe('1');
  });

  it('should increment spinbutton with keyarrow', async () => {
    userEvent.setup();

    render(
      <Card
        addItemToCart={fakeFn}
        fetchID={fetchID}
      />
    );

    const spinbutton = screen.getByRole('spinbutton');

    expect(spinbutton.value).toBe('1');

    await act(async () => {
      await userEvent.click(spinbutton);
      expect(spinbutton).toHaveFocus();
      await userEvent.type(spinbutton, '{ArrowUp}');
      await userEvent.keyboard('[ArrowUp]');
    });

    expect(spinbutton.value).toBe('3');

    await act(async () => {
      await userEvent.keyboard('[ArrowDown]');
      await userEvent.keyboard('ArrowDown');
    });

    expect(spinbutton.value).toBe('1');
  });

  it('should called addItemToCart fn', async () => {
    userEvent.setup();

    render(
      <Card
        addItemToCart={fakeFn}
        fetchID={fetchID}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: 'Add to cart' }));
    expect(fakeFn).toHaveBeenCalled();
  });
});
