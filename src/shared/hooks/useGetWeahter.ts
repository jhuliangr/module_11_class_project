import { useEffect, useState } from "react";

import { type Location, type WeatherData } from "#shared/types";

import { getApiLink } from "#shared/utils";
import { toWeather } from "../weather/toWeather";

type Props = {
  location: Location;
};

export const useGetWeahter = ({ location }: Props): WeatherData | undefined => {
  const [data, setData] = useState<WeatherData>();
  useEffect(() => {
    void (async () => {
      const response = await fetch(
        `${getApiLink(location)}&current=temperature_2m,is_day,weather_code,wind_speed_10m,relative_humidity_2m,uv_index`,
      );
      const data = (await response.json()) as {
        current: {
          weather_code: number;
          temperature_2m: number;
          wind_speed_10m: number;
          relative_humidity_2m: number;
          uv_index: number;
        };
      };

      setData({
        condition: toWeather(data.current.weather_code),
        temperature: data.current.temperature_2m,
        wind: data.current.wind_speed_10m,
        humidity: data.current.relative_humidity_2m,
        uv: data.current.uv_index,
      });
    })();
  }, [location]);

  return data;
};
