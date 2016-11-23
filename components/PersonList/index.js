import React, {PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const PersonList = ({ people }) => (
  <View>
    {people && people.map((person, i) => <Text key={i}>{person}</Text>)}
  </View>
);


PersonList.propTypes = {
  people: PropTypes.array,
};

export default PersonList;
