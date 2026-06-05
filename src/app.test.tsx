import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, test } from 'vitest';
import { App } from './app';

describe('App test', () => {
  test('should have application name', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const patient = screen.getByText('Application Name');
    expect(patient).toBeDefined();
  });
});
