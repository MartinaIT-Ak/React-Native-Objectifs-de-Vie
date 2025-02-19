import React from 'react';
import { StyleSheet, View, FlatList, TextInput, Modal } from 'react-native';
import TodoItem from './ToDoItem';
import ModalEdit from './ModalEdit';
import { Button } from '@rneui/themed';
import Ripple from 'react-native-material-ripple';

function TodoList() {
    //Array des taches
    const [tasks, setTasks] = React.useState([
        {
            id: 1,
            text: "Faire les courses",
            completed: true
        },
        {
            id: 2,
            text: "Aller à la salle de sport 3 fois par semaine",
            completed: false
        },
        {
            id: 3,
            text: "Monter à plus de 5000m d altitude",
            completed: false
        },
        {
            id: 4,
            text: "Acheter mon premier appartement",
            completed: false
        },
        {
            id: 5,
            text: "Perdre 5 kgs",
            completed: false
        },
        {
            id: 6,
            text: "Gagner en productivité",
            completed: false
        },
        {
            id: 7,
            text: "Apprendre un nouveau langage",
            completed: false
        },
        {
            id: 8,
            text: "Faire une mission en freelance",
            completed: false
        },
        {
            id: 9,
            text: "Organiser un meetup autour de la tech",
            completed: false
        },
        {
            id: 10,
            text: "Faire un triathlon",
            completed: false
        },
        {
            id: 11,
            text: "Développer une appli en React Native",
            completed: false
        }
    ]);

    //Declaration des variables
    const [text, setText] = React.useState('');
    const [taskModal, setTaskModal] = React.useState();

    //Fonction d'ajout d'une tache
    function addTask(text) {
        //Creer un objet de la tache nouvelle
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };
        //Ajouter aux mes taches
        setTasks([...tasks, newTask]);
        //Vider l'input
        setText('');
    }

    //Gestion click sur le checkbox d'une tache
    function toggleCompleted(id) {
        //Changer la propriete 'completed' de tache en question
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {...task, completed: !task.completed};
            } else {
                return task;
            } 
        }));
    }

    //Fonction de suppression d'une tache
    function deleteTask(taskId) {
        //Enlever la tache de ma liste
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    //Fonction de modification du texte d'une tâche
    function editTask(newText) {
        //Modifier le texte de la tâche
        setTasks(tasks.map(task => {
            if(task.id == taskModal.id) {
                return {
                    ...task,
                    text: newText
                };
            } else {
                return task;
            }
        }))
    }

    //Fonction de gestion de task du modal
    function openModal(taskId) {
        setTaskModal( tasks.filter(task => task.id == taskId)[0] );
    }

    return (
        <View style={ styles.content }>
            <ModalEdit 
                task={ taskModal }
                editTask={ (newText) => editTask(newText) }
                />
            <FlatList 
                style={ styles.flatList }
                data= { tasks }
                keyExtractor={ task => task.id } 
                renderItem={({ item: task }) => 
                    <TodoItem
                        title={`${task.text}`}
                        task={task}
                        toggleCompleted= {() => toggleCompleted(task.id)}
                        deleteTask= {() => deleteTask(task.id)}
                        editTask={() => openModal(task.id)}
                    />
                }
            > 
            </FlatList>
            <View style={ styles.ajouter }>
                <TextInput
                    style={ styles.input_ajouter }
                    value={text}
                    onChangeText={setText}
                    placeholder="Tapez ici pour ajouter une tâche" 
                    keyboardType='default'
                    />
                <Ripple rippleColor='#fff'>
                    <Button 
                        title='Ajouter' 
                        onPress={() => addTask(text)}></Button>
                </Ripple>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        width: '100%',
        background: '#F5F7F8',
        flexDirection: 'column'
    },
    ajouter: {
        position: 'fixed',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    input_ajouter: { 
        height: 60,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        flex: 1,
        marginRight: 5
    },
    flatList: {
        height: '84%'
    }
});
            

export default TodoList;