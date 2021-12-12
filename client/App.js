import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button } from 'react-native';

class App extends React.Component {
  fetchUser = async (username) => {
    //  const response = await fetch(`http://40f1cdb711d6.ngrok.io/api/users/${username}`);
    console.log("bonjour");

    const response = await fetch(`http://be97-2a01-cb00-d04-2400-48b6-a8fa-8453-c72a.ngrok.io/api/users/${username}`);
    
    console.log("response => ", response);
    
    const data = await response.json();


    return data;
  }

  constructor(props) {
    super(props)
    this.state = { datas: [] }
  }


  loadDatas() {
    this.fetchUser("LoicNG6").then(data => console.table("data"));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello !?????</Text>
        <Button title='Rechercher' onPress={() => this.loadDatas()} />
        <Text>{this.state.datas}</Text>
        <StatusBar style="auto" />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App