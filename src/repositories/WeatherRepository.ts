import axios from 'axios';
import { format } from 'date-fns';
import { Weather } from '@resources/Weather';
import { plainToInstance } from 'class-transformer';
import { GeographicCoordinate } from '@resources/GeographicCoordinate';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { map, Observable } from 'rxjs';

interface DailyResults {
  daily: {
    rain_sum: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: number[];
  };
}

export class WeatherRepository {
  private static readonly repository = axios.create({
    baseURL: 'https://archive-api.open-meteo.com/v1',
  });

  static getWeathers(
    startDate: Date,
    endDate: Date,
    geo: GeographicCoordinate
  ): Observable<Weather[]> {
    const request = this.repository.get<DailyResults>('/archive', {
      params: {
        latitude: geo.latitude,
        longitude: geo.longitude,
        start_date: format(startDate, 'yyyy-MM-dd'),
        end_date: format(endDate, 'yyyy-MM-dd'),
        models: 'best_match',
        daily: ['temperature_2m_max', 'temperature_2m_min', 'rain_sum'].join(
          ','
        ),
        timezone: 'Asia/Tokyo',
        timeformat: 'unixtime',
      },
    });

    return fromPromise(request).pipe(
      map((response) => response.data.daily),
      map((daily) => {
        return daily.time.reduce((tmp, _, idx) => {
          const data = {
            temperature_2m_min: daily.temperature_2m_min[idx],
            temperature_2m_max: daily.temperature_2m_max[idx],
            time: daily.time[idx],
            rain_sum: daily.rain_sum[idx],
          };
          tmp.push(plainToInstance(Weather, data));
          return tmp;
        }, [] as Weather[]);
      })
    );
  }
}
