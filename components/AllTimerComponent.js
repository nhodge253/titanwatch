import React, { Component } from "react";
import { View, Text, FlatList, Dimensions, ScrollView, StyleSheet } from "react-native";
import { Image, Card, ListItem, } from "react-native-elements";
import { LEGENDS } from "../shared/legends";

const { width, height } = Dimensions.get("window");

class AllTimer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        legends: LEGENDS
      };
    }
  
    static navigationOptions = {
      title: "All Time Titan Greats"
    };

  render() {
    const { navigate } = this.props.navigation;
    const renderLegendItem = ({ item }) => {
      return (
        // prettier-ignore
        <ListItem 
          title={<View>
          <Text style={{color: '#4790DE', fontSize: 15, fontWeight: "bold"}}>{item.name} </Text>
          </View>}
         
        subtitle={
          <View>
          <Text style={{color: '#16233F'}}>{item.description} </Text>
          </View>}
        onPress={() => navigate('LegendInfo', { legendId: item.id })}
        leftAvatar={{ source: require("../assets/images/mcnair-smile.jpg") }} />
      );
    };

    return (
      // prettier-ignore
      <FlatList 
        data={this.state.legends} 
        renderItem={renderLegendItem} 
        keyExtractor={item => item.id.toString()} />
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

export default AllTimer;
