import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import { ListItem } from "react-native-elements";
import { LEADERS } from "../shared/leaders";

class Leaders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: LEADERS
    };
  }

  static navigationOptions = {
    title: "Team Leaders"
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderLeaderItem = ({ item }) => {
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
        onPress={() => navigate('LeaderInfo', { leaderId: item.id })}
        leftAvatar={{ source: require("../assets/images/tanny.jpg") }} />
      );
    };

    return (
      // prettier-ignore
      <FlatList 
        data={this.state.leaders} 
        renderItem={renderLeaderItem} 
        keyExtractor={item => item.id.toString()} />
    );
  }
}

export default Leaders;
