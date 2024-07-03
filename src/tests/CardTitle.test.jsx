import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardTitle from '../components/CardTitle';
import useTitleData from '../hooks/CardTitleFetch';

vi.mock('../hooks/CardTitleFetch.jsx');

describe('Card Title component test', () => {
  const fetchID = 1;

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('correctly fetch and display title', () => {
    vi.mocked(useTitleData).mockReturnValue({
      textData: 'T-shirt',
      loading: false,
      error: null,
    });

    render(<CardTitle fetchID={fetchID} />);
    expect(screen.getByText(/T-shirt/i)).toBeInTheDocument();
  });

  it('display a network error', () => {
    vi.mocked(useTitleData).mockReturnValue({
      textData: '',
      loading: false,
      error: true,
    });
    render(<CardTitle fetchID={fetchID} />);
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  it('display a loading message', () => {
    vi.mocked(useTitleData).mockReturnValue({
      textData: '',
      loading: true,
      error: null,
    });
    render(<CardTitle fetchID={fetchID} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
