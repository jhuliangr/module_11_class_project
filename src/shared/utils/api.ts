import { type Location } from "#shared/types";

export const getApiLink = (location: Location): string =>
  `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}`;
