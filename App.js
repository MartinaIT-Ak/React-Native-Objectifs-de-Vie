import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native';
import TodoList from './components/ToDoList';
import Background from './assets/fond.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.App_header}>
        <Text style={styles.text_header}>Ma To-Do Liste</Text>
      </View>
      <ImageBackground 
        source={Background}
        resizeMode='xenter'
        imageStyle={{opacity:0.3}}>
        <TodoList></TodoList>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: '1',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  App_logo: {
    height: '20',
    pointerEvents: 'none'
  },
  App_header: {
    flex: '1',
    width: '100%',
    height: '60',
    paddingVertical: '20',
    backgroundColor: '#282c34',
    alignItems: 'center',
    color: 'white'
  },
  App_link: {
    marginLeft: '1vh',
    color: '#61dafb',
  },
  header_text_container: {
    marginLeft: 'auto',
    marginRight: '5vh',
    display: 'flex',
    flexDirection: 'column',
  },
  text_header: {
    color: 'white',
    fontWeight: 700
  },
  modalButtons: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  modalButtons_button: {
    margin: '5px'
  },
  inputEdit: {
    width: '98%'
  }
});
