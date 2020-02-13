import React from "react";
import {Text} from "react-native";
import {ListItem, Right, Body, Icon} from "native-base";

const Location = (props) => {

    const location = props.location.item;

    return (
        <ListItem onPress = {() => {props.navigation.navigate("Articles", {coord: location.coord})}}>
            <Body>
                <Text>{location.title}</Text>
                <Text>{location.coord.latitude} | {location.coord.longitude}</Text>
            </Body>
            <Right>
                <Icon name = "arrow-forward"/>
            </Right>
        </ListItem>
    );
}

export default Location;