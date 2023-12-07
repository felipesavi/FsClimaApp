import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import { apiKey  } from '@env';


const WeatherComponent = ({ city, getCategory }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  


  useEffect(() => {
    const fetchWeather = async () => {
      try {
        if (!city) {
          setLoading(false);
          return;
        }

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error('No pudimos realizar la busqueda');
        }

        const data = await response.json();
        setWeather(data);
        getCategory(data.weather[0].description);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, ]);

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator size="large" color="#007BFF" />
      )}
      {weather && (
        <View>
          <Text style={styles.city}>{city}</Text>
          {weather.weather && weather.weather.length > 0 && (
            <Image
              style={styles.weatherIcon}
              source={{
                uri: `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`,
              }}
            />
          )}
          <Text style={styles.Temperatura}>{Math.round(weather.main.temp)}°C</Text>
          <Text style={styles.weatherInfo}>{weather.weather[0].description}</Text>
          <Text style={styles.weatherInfo}>Humedad: {weather.main.humidity}%</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    justifyContent: 'center',
    alignItems:'center',
    textAlign:'center',
    padding:40,
    paddingLeft:50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
    
  },
  city: {
    fontSize: 40,
    fontWeight:'200',
    marginBottom: 10,
    marginTop: 40,
    color:'#fff',
    textAlign:'center',
  },
  Temperatura: {
    textAlign:'center',
    fontSize: 55,
    fontWeight:'bold',
    marginBottom: 5,
    color:'#fff',
    
  },
  weatherInfo: {
    textAlign:'center',
    fontSize: 20,
    marginBottom: 5,
    color:'#fff',
    
  },
  weatherIcon: {
    width: 70,
    height: 70,
    position:'absolute',
    left:45,
    top:-5,
    zIndex:3,

  }
});

export default WeatherComponent;