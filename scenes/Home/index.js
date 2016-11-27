
import React from 'react'
import {
  View,
  Button,
  Text,
  StyleSheet
} from 'react-native'


const Home = ({navigate, scenes}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Home</Text>
    <Button onPress={() => navigate.to(scenes.about, "push")} title='Go To About' />
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

export default Home
