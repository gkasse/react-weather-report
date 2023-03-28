import React from 'react';
import { render, screen } from '@testing-library/react';
import { WeatherReport } from './WeatherReport';
import { afterEach, Mock, vi } from 'vitest';
import { WeatherRepository } from '@repositories/WeatherRepository';
import { of } from 'rxjs';
vi.mock('@repositories/WeatherRepository', () => ({
  WeatherRepository: {
    getWeathers: vi.fn(),
  },
}));

vi.mock('@organisms/WeatherFilter/WeatherFilter', () => ({
  WeatherFilter: vi.fn(() => null),
}));
vi.mock('@molecules/WeatherChart/WeatherChart', () => ({
  WeatherChart: vi.fn(() => null),
}));

describe('<WeatherReport />', () => {
  beforeEach(() => {
    (WeatherRepository.getWeathers as Mock).mockReturnValue(of([]));
  });

  test('it should mount', () => {
    render(<WeatherReport />);

    const weatherReport = screen.getByTestId('WeatherReport');
    expect(weatherReport).toBeInTheDocument();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
