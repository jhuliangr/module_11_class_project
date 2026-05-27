import { type Weather } from "./toWeather";

export type WeatherLocation = {
  name: string;
  latitude: number;
  longitude: number;
};

export type WeatherData = {
  condition: Weather;
  temperature: number;
  wind: number;
  humidity: number;
  uv: number;
};

export type DailyWeather = {
  day: string;
  temperatureMax: number;
  temperatureMin: number;
  condition: Weather;
};
