import React from 'react';
import { render, screen } from '@testing-library/react';
import { CitySelector } from './CitySelector';
import { Mock } from 'vitest';

describe('<CitySelector />', () => {
  let mockCityOnChanged: Mock;

  beforeEach(() => {
    mockCityOnChanged = vi.fn();
  });

  test('it should mount', () => {
    render(<CitySelector city={'Tokyo'} onChange={mockCityOnChanged} />);

    const buttonD = screen.getByTestId('CitySelector');

    expect(buttonD).toBeInTheDocument();
  });
});
