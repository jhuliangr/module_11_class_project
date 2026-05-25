import { type Weather } from "#shared/weather";

export type WeatherData = {
  condition: Weather;
  temperature: number;
  wind: number;
  humidity: number;
  uv: number;
};

export type Location = {
  name: string;
  latitude: number;
  longitude: number;
};
