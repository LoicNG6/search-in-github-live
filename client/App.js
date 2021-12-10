import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button } from 'react-native';

class App extends React.Component {
  fetchUser = async (username) => {
    //  const response = await fetch(`http://40f1cdb711d6.ngrok.io/api/users/${username}`);

    const response = await fetch(`http://c713-2a01-cb00-d04-2400-588f-5af0-ce1d-f768.ngrok.io/api/users/${username}`);

    
    const data = await response.json();

    console.log("data => ", data);

    return data;
  }

  constructor(props) {
    super(props)
    this.state = { datas: [] }
  }


  loadDatas() {
    this.fetchUser("Loïc").then(data => this.setState({ datas: data.results }));
    console.log("this.state :: ",  this.state)
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