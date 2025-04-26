import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Messages from '../../src/pages/messages';
import { describe, expect, test } from 'vitest';

describe('/messages route', () => {
  test('should render Chatroom after 1 second', async () => {
    render(
      <MemoryRouter initialEntries={['/messages']}>
        <Messages />
      </MemoryRouter>,
    );

    // vi.advanceTimersByTime(1000); // خود Testing Library wrap با act رو انجام میده

    const chatroom = await screen.findByTestId('chatroom');
    expect(chatroom).toBeInTheDocument();
  });
});
