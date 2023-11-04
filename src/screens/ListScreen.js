import React from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 20 },
    { name: "Friend #3", age: 20 },
    { name: "Friend #4", age: 20 },
    { name: "Friend #5", age: 20 },
    { name: "Friend #6", age: 20 },
    { name: "Friend #7", age: 20 },
    { name: "Friend #8", age: 20 },
    { name: "Friend #9", age: 20 },
  ];

  return (
    <View>
      <Text>List Screen</Text>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
  },
});

export default ListScreen;
