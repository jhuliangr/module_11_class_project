import { type WeatherLocation } from "./types";

export const getApiLink = (location: WeatherLocation): string =>
  `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}`;
