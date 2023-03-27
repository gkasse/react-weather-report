import React from 'react';
import { render, screen } from '@testing-library/react';
import { WeatherReport } from './WeatherReport';
import { vi } from 'vitest';

vi.mock('@organisms/WeatherFilter/WeatherFilter', () => ({
  WeatherFilter: vi.fn(() => null),
}));
vi.mock('@molecules/WeatherChart/WeatherChart', () => ({
  WeatherChart: vi.fn(() => null),
}));

describe('<WeatherReport />', () => {
  test('it should mount', () => {
    render(<WeatherReport />);

    const weatherReport = screen.getByTestId('WeatherReport');

    expect(weatherReport).toBeInTheDocument();
  });
});
