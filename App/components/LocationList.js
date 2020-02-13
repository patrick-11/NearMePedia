import React from "react";
import {Text, View, FlatList} from "react-native";

import LocationSearch from "../components/LocationSearch";
import Location from "./Location";

const LocationList = (props) => {
    return (
        <View style = {{flex: 1}}>
            <LocationSearch
                containerLocation = {props.containerLocation}
            />
            <FlatList
                data = {props.containerLocation.getLocations()}
                renderItem = {(location) => (
                    <Location
                        navigation = {props.navigation}
                        containerArticle = {props.containerArticle}
                        location = {location}
                    />
                )}
                keyExtractor = {(_, index) => index.toString()}
            />
        </View>
    );
}

export default LocationList;