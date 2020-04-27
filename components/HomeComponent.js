import React, { Component } from "react";
import { View, Text, Dimensions, ScrollView, StyleSheet } from "react-native";
import { Image, Card } from "react-native-elements";
import { LEADERS } from "../shared/leaders";
import { GEAR } from "../shared/gear";
import { GAMEDAY } from "../shared/gameday";

const { width, height } = Dimensions.get("window");

function RenderItem({ item }) {
  if (item) {
    return (
      <Card featuredTitle={item.name} image={require("../assets/images/byard.jpg")} imageStyle={styles.image} >
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: LEADERS,
      gear: GEAR,
      gameday: GAMEDAY
    };
  }

  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <ScrollView>
        <Image
          source={require("../assets/images/titansoffblue.png")}
          resizeMode="cover"
          style={{
            //   maxHeight: height,
            maxWidth: width,
            backgroundColor: "transparent"
          }}
        />
        <RenderItem item={this.state.leaders.filter(leader => leader.featured)[0]} />
        <RenderItem item={this.state.gear.filter(gear => gear.featured)[0]} />
        <RenderItem item={this.state.gameday.filter(gameday => gameday.featured)[0]} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: 250
    // paddingTop: 100
  }
});

export default Home;
