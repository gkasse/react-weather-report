import { css } from '@emotion/react';
import { Weather } from '@resources/Weather';
import { Chart } from 'react-chartjs-2';
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as Library,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { format } from 'date-fns';

Library.register(
  LineElement,
  LineController,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
  BarController,
  BarElement
);

const style = css`
  width: 1200px;
  height: 600px;
`;

interface WeatherChartProps {
  weathers: Weather[];
}

export const WeatherChart = ({ weathers }: WeatherChartProps): JSX.Element => {
  const data: ChartData<'line' | 'bar'> = {
    labels: weathers.map((weather) => format(weather.time, 'yyyy-MM-dd')),
    datasets: [
      {
        label: '降水量',
        type: 'bar',
        data: weathers.map((weather) => weather.totalRainfall),
        borderColor: 'rgba(0 230, 255, 1)',
        backgroundColor: 'rgba(0, 230, 255, 0.4)',
        yAxisID: 'rainfall',
      },
      {
        label: '最高気温',
        type: 'line',
        data: weathers.map((weather) => weather.maxTemperature),
        borderColor: 'rgba(255, 0, 0, 1)',
        backgroundColor: 'rgba(255, 0, 0, 1)',
        yAxisID: 'temperature',
      },
      {
        label: '最低気温',
        type: 'line',
        data: weathers.map((weather) => weather.minTemperature),
        borderColor: 'rgba(0, 0, 255, 1)',
        backgroundColor: 'rgba(0, 0, 255, 1)',
        yAxisID: 'temperature',
      },
    ],
  };

  const options: ChartOptions = {
    responsive: true,
    aspectRatio: 16 / 9,
    maintainAspectRatio: false,
    scales: {
      temperature: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      rainfall: {
        type: 'linear',
        display: true,
        position: 'right',
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label(tooltipItem): string | string[] | void {
            switch (tooltipItem.dataset.yAxisID) {
              case 'temperature':
                return `${tooltipItem.dataset.label}: ${tooltipItem.raw} ℃`;
              case 'rainfall':
                return `${tooltipItem.dataset.label}: ${tooltipItem.raw} mm`;
              default:
                return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
            }
          },
        },
      },
    },
  };

  return (
    <div
      css={style}
      className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-300 dark:border-gray-500"
    >
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};
