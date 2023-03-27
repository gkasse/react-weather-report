import React from 'react';
import { render, screen } from '@testing-library/react';
import { DatePicker } from './DatePicker';
import { parseISO } from 'date-fns';
import { Mock, vi } from 'vitest';

describe('<DatePicker />', () => {
  let mockedOnDateChanged: Mock;

  beforeEach(() => {
    mockedOnDateChanged = vi.fn();
  });

  test('it should mount', () => {
    render(
      <DatePicker
        value={parseISO('2023-03-25')}
        onChange={mockedOnDateChanged}
      />
    );

    const datePicker = screen.getByTestId('DatePicker');

    expect(datePicker).toBeInTheDocument();
  });
});
