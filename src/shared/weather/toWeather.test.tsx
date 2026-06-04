import toWeather from "./toWeather";

describe("Weather > toWeather", () => {
  it("works with 0", () => {
    expect(toWeather(0)).toEqual("Clear");
  });

  it("works with 95 (thunderstorm)", () => {
    expect(toWeather(95)).toEqual("Thunderstorm");
  });

  it("works with 96 (thunderstorm with hail)", () => {
    expect(toWeather(96)).toEqual("Thunderstorm");
  });

  it("works with 99 (thunderstorm with heavy hail)", () => {
    expect(toWeather(99)).toEqual("Thunderstorm");
  });

  it("fails with -1", () => {
    expect(() => toWeather(-1)).toThrow();
  });
});
