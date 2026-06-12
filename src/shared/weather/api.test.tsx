import { getApiLink } from "./api";

describe("Weather > api", () => {
  it("builds the forecast link for a location", () => {
    expect(
      getApiLink({
        name: "Barcelona",
        latitude: 41.385063,
        longitude: 2.173404,
      }),
    ).toEqual(
      "https://api.open-meteo.com/v1/forecast?latitude=41.385063&longitude=2.173404",
    );
  });

  it("works with negative coordinates", () => {
    expect(
      getApiLink({
        name: "Buenos Aires",
        latitude: -34.603722,
        longitude: -58.381592,
      }),
    ).toEqual(
      "https://api.open-meteo.com/v1/forecast?latitude=-34.603722&longitude=-58.381592",
    );
  });
});
