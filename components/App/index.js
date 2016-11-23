import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AddPerson from "../AddPerson";
import PersonList from "../PersonList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.match = this.match.bind(this);
  }

  handleAdd(person) {
    this.setState({
      people: [...this.state.people, person]
    })
  }

  match() {
    //['joe', 'kevin', 'wyatt', 'murphey']
    //[['joe', 'kevin'], ['wyatt', 'murphey']]
  }

  render() {
    return (
      <View style={styles.container}>
        <AddPerson onAdd={this.handleAdd}/>
        <PersonList people={this.state.people} />
        <Button
          onPress={this.match}
          title="Match"
          color="#841584"
          disabled={this.state.people.length === 0 || this.state.people.length % 2 !== 0}
          accessibilityLabel="Match People"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
