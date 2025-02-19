import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Modal, TextInput } from 'react-native';
import { Button } from '@rneui/themed';

function ModalEdit({ task, editTask }) {
    //Gestion de surbrillance de modal
    const [modalVisible, setModalVisible] = React.useState(false);
    const [taskModal, setTaskModal] = React.useState();
    const [newText, setNewText] = React.useState('');
    const titreModal = 'Modifier cette tâche ?';
    const textModal = 'Veuillez saisir vos modifications :';

    //Fonction d'affichage du modal
    useEffect(() => {
        if (task) {
            //Afficher le modal
            setTaskModal(task);
            setNewText(task.text);
            setModalVisible(true);
        }
    }, [task] );

    //Fonction de fermeture du modal
    function closeModal() {
        //Cacher le modal
        setModalVisible(false);
        //Ne plus sauvegarder la tache a supprimer
        setTaskModal(0);
        setNewText('');
    }

    function modifierTask() {
        editTask(newText);
        closeModal();
    }
    
    return (
        <View style={styles.centeredView}>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={ styles.modalTitre }>{titreModal}</Text>
                        <Text>{textModal}</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={ styles.inputEdit}
                                value={newText}
                                onChangeText={setNewText}/> 
                        </View>
                        <View style={styles.modalButtons}>
                            <Button 
                                title='Annuler' 
                                onPress={() => closeModal()} 
                                containerStyle={[styles.textStyle, styles.button]}></Button>
                            <Button 
                                title='Modifier' 
                                onPress={() => modifierTask()} 
                                containerStyle={[styles.textStyle, styles.button]}></Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      marginHorizontal: 10
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    modalTitre: {
        fontWeight: 700,
        borderBottomWidth: 1,
        marginBottom: 10
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInputContainer: {
        flexDirection: 'row'
    },
    inputEdit: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10
    }
  });

export default ModalEdit;