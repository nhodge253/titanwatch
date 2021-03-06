import React, { Component } from "react";
import { View, Text, Dimensions, ScrollView, StyleSheet } from "react-native";
import { Image, Card } from "react-native-elements";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { PARTNERS } from "../shared/gameday";

const { width, height } = Dimensions.get("window");

function RenderItem({ item }) {
  if (item) {
    return (
      <Card featuredTitle={item.name} 
      image={require("./images/byard.jpg")}>
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
      promotions: PROMOTIONS,
      partners: PARTNERS
    };
  }

  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <ScrollView>
        <Image
          source={require("./images/titansoffblue.png")}
          resizeMode="cover"
          style={{
            //   maxHeight: height,
            maxWidth: width,
            backgroundColor: "transparent"
          }}
        />
        <RenderItem item={this.state.leaders.filter(leader => leader.featured)[0]} />
        <RenderItem item={this.state.promotions.filter(promotion => promotion.featured)[0]} />
        <RenderItem item={this.state.partners.filter(partner => partner.featured)[0]} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#43a1c9",
    resizeMode: "contain"
  }
});

export default Home;
// above is with head cut off.  below is with image working but text title covered.

import React, { Component } from "react";
import { View, Text, Dimensions, ScrollView, StyleSheet } from "react-native";
import { Image, Card } from "react-native-elements";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import { PARTNERS } from "../shared/gameday";

const { width, height } = Dimensions.get("window");

function RenderItem({ item }) {
  if (item) {
    return (
      <Card featuredTitle={item.name}>
        <Image source={require("./images/byard.jpg")} style={styles.image} />
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
      promotions: PROMOTIONS,
      partners: PARTNERS
    };
  }

  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <ScrollView>
        <Image
          source={require("./images/titansoffblue.png")}
          resizeMode="cover"
          style={{
            //   maxHeight: height,
            maxWidth: width,
            backgroundColor: "transparent"
          }}
        />
        <RenderItem item={this.state.leaders.filter(leader => leader.featured)[0]} />
        <RenderItem item={this.state.promotions.filter(promotion => promotion.featured)[0]} />
        <RenderItem item={this.state.partners.filter(partner => partner.featured)[0]} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#43a1c9",
    resizeMode: "contain"
  }
});

export default Home;
