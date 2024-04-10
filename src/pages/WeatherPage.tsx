import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import SearchHeader from "components/searchHeader";
import SearchWeatherResult from "components/searchWeatherResult";

const WeatherPage: React.FC = () => {
  const successMessage = useSelector(
    (state: RootState) => state.weather.successMessage
  );

  const error = useSelector((state: RootState) => state.weather.error);

  React.useEffect(() => {
    if (!error && successMessage) {
      toast.success(successMessage);
    } else if (error && !successMessage) {
      toast.error(error);
    }
  }, [error, successMessage]);

  return (
    <>
      <SearchHeader />
      <SearchWeatherResult />
      <ToastContainer />
    </>
  );
};

export default WeatherPage;
