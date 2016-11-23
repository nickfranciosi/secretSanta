/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

class AddPerson extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleAdd = this.handleAdd.bind(this);
    this.clearText = this.clearText.bind(this);
  }


  handleAdd() {
    this.input
    this.props.onAdd(this.state.text)
    this.clearText();
  }

  clearText() {
    this.setState({ text: ''});
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        onSubmitEditing={this.handleAdd}
        value={this.state.text}
        placeholder="Add a name to the list"
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default AddPerson;
