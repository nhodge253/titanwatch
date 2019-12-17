import React from "react";
import { View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";

function Leaders(props) {
  const renderLeaderItem = ({ item, index }) => {
    return (
      <ListItem title={item.name} subtitle={item.description} leftAvatar={{ source: require("./images/tanny.jpg") }} />
    );
  };

  return <FlatList data={props.leaders} renderItem={renderLeaderItem} keyExtractor={item => item.id.toString()} />;
}

export default Leaders;
