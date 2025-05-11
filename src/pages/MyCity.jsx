import React, { useState, useEffect } from 'react';
import city from "./photos/city.jpg";

function MyCity() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '67c48aa35d044c7883d74122250605';
  const CITY = 'Vasylkiv';
  const COUNTRY = 'UA';

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`
        );
        if (!response.ok) {
          throw new Error('Не вдалося отримати дані погоди');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [CITY, API_KEY]);

  if (loading) return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#4b001e'
    }}>
      <h2>Завантаження...</h2>
    </div>
  );

  if (error) return 
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#4b001e'
  }}>
     Помилка: {error} </div>;

  return (
    <div className="container">
      <h1>Васильків</h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '30px',
          flexWrap: 'wrap',
          marginTop: '20px'
        }}>

        <div style={{ flex: 1 }}>
        <div className="container2"> 
          <p style={{ textAlign: 'left' }}>
            Васильків – одне з найдавніших міст України, розташоване в 36 км від Києва на мальовничих берегах річки Стугни. 
            Територія міста була заселена ще в епоху пізнього палеоліту. Місто Васильків було засноване у 988 році князем
            Київським Володимиром Святославовичем, як один з украплених пунктів на річці Стугні для захисту Києва від набігів кочівників.
            Назва міста походить від прийнятого при хрещенні імені князя Володимира – Василь і тому воно спочатку називалося Василеве.
            <br /> На сьогоднішній день в Василькові проживає 37 575 осіб.
          </p>
          </div>
        </div>

        <img
          src={city}
          alt="Моє місто"
          style={{
            width: "200px",
            minWidth: "200px",
            height: "auto",
            borderRadius: "20px"
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '30px',
          marginTop: '15px',
          flexWrap: 'wrap',
        }}>

        <div style={{ flex: 1 }}>
          <h2>Карта міста</h2>
          <iframe
            title="Карта Василькова"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40593.16381725127!2d30.312934091025607!3d50.186139123066404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4a54ae11a1977%3A0x54c9293ae4ee072f!2z0JLQsNGB0LjQu9GM0LrRltCyLCDQmtC40ZfQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCAwODYwMA!5e0!3m2!1suk!2sua!4v1746974885420!5m2!1suk!2sua"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"/>
        </div>

        <div className="container2" style={{ flex: 1, textAlign: 'left' }}>
          <h3>Поточна погода: {CITY}, {COUNTRY}</h3>
          <p>Температура: {weatherData.current.temp_c}°C</p>
          <p>Опис: {weatherData.current.condition.text}</p>
          <p>Координати: {weatherData.location.lat}, {weatherData.location.lon}</p>
        </div>
      </div>
    </div>
  );
};

export default MyCity;
