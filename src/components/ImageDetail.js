import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>Image screen: {title}</Text>
      <Text>Image score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
