import React from "react";
import {Text, View, FlatList} from "react-native";

import Location from "./Location";

const LocationList = (props) => {
    return (
        <View style = {{flex: 1}}>
            <FlatList
                data = {props.container.getLocations()}
                renderItem = {(location) => (
                    <Location
                        navigation = {props.navigation}
                        location = {location}
                    />
                )}
                keyExtractor = {(_, index) => index.toString()}
            />
        </View>
    );
}

export default LocationList;