import { render } from '@testing-library/react';
import { WeatherChart } from './WeatherChart';
import { expect, Mock, vi } from 'vitest';
import { Chart } from 'react-chartjs-2';
import { Weather } from '@resources/Weather';
import { parseISO } from 'date-fns';

vi.mock('react-chartjs-2', () => ({ Chart: vi.fn(() => null) }));

describe('<WeatherChart />', () => {
  describe('propで渡されたデータを基に', () => {
    beforeEach(() => {
      const data: Weather[] = [
        {
          time: parseISO('2023-02-01'),
          totalRainfall: 100,
          minTemperature: 10.1,
          maxTemperature: 20.5,
        },
        {
          time: parseISO('2023-02-04'),
          totalRainfall: 80,
          minTemperature: 12.1,
          maxTemperature: 18.5,
        },
      ];
      render(<WeatherChart weathers={data} />);
    });

    it('気温の線グラフ及び降水量の棒グラフを表示する', () => {
      const [[actual]] = (Chart as Mock).mock.calls;
      expect(actual.data.datasets).toEqual([
        expect.objectContaining({
          data: [100, 80],
          label: '降水量',
          type: 'bar',
          yAxisID: 'rainfall',
        }),
        expect.objectContaining({
          data: [20.5, 18.5],
          label: '最高気温',
          type: 'line',
          yAxisID: 'temperature',
        }),
        expect.objectContaining({
          data: [10.1, 12.1],
          label: '最低気温',
          type: 'line',
          yAxisID: 'temperature',
        }),
      ]);
    });
  });
});
