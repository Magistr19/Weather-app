import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherRequest } from "redux/actions/weatherActions";
import "./index.scss";

const SearchHeader: React.FC = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState<string>("");

  const handleSubmitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchWeatherRequest(searchText));
  };

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <header className="SearchHeader">
      <form onSubmit={handleSubmitSearch}>
        <input
          className="SearchInput"
          value={searchText}
          onChange={handleChangeSearch}
          placeholder="Місто"
        ></input>
        <button className="SearchSubmit" type="submit">
          Пошук
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
