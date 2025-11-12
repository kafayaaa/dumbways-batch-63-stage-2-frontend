import { useEffect, useState } from "react";
import { fetchWeather } from "../api/weather";

function useDebounce<T>(value: T, delay: number) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounceValue;
}

export function WeatherApp() {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState<{
    city: string;
    temp: number;
  } | null>(null);

  const [loading, setLoading] = useState(false);

  const debounceCity = useDebounce(city, 500);

  useEffect(() => {
    if (debounceCity) {
      setLoading(true);

      fetchWeather(debounceCity)
        .then((data) => setWeatherData(data))
        .finally(() => setLoading(false));
    }
  }, [debounceCity]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (city.trim() === "") {
        setError(true);
      } else {
        setError(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [city]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-slate-950 text-shadow-md text-shadow-slate-200">
        Weather APP
      </h1>
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={handleOnChange}
        className="border-2 border-slate-950 rounded-xl p-3 text-center"
      />

      <div
        className={`${
          loading || weatherData ? "flex" : "hidden"
        } w-52 flex-col justify-center items-center gap-3 p-5 rounded-2xl text-slate-50 bg-linear-to-tr ${
          error
            ? "from-rose-600 to-rose-400 shadow-rose-700 hover:shadow-rose-700 "
            : "from-emerald-600 to-emerald-400 shadow-emerald-700 hover:shadow-emerald-700 "
        } shadow-lg/35  transition-all ease-out duration-300 hover:scale-105 hover:shadow-lg/75 cursor-default`}
      >
        {loading && <p>Loading...</p>}
        {error && <p>Please input a city</p>}
        {weatherData && !loading && !error && (
          <>
            <h2 className="text-2xl">{weatherData.city}</h2>
            <p className="font-bold text-5xl">{weatherData.temp}°C</p>
          </>
        )}
      </div>
    </>
  );
}
