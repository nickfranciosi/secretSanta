import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native'

const About = ({navigate}) => (
  <View style={styles.container}>
    <Text style={styles.title}>About</Text>
    <Button onPress={navigate.back} title='Go Back' />
  </View>
)

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center'
  },
  container: {
    paddingTop: 60
  }
})

export default About
