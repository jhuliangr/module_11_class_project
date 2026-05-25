import { useEffect, useState } from "react";

import { type Location } from "#shared/types";

import { getApiLink } from "#shared/utils";
import { toWeather, type Weather } from "../weather/toWeather";

type Props = {
  location: Location;
};

type DailyWeather = {
  day: string;
  temperatureMax: number;
  temperatureMin: number;
  condition: Weather;
};

export const useGetDailyWeather = ({
  location,
}: Props): DailyWeather[] | undefined => {
  const [data, setData] = useState<DailyWeather[]>();

  useEffect(() => {
    void (async () => {
      const response = await fetch(
        `${getApiLink(location)}&daily=temperature_2m_max,temperature_2m_min,weather_code`,
      );
      const data = (await response.json()) as {
        daily: {
          time: string[];
          temperature_2m_max: number[];
          temperature_2m_min: number[];
          weather_code: number[];
        };
      };

      const forecast: DailyWeather[] = [];
      for (let i = 0; i < data.daily.time.length; i++) {
        forecast.push({
          day: data.daily.time[i],
          temperatureMax: data.daily.temperature_2m_max[i],
          temperatureMin: data.daily.temperature_2m_min[i],
          condition: toWeather(data.daily.weather_code[i]),
        });
      }

      setData(forecast);
    })();
  }, [location]);

  return data;
};
