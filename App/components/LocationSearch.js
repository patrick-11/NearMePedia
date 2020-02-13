import React from "react";
import {View, Button} from "react-native";
import {ListItem, Input, Body, Right} from "native-base";

import {CoordFetch, ReverseCoordFetch} from "../data/CoordFetch";

const LocationSearch = (props) => {

    const [location, setLocation] = React.useState("");

    const onPress = () => {
        CoordFetch(location)
            .then(coord => ReverseCoordFetch(coord))
            .then(location => props.containerLocation.addLocation(location))
            .catch(error => console.log(error))
    }

    return (
        <ListItem>
            <Body>
                <Input
                    placeholder = "Location"
                    value = {location}
                    onChangeText = {(location) => setLocation(location)}
                />
            </Body>
            <Right>
                <Button
                    title = "Search"
                    disabled = {!location}
                    onPress = {() => {onPress()}}
                />
            </Right>
        </ListItem>
    );
}

export default LocationSearch