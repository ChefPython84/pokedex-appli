import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fetchPokemons, fetchPokemonDetails } from "../utils/api";
import PokemonListItem from "../components/PokemonListItem";
import LoadingIndicator from "../components/LoadingIndicator";

const limit = 10;

export default function HomeScreen() {
    const navigation = useNavigation();

    const [allPokemonDetails, setAllPokemonDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchAllPokemons = async () => {
            try {
                const pokemons = await fetchPokemons(limit, (page - 1) * limit);
                const pokemonDetails = await Promise.all(pokemons.map((pokemon) => fetchPokemonDetails(pokemon.url, { timeout: 10000 })));

                const uniqueNewDetails = pokemonDetails.filter(
                    (newDetail) => !allPokemonDetails.some((prevDetail) => prevDetail.id === newDetail.id)
                );

                setAllPokemonDetails((prevDetails) => [...prevDetails, ...uniqueNewDetails]);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchAllPokemons();
    }, [page]);

    const renderPokemon = ({ item }) => (
        <PokemonListItem item={item} onPress={() => navigation.navigate("PokemonDetail", { ...item })} />
    );

    const handleEndReached = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Pokédex</Text>
            </View>
            {loading ? (
                <LoadingIndicator />
            ) : (
                <FlatList
                    data={allPokemonDetails}
                    renderItem={renderPokemon}
                    numColumns={2}
                    keyExtractor={(item, index) => `add-${item.id}-${index}`}
                    contentContainerStyle={styles.flatListContainer}
                    onEndReachedThreshold={0.1}
                    onEndReached={handleEndReached}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
        marginTop: 40,
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
    title: {
        fontSize: 40,
        color: "#ffffff",
        fontWeight: "900",
        textTransform: "uppercase",
    },
    flatListContainer: {
        alignItems: "center",
    },
});
