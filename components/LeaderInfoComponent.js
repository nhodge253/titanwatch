import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { LEADERS } from "../shared/leaders";

function RenderLeader({ leader }) {
  if (leader) {
    return (
      // prettier-ignore
      <Card 
            featuredTitle={leader.name} 
            image={require("./images/tanny.jpg")}>
        <Text style={{ margin: 10 }}>
            {leader.description}
        </Text>
      </Card>
    );
  }

  return <View />;
}

class LeaderInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: LEADERS
    };
  }

  static navigationOptions = {
    title: "Leader Rundown"
  };

  render() {
    const leaderId = this.props.navigation.getParam("leaderId");
    const leader = this.state.leaders.filter(leader => leader.id === leaderId)[0];
    return <RenderLeader leader={leader} />;
  }
}

export default LeaderInfo;
