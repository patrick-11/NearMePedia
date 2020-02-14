import React from "react";
import {Button} from "react-native";
import {ListItem, Input, Body, Icon} from "native-base";

import {CoordFetch, ReverseCoordFetch} from "../data/CoordFetch";

const LocationSearch = (props) => {

    const [address, setAddress] = React.useState("");

    const onPress = () => {
        CoordFetch(address)
            .then(coord => ReverseCoordFetch(coord)
                .then(location => props.containerLocation.addLocation(location))
                .catch(error => console.log(error))
            )
            .catch(() => alert("Wrong Address!"))
    }

    return (
        <ListItem>
            <Icon name = "ios-search"/>
            <Body>
                <Input
                    placeholder = "Location"
                    value = {address}
                    onChangeText = {(address) => setAddress(address)}
                />
            </Body>
            <Button
                title = "Search"
                disabled = {!address}
                onPress = {() => {onPress()}}
            />
        </ListItem>
    );
}

export default LocationSearch