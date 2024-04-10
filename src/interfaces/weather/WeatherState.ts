import { WeatherType } from "./WeatherType";

export interface WeatherState {
  weather: WeatherType | null;
  successMessage: string | null;
  isLoading: boolean;
  error: string | null;
}
