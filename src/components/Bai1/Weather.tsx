import axios from "axios";
import {useState} from "react";
import "./Weather.css";
interface Weather {
  temp_C: string;
  weatherDesc: {value: string}[];
}

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`https://wttr.in/${city}?format=j1`);
      setWeather(res.data.current_condition[0]);
    } catch {
      setError("Không tìm thấy thành phố!");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="container">
    <h1>⛅ Thời tiết</h1>

    <div style={{ marginBottom: "20px" }}>
      <input 
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Nhập tên thành phố..."
      />
      <button onClick={fetchWeather}>Xem</button>
    </div>

    {loading && <p>Đang tải...</p>}
    {error && <p style={{ color: "#ffdddd" }}>{error}</p>}

    {weather && (
      <div className="weather-info">
        <h3>Nhiệt độ: {weather.temp_C}°C</h3>
        <p>{weather.weatherDesc[0].value}</p>
      </div>
    )}
  </div>
);
}
