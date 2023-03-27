import { Expose, Transform } from 'class-transformer';
import { fromUnixTime } from 'date-fns';

export class Weather {
  @Transform((value) => fromUnixTime(value.value))
  time!: Date;

  @Expose({ name: 'temperature_2m_max', toClassOnly: true })
  maxTemperature = 0;

  @Expose({ name: 'temperature_2m_min', toClassOnly: true })
  minTemperature = 0;

  @Expose({ name: 'rain_sum', toClassOnly: true })
  totalRainfall = 0;
}
