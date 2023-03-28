import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { WeatherChart } from '@molecules/WeatherChart/WeatherChart';
import { Weather } from '@resources/Weather';
import { WeatherFilter } from '@organisms/WeatherFilter/WeatherFilter';
import { City, createWeatherForm } from '@forms/WeatherForm';
import {
  FUKUOKA,
  GeographicCoordinate,
  OSAKA,
  TOKYO,
} from '@resources/GeographicCoordinate';
import { WeatherRepository } from '@repositories/WeatherRepository';

const style = css`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const convertToGeo = (city: City): GeographicCoordinate => {
  switch (city) {
    case 'Tokyo':
      return TOKYO;
    case 'Osaka':
      return OSAKA;
    case 'Fukuoka':
      return FUKUOKA;
  }
};

export const WeatherReport = (): JSX.Element => {
  const [weathers, setWeathers] = useState<Weather[]>([]);
  const [form, updateForm] = useState(() => createWeatherForm());

  useEffect(() => {
    WeatherRepository.getWeathers(
      form.start,
      form.end,
      convertToGeo(form.city)
    ).subscribe((tmp) => setWeathers(tmp));
  }, [form.start, form.end, form.city]);

  return (
    <div css={style} data-testid="WeatherReport">
      <WeatherFilter form={form} onChange={updateForm} />
      <WeatherChart weathers={weathers} />
    </div>
  );
};
