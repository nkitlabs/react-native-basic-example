import React, { useReducer, useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import { ColorCounter } from "../components/ColorCounter";

const randomRgb = () => {
  const red = Math.random() * 256;
  const blue = Math.random() * 256;
  const green = Math.random() * 256;

  return `rgb(${red}, ${blue}, ${green})`;
};

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return {
        ...state,
        red: Math.max(Math.min(state.red + action.payload, 255), 0),
      };
    case "change_green":
      return {
        ...state,
        green: Math.max(Math.min(state.green + action.payload, 255), 0),
      };
    case "change_blue":
      return {
        ...state,
        blue: Math.max(Math.min(state.blue + action.payload, 255), 0),
      };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <Button
        title="add a color"
        onPress={() => setColors([...colors, randomRgb()])}
      />
      <ColorCounter
        title="Red"
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -COLOR_INCREMENT })
        }
      />
      <ColorCounter
        title="Green"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -COLOR_INCREMENT })
        }
      />
      <ColorCounter
        title="Blue"
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 30,
  },
});

export default SquareScreen;
