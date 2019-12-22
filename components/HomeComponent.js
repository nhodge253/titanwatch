import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import { Image } from "react-native-elements";

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    const { width, height } = Dimensions.get("window");
    return (
      <View>
        <Image
          source={require("./images/titansoffblue.png")}
          resizeMode="cover"
          style={{
            //   maxHeight: height,
            maxWidth: width,
            backgroundColor: "transparent"
          }}
        />
      </View>
    );
  }
}

export default Home;
