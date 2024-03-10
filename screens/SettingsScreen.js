import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Button } from 'react-native';

const SettingsScreen = () => {
    const [LocationModal, setLocationModalVisible] = useState(false);
    const [CameraModal, setCameraModalVisible] = useState(false);
    const [GalleryModal, setGalleryModalVisible] = useState(false);

    const openLocationModal = () => {
        setLocationModalVisible(true);
    };

    const closeLocationModal = () => {
        setLocationModalVisible(false);
    };

    const openCameraModal = () => {
        setCameraModalVisible(true);
    };

    const closeCameraModal = () => {
        setCameraModalVisible(false);
    };

    const openGalleryModal = () => {
        setGalleryModalVisible(true);
    };

    const closeGalleryModal = () => {
        setGalleryModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titlePage}>Paramètres</Text>
            </View>
            <View style={styles.settingSection}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Droits du téléphone</Text>
                <TouchableOpacity style={styles.button} onPress={openLocationModal}>
                    <Text style={styles.buttonText}>Demander l'accès à la localisation</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Caméra et Galerie</Text>
                <TouchableOpacity style={styles.button} onPress={openCameraModal}>
                    <Text style={styles.buttonText}>Demander l'accès à la caméra</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={openGalleryModal}>
                    <Text style={styles.buttonText}>Demander l'accès à la galerie d'images</Text>
                </TouchableOpacity>
            </View>

            <Modal visible={LocationModal} onRequestClose={closeLocationModal} transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Demande d'accès à la localisation</Text>
                        <Text style={styles.modalText}>
                            Afin d'utiliser la fonctionnalité de la localisation, veuillez autoriser
                            l'accès dans les paramètres de votre téléphone.
                        </Text>
                        <Button title="Fermer" onPress={closeLocationModal} />
                    </View>
                </View>
            </Modal>

            <Modal visible={CameraModal} onRequestClose={closeCameraModal} transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Demande d'accès à la caméra</Text>
                        <Text style={styles.modalText}>
                            Afin d'utiliser la fonctionnalité de la caméra, veuillez autoriser l
                            'accès dans les paramètres de votre téléphone.
                        </Text>
                        <Button title="Fermer" onPress={closeCameraModal} />
                    </View>
                </View>
            </Modal>

            <Modal visible={GalleryModal} onRequestClose={closeGalleryModal} transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Demande d'accès à la galerie d'images</Text>
                        <Text style={styles.modalText}>
                            Afin de sélectionner des images, veuillez autoriser l'accès à votre galerie
                            dans les paramètres de votre téléphone.
                        </Text>
                        <Button title="Fermer" onPress={closeGalleryModal} />
                    </View>
                </View>
            </Modal>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        marginTop: 40,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button: {
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        backgroundColor: '#fdcb06',
        borderWidth: 5,
        borderColor: '#3757ba',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    modalText: {
        fontSize: 16,
        marginBottom: 15,
        textAlign: 'center',
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
    settingSection: {
        marginTop: 15,
        marginBottom: 20,
        paddingLeft: 16,
        paddingRight: 16,
    },
});

export default SettingsScreen;
