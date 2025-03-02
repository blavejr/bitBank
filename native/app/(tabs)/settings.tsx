import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class other extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>other</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
})