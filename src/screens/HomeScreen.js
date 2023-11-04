import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to components demo"
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate("Lists")}>
        <Text>Go to list demo</Text>
        <Text>Go to list demo</Text>
        <Text>Go to list demo</Text>
      </TouchableOpacity> */}
      <Button
        onPress={() => navigation.navigate("Lists")}
        title="Go to List demo"
      />
      <Button
        onPress={() => navigation.navigate("Images")}
        title="Go to Image demo"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Counter demo"
      />
      <Button
        onPress={() => navigation.navigate("Colors")}
        title="Color demo"
      />
      <Button
        onPress={() => navigation.navigate("Squares")}
        title="Square demo"
      />
      <Button onPress={() => navigation.navigate("Texts")} title="Text demo" />
      <Button onPress={() => navigation.navigate("Boxes")} title="Box demo" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
