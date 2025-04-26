// FallbackLoading.test.tsx
import { render, screen } from '@testing-library/react';
import FallbackLoading from '../../../src/components/ui/fallbackLoading';
import { describe, expect, test } from 'vitest';

describe('FallbackLoading component', () => {
  test('renders spinner and loading text', () => {
    render(<FallbackLoading />);

    // بررسی وجود spinner با نقش (role) مناسب
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();

    // بررسی وجود متن "Loading..."
    const loadingText = screen.getAllByText('Loading...');
    expect(loadingText.length).toBeGreaterThanOrEqual(1);
  });
});
