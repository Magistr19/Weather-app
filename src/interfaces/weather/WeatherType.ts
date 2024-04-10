export interface WeatherType {
  weather: {
    icon: string;
    description: string;
  }[];
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
}
