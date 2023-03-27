import React from 'react';
import { render, screen } from '@testing-library/react';
import { WeatherFilter } from './WeatherFilter';
import { WeatherForm } from '@forms/WeatherForm';
import { Mock, vi } from 'vitest';

describe('<WeatherFilter />', () => {
  let mockOnFormChanged: Mock;

  beforeEach(() => {
    mockOnFormChanged = vi.fn();
  });

  test('it should mount', () => {
    const data: WeatherForm = {
      city: 'Tokyo',
      end: new Date(),
      start: new Date(),
    };
    render(<WeatherFilter form={data} onChange={mockOnFormChanged} />);

    const weatherFilter = screen.getByTestId('WeatherFilter');

    expect(weatherFilter).toBeInTheDocument();
  });
});
