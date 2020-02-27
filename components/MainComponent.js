import React, { Component } from "react";
import Home from "./HomeComponent";
import Leaders from "./LeadersComponent";
import LeaderInfo from "./LeaderInfoComponent";
import { View, Platform } from "react-native";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";

const LeadersNavigator = createStackNavigator(
  {
    Leaders: { screen: Leaders },
    LeaderInfo: { screen: LeaderInfo }
  },
  {
    initialRouteName: "Leaders",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#16233F"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#16233F"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator },
    Leaders: { screen: LeadersNavigator }
  },
  {
    drawerBackgroundColor: "#4B92DB",
    contentOptions: {
      labelStyle: {
        color: "white"
      }
    }
  }
);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
        }}
      >
        <MainNavigator />
      </View>
    );
  }
}

export default Main;
