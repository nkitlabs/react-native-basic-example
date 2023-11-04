import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  return (
    <View>
      <Text style={styles.headerStyle}>Getting start with react native!</Text>
      <Text style={styles.subHeaderStyle}>My name is Stephan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 30,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentScreen;
