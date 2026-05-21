import { useEffect, useState } from "react";

import { type Location } from "#shared/types";

type Props = {
  location: Location;
};

type Asd = {
  day: string;
  temperatureMax: number;
  temperatureMin: number;
  condition: number;
};

export const useGetDailyWeather = ({ location }: Props): Asd[] | undefined => {
  const [data, setData] = useState<Asd[]>();

  useEffect(() => {
    void (async () => {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code`,
      );
      const data = (await response.json()) as {
        daily: {
          time: string[];
          temperature_2m_max: number[];
          temperature_2m_min: number[];
          weather_code: number[];
        };
      };

      const forecast = [];
      for (let i = 0; i < data.daily.time.length; i++) {
        forecast.push({
          day: data.daily.time[i],
          temperatureMax: data.daily.temperature_2m_max[i],
          temperatureMin: data.daily.temperature_2m_min[i],
          condition: data.daily.weather_code[i],
        });
      }

      setData(forecast);
    })();
  }, [location]);

  return data;
};
