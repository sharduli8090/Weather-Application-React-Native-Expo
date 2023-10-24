import { Text, View } from "react-native";
import React, { useState } from "react";
import Weather from "./src/components/Weather";
import { useEffect } from "react";

export default function App() {
  const [isLoading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);

  useEffect(() => {
    const fetchWeather = async (city) => {
      const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "060a0e62b3msh3b4dceebd52177fp1e5142jsn9222f9a719e6",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (result) {
          setWeatherCondition(result.current.condition.text);
          setTemperature(result.current.temp_c);
          setLocation(result.location.country);
          setRegion(result.location.region);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeather("delhi");
  }, []);

  return (
    <>
      {isLoading ? (
        <Text>Fetching The Weather</Text>
      ) : (
        <Weather
          weather={weatherCondition}
          temperature={temperature}
          location={location}
          region={region}
        />
      )}
    </>
  );
}
