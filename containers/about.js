import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native'

const About = ({navigateBack}) => (
  <View style={styles.container}>
    <Text style={styles.title}>About</Text>
    <Button onPress={navigateBack} title='Go Back' />
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
