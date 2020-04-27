import React, { Component } from "react";
import Home from "./HomeComponent";
import Leaders from "./LeadersComponent";
import LeaderInfo from "./LeaderInfoComponent";
import LegendInfo from "./LegendInfoComponent";
import { View, Platform } from "react-native";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import AllTimer from "./AllTimerComponent";
import BuyTix from "./BuyTixComponent";

const BuyTixNavigator = createStackNavigator(
  {
    BuyTix: {screen: BuyTix },
    AllTimer: {screen: AllTimer },
    Leaders: { screen: Leaders },
    LeaderInfo: { screen: LeaderInfo },
    LegendInfo: {screen: LegendInfo }
  },
  {
    initialRouteName: "BuyTix",
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

const AllTimerNavigator = createStackNavigator(
  {
    BuyTix: {screen: BuyTix },
    AllTimer: {screen: AllTimer },
    Leaders: { screen: Leaders },
    LeaderInfo: { screen: LeaderInfo },
    LegendInfo: {screen: LegendInfo}
  },
  {
    initialRouteName: "AllTimer",
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

const LeadersNavigator = createStackNavigator(
  {
    BuyTix: {screen: BuyTix },
    AllTimer: {screen: AllTimer },
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
    Leaders: { screen: LeadersNavigator },
    Legends: { screen: AllTimerNavigator},
    Tickets: { screen: BuyTixNavigator }
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
