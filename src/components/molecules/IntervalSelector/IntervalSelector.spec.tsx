import React from 'react';
import { render } from '@testing-library/react';
import { IntervalSelector } from './IntervalSelector';
import { parseISO } from 'date-fns';
import { expect, Mock, vi } from 'vitest';
import { DatePicker } from '@atoms/DatePicker/DatePicker';

vi.mock('@atoms/DatePicker/DatePicker', () => ({
  DatePicker: vi.fn(),
}));

describe('<IntervalSelector />', () => {
  let mockOnIntervalChanged: Mock;

  beforeEach(() => {
    mockOnIntervalChanged = vi.fn();
  });

  describe('コンポーネントが描画された時', () => {
    beforeEach(() => {
      const data = {
        start: parseISO('2022-01-01'),
        end: parseISO('2022-02-01'),
      };

      render(
        <IntervalSelector interval={data} onChange={mockOnIntervalChanged} />
      );
    });

    it('期間の最初を示すDatePickerが表示される', () => {
      expect(DatePicker).toHaveBeenCalledWith(
        {
          value: parseISO('2022-01-01'),
          onChange: expect.any(Function),
        },
        expect.anything()
      );
    });
  });
});
