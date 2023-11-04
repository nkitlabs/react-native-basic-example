import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const randomRgb = () => {
  const red = Math.random() * 256;
  const blue = Math.random() * 256;
  const green = Math.random() * 256;

  return `rgb(${red}, ${blue}, ${green})`;
};

const ColorsScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="add a color"
        onPress={() => setColors([...colors, randomRgb()])}
      />
      <FlatList
        data={colors}
        renderItem={({ item }) => (
          <View style={{ height: 100, width: 100, backgroundColor: item }} />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorsScreen;
