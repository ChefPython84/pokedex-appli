import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text } from "react-native";

const PokemonListItem = ({ item, onPress }) => (
    <TouchableOpacity style={styles.pokemonContainer} onPress={onPress}>
        <Image style={styles.pokemonSprite} source={{ uri: item.image }} />
        <Text style={styles.pokemonTitle}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    pokemonContainer: {
        marginTop: 20,
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        borderRadius: 50,
        alignItems: "center",
        borderWidth: 5,
        borderColor: "#3757ba",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    pokemonTitle: {
        fontSize: 16,
        marginTop: 10,
        fontWeight: "bold",
    },
    pokemonSprite: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
});

export default PokemonListItem;
