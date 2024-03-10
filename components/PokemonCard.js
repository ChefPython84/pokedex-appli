import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";

const PokemonCard = ({ item, onPress, isTeamCard, onRemoveFromTeam }) => (
    <TouchableOpacity
        style={[styles.cardContainer, isTeamCard && styles.teamCardContainer]}
        onPress={onPress}
    >
        <View style={styles.cardContent}>
            <Image style={styles.thumbnail} source={{ uri: item.thumbnail }} />
            <Text style={styles.pokemonName}>{item.name}</Text>
        </View>
        {isTeamCard && (
            <TouchableOpacity style={styles.removeButton} onPress={() => onRemoveFromTeam(item)}>
                <Text style={styles.removeButtonText}>Retirer</Text>
            </TouchableOpacity>
        )}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#fdcb06",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        borderColor: "#3757ba",
        borderWidth: 5,
    },
    teamCardContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    thumbnail: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    pokemonName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        textTransform: "capitalize",
    },
    removeButton: {
        backgroundColor: "red",
        padding: 5,
        borderRadius: 5,
    },
    removeButtonText: {
        color: "white",
    },
});

export default PokemonCard;
