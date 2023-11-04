import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const ColorCounter = ({ title, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Button title={`increase ${title}`} onPress={onIncrease} />
      <Button title={`decrease ${title}`} onPress={onDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({});
