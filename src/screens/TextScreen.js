import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  FlatList,
  TextInput,
} from "react-native";

const TextsScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {password.length < 4 ? (
        <Text>Password must be longer than 5 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextsScreen;
