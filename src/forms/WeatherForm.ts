import { endOfMonth, setDate, subMonths } from 'date-fns';

export type City = 'Tokyo' | 'Osaka' | 'Fukuoka';

export interface WeatherForm {
  start: Date;
  end: Date;
  city: City;
}

export const createWeatherForm = (): WeatherForm => {
  return {
    city: 'Tokyo',
    end: endOfMonth(subMonths(new Date(), 1)),
    start: setDate(subMonths(new Date(), 3), 1),
  };
};
