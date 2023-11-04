import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state - action.payload;
    default:
      return state;
  }
};

export const CounterScreen = () => {
  //   const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <View>
      <Button
        title="increase"
        onPress={() => dispatch({ type: "increment", payload: 1 })}
      ></Button>
      <Button
        title="decrease"
        onPress={() => dispatch({ type: "decrement", payload: 1 })}
      ></Button>
      <Text style={styles.headerStyle}>Current count: {state}</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 30,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default CounterScreen;
