import React from 'react';
import { render, screen } from '@testing-library/react';
import { CitySelector } from './CitySelector';
import { Mock } from 'vitest';

describe('<CitySelector />', () => {
  let mockCityOnChanged: Mock;

  beforeEach(() => {
    mockCityOnChanged = vi.fn();
  });

  test('select要素がレンダリングされる', () => {
    render(<CitySelector city={'Tokyo'} onChange={mockCityOnChanged} />);

    const citySelector = screen.getByTestId('CitySelector');
    expect(citySelector).toBeInTheDocument();
    expect(citySelector).toBeInstanceOf(HTMLInputElement);
  });
});
