import { css } from '@emotion/react';
import { useContext, useEffect, useState } from 'react';
import { WeatherRepositoryContext } from '../../../contexts';
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
  const repository = useContext(WeatherRepositoryContext);
  const [weathers, setWeathers] = useState<Weather[]>([]);
  const [form, updateForm] = useState(createWeatherForm);

  useEffect(() => {
    (async () => {
      const weathers = await repository?.getWeathers(
        form.start,
        form.end,
        convertToGeo(form.city)
      );
      setWeathers(() => weathers ?? []);
    })();
  }, [form]);

  return (
    <div css={style} data-testid="WeatherReport">
      <WeatherFilter form={form} onChange={updateForm} />
      <WeatherChart weathers={weathers} />
    </div>
  );
};
