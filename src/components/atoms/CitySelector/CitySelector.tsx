import { City } from '@forms/WeatherForm';

interface CitySelectorProps {
  city: City;
  onChange: (city: City) => void;
}

export const CitySelector = ({
  city,
  onChange,
}: CitySelectorProps): JSX.Element => (
  <select
    className="px-8 py-2 outline-none border-2 border-gray-300 rounded-lg"
    value={city}
    onChange={(e) => onChange(e.target.value as City)}
    data-testid="CitySelector"
  >
    <option value="Tokyo">東京</option>
    <option value="Osaka">大阪</option>
    <option value="Fukuoka">福岡</option>
  </select>
);
