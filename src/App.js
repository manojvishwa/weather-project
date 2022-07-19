import React, { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=15d1eb506644ece9e67e7552301529c6`;
      const response = await fetch(url);
      const res = await response.json();
      setCity(res.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg">Data not found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="locaion">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}cel</h1>
              <h3 className="tempmin_max">Min: {city.temp_min}cel | Max: {city.temp_max}cel</h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
