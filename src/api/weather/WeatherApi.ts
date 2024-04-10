import axios from "axios";

const API_KEY = "0c2e8f81ab15a1a31fa7274869dff32e";

const weatherApi = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/weather`,
});

export const getWeatherRequest = async (city: string) => {
  const response = await weatherApi.get(
    `?appid=${API_KEY}&q=${city}&units=metric`
  );
  return response.data;
};
