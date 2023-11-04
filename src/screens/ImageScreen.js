import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageDetail } from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        score={9}
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="Beach"
        score={7}
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="Mountain"
        score={4}
        imageSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
