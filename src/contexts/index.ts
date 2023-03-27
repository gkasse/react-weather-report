import { createContext } from 'react';
import { WeatherRepository } from '../repositories/WeatherRepository';

export const WeatherRepositoryContext = createContext<WeatherRepository | null>(
  null
);
