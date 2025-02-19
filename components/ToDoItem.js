import { StyleSheet, View, Text } from 'react-native';
import { CheckBox, Button, Icon } from '@rneui/themed';

function TodoItem({ task, toggleCompleted, deleteTask, editTask }) {
    //Gestion click sur le case a cocher
    function handleChange() {
        toggleCompleted(task.id);
    }

    function buttonSuppressionClick() {
        deleteTask(task.id);
    }

    function buttonModificationClick() {
        editTask(task.id);
    }
    
    return (
        <View style={{ marginBottom: 10 }}>
            <View style={task.completed ? styles.todo_item_completed : styles.todo_item }>
                <View style={ styles.todo_item_left_part }>
                    <CheckBox 
                        checked={task.completed}
                        onPress={() => handleChange()}
                        style={styles.action_checkbox}
                        containerStyle={styles.action}
                    />
                    <Text style={task.completed ? styles.todo_item_completed_p : styles.todo_item_text}>{task.text}</Text> 
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Button
                        title=''
                        type='outlined'
                        style={styles.action}
                        onPress={() => buttonModificationClick()}>
                            <Icon name='edit' color='#337cf2'/>
                    </Button>
                    <Button
                        title=''
                        type='outlined'
                        style={styles.action}
                        onPress={() => buttonSuppressionClick()}>
                            <Icon type='font-awesome' name='close' color='red'/>
                    </Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    action: {
        backgroundColor: 'transparent'
    },
    action_checkbox: {
        width: '20'
    },
    todo_item: {
        flexDirection : 'row',
        border: '1 solid black',
        borderRadius: '20',
        margin: '10 auto',
        justifyContent: 'space-between'
     },
    todo_item_completed: {
        flexDirection : 'row',
        border: '1 solid black',
        borderRadius: '20',
        margin: '10 auto',
        justifyContent: 'space-between',
        backgroundColor: '#C0EBA6'
    },
    todo_item_completed_p: {
        color: '#888',
        textDecorationLine: 'line-through',
        width: '60%',
        flexShrink: 1 
    },
    todo_item_text : {
        width: '60%',
        flexShrink: 1 
    },
    todo_item_left_part: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default TodoItem;