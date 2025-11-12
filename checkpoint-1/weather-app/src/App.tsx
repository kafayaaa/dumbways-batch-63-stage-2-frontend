import "./App.css";
import { WeatherApp } from "./components/WeatherApp";

function App() {
  return (
    <>
      <div className="w-full h-screen p-0 m-0 bg-slate-50 flex flex-col justify-center items-center gap-8">
        <WeatherApp />
      </div>
    </>
  );
}

export default App;
