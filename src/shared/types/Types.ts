export type WeatherData = {
  condition: number;
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
