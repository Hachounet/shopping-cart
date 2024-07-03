import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardPrice from '../components/CardPrice';
import usePriceData from '../hooks/CardPriceFetch';

vi.mock('../hooks/CardPriceFetch.jsx');

describe('CardPrice component test', () => {
  const fetchID = 1;

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('correctly fetch and display a price', () => {
    vi.mocked(usePriceData).mockReturnValue({
      price: 15,
      loading: false,
      error: null,
    });

    const fnMock = vi.fn();

    render(
      <CardPrice
        retrieveItemPrice={fnMock}
        fetchID={fetchID}
      />
    );
    expect(screen.getByText(/15/)).toBeInTheDocument();
  });

  it('display a network error', () => {
    vi.mocked(usePriceData).mockReturnValue({
      price: '',
      loading: false,
      error: true,
    });

    const fnMock = vi.fn();

    render(
      <CardPrice
        retrieveItemPrice={fnMock}
        fetchID={fetchID}
      />
    );
    expect(screen.getByText(/error/)).toBeInTheDocument();
  });

  it('display a loading message', () => {
    vi.mocked(usePriceData).mockReturnValue({
      price: '',
      loading: true,
      error: null,
    });

    const fnMock = vi.fn();

    render(
      <CardPrice
        retrieveItemPrice={fnMock}
        fetchID={fetchID}
      />
    );
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });
});
