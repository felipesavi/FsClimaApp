import React, { useState, useEffect } from 'react';
import { StatusBar, ImageBackground } from 'react-native';
import { StyleSheet, View } from 'react-native';
import WeatherComponent from './src/components/weatherComponent/WeatherComponent';
import Buscador from './src/components/buscador/Buscador';

export default function App() {
  const [searchCity, setSearchCity] = useState('');
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    // Puedes realizar operaciones adicionales aquí al cambiar la categoría
    // Por ejemplo, cargar una nueva imagen de fondo, etc.
  }, [categoria]);

  const handleSearch = (city) => {
    setSearchCity(city);
  };

  return (
    <ImageBackground
      source={getBackgroundImage(categoria)}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Buscador onSearch={handleSearch} />
        <WeatherComponent city={searchCity} getCategory={setCategoria} />
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const getBackgroundImage = (categoria) => {
  switch (categoria) {
    case 'thunderstorm':
      return require('./assets/thunderstorm.jpg');
    case 'rain':
      return require('./assets/rain.jpg');
    case 'light rain':
      return require('./assets/lightrain.jpg');
    case 'clear sky':
      return require('./assets/clearsky.jpg'); 
    case 'few clouds':
      return require('./assets/nubes.jpg');
    case 'overcast clouds':
        return require('./assets/brokenclouds.jpg');
    case 'broken clouds':
        return require('./assets/brokenclouds.jpg');

    
    
    default:
      return require('./assets/rain.jpg'); 
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});



