import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardImage from '../components/CardImage';
import useImageUrl from '../hooks/CardImageFetch';

vi.mock('../hooks/CardImageFetch.jsx');

describe('CardImage component test ', () => {
  const fetchID = 1; // Example fetch ID

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('correctly fetch and display an img', () => {
    vi.mocked(useImageUrl).mockReturnValue({
      imageURL: 'https://example.com/image.jpg',
      loading: false,
      error: null,
    });

    render(<CardImage fetchID={fetchID} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img').src).toBe('https://example.com/image.jpg');
  });

  it('display an error', () => {
    vi.mocked(useImageUrl).mockReturnValue({
      imageURL: '',
      loading: false,
      error: true,
    });

    render(<CardImage fetchID={fetchID} />);
    expect(screen.getByText(/error/)).toBeInTheDocument();
  });

  it('display a loading message', () => {
    vi.mocked(useImageUrl).mockReturnValue({
      imageURL: '',
      loading: true,
      error: true,
    });

    render(<CardImage fetchID={fetchID} />);
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });
});
