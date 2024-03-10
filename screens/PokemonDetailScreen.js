import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PokemonDetailScreen = ({ route }) => {
    const { name, image, id, types, abilities } = route.params;

    return (
        <View style={styles.container}>

            <Image style={styles.pokemonImage} source={{ uri: image }} />
            <View style={styles.pokemonDetails}>
                <Text style={styles.pokemonName}>{name}</Text>
                <Text>ID: {id}</Text>
                {types && (
                    <Text>Types : {types.length > 0 ? types.join(", ") : 'n/a'}</Text>
                )}
                {abilities && (
                    <Text>Capacités : {abilities.length > 0 ? abilities.join(", ") : 'n/a'}</Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8f8',
    },
    pokemonImage: {
        width: 350,
        height: 350,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: "white",

    },
    pokemonName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        textTransform: 'capitalize',
    },
    pokemonDetails: {
        marginTop: 20,
        borderRadius: 10,
        padding: 20,
        backgroundColor: '#fff',
        width: 350,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderColor: '#3757ba',
        borderWidth: 5,
    },
    titlePage: {
        fontSize: 40,
        color: "#ffffff",
        fontWeight: "900",
        textTransform: "uppercase",
    },
    titleContainer: {
        backgroundColor: "#fdcb06",
        alignItems: "center",
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
        borderColor: "#3757ba",
        borderStyle: "solid",
        borderWidth: 10,
        display: "absolute",
        width: "100%",
    },
});

export default PokemonDetailScreen;
