import React from "react";
import {View, Button} from "react-native";
import {ListItem, Input, Body, Right} from "native-base";

import {CoordFetch, ReverseCoordFetch} from "../data/CoordFetch";

const LocationSearch = (props) => {

    const [address, setAddress] = React.useState("");

    const onPress = () => {
        CoordFetch(address)
            .then(coord => ReverseCoordFetch(coord))
            .then(location => props.containerLocation.addLocation(location))
            .catch(error => console.log(error))
    }

    return (
        <ListItem>
            <Body>
                <Input
                    placeholder = "Location"
                    value = {address}
                    onChangeText = {(address) => setAddress(address)}
                />
            </Body>
            <Right>
                <Button
                    title = "Search"
                    disabled = {!address}
                    onPress = {() => {onPress()}}
                />
            </Right>
        </ListItem>
    );
}

export default LocationSearch