
import React from 'react'
import {
  View,
  Button,
  Text,
  StyleSheet
} from 'react-native'

const route = {
  type: 'push',
  route: {
    key: 'about',
    title: 'About'
  }
}

const Home = ({navigateTo}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Home</Text>
    <Button onPress={() => navigateTo(route)} title='Go To About' />
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
