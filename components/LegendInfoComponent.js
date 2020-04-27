import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { LEGENDS } from "../shared/legends";

function RenderLegend({ legend }) {
  if (legend) {
    return (
      // prettier-ignore
      <Card 
            featuredTitle={legend.name} 
            image={require("../assets/images/mcnair-smile.jpg")}>
        <Text style={{ margin: 10 }}>
            {legend.description}
        </Text>
      </Card>
    );
  }

  return <View />;
}

class LegendInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      legends: LEGENDS
    };
  }

  static navigationOptions = {
    title: "Legend Rundown"
  };

  render() {
    const legendId = this.props.navigation.getParam("legendId");
    const legend = this.state.legends.filter(legend => legend.id === legendId)[0];
    return <RenderLegend legend={legend} />;
  }
}

export default LegendInfo;
