import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator, FlatList, TouchableWithoutFeedback, Keyboard, StyleSheet,} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { searchPokemons, fetchPokemonDetails } from "../utils/api";

const SearchScreen = () => {
    const navigation = useNavigation();

    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const performSearch = async () => {
            if (searchTerm.trim() === '') {
                setSearchResults([]);
                return;
            }

            setIsLoading(true);

            try {
                const results = await searchPokemons(searchTerm);
                setSearchResults(results);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
                Alert.alert('Erreur', 'Erreur lors de la recherche du Pokémon.');
            } finally {
                setIsLoading(false);
            }
        };
        performSearch();
    }, [searchTerm]);

    const handleSelectPokemon = async (pokemonUrl) => {
        setIsLoading(true);

        try {
            const pokemonDetails = await fetchPokemonDetails(pokemonUrl, { timeout: 10000 });
            navigation.navigate('PokemonDetail', pokemonDetails);
        } catch (error) {
            console.error('Error fetching Pokemon data:', error);
            Alert.alert('Erreur', 'Erreur lors de la recherche du Pokémon.');
        } finally {
            setIsLoading(false);
            setSearchResults([]);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Recherche</Text>
                </View>
                <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Entrer le nom d'un pokémon..."
                    value={searchTerm}
                    onChangeText={(text) => setSearchTerm(text)}
                />
                </View>
                {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
                {searchResults.length === 0 && !isLoading && (
                    <Text style={styles.noResults}>Pas de résultats :(</Text>
                )}
                <FlatList
                    data={searchResults}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <Button
                            title={item.name}
                            onPress={() => handleSelectPokemon(item.url)}
                            color="#3757ba"
                        />
                    )}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    title: {
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
    input: {
        height: 50,
        width: '100%',
        borderColor: '#3757ba',
        borderWidth: 5,
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
        fontSize: 16,
    },
    inputContainer: {
        width: '80%',
        marginBottom: 5,
        marginTop: 30,
    },
    noResults: {
        fontSize: 16,
        color: 'red',
        marginTop: 20,
    },
});

export default SearchScreen;
