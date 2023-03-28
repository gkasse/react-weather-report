import { css } from '@emotion/react';
import { IntervalSelector } from '@molecules/IntervalSelector/IntervalSelector';
import { WeatherForm } from '@forms/WeatherForm';
import { useEffect, useState } from 'react';
import { Interval } from '@resources/Interval';
import { CitySelector } from '@atoms/CitySelector/CitySelector';

const style = css`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
  justify-content: center;
`;

interface WeatherFilterProps {
  form: WeatherForm;
  onChange: (form: WeatherForm) => void;
}

export const WeatherFilter = ({
  form,
  onChange,
}: WeatherFilterProps): JSX.Element => {
  const [interval, updateInterval] = useState<Interval>({
    start: form.start,
    end: form.end,
  });
  const [city, updateCity] = useState(form.city);

  useEffect(() => {
    onChange({ ...form, ...interval });
  }, [interval, city]);

  return (
    <div css={style} data-testid="WeatherFilter">
      <IntervalSelector interval={interval} onChange={updateInterval} />
      <CitySelector city={city} onChange={updateCity} />
    </div>
  );
};
