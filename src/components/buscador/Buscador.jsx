import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

const Buscador = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        onSearch(city);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Buscar ciudad"
                placeholderTextColor="#A0A0A0"
                value={city}
                onChangeText={(text) => setCity(text)}
            />
            <Button title="Buscar" onPress={handleSearch} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 8,
        marginTop: 50,
    },
    input: {
        backgroundColor: '#fff',
        height: 40,
        width: 130,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        color: '#333333',
    },
});

export default Buscador;