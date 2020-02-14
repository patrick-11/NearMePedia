import React from "react";
import {View, FlatList} from "react-native";

import LocationSearch from "../components/LocationSearch";
import Location from "./Location";

const LocationList = (props) => {
    return (
        <View style = {{flex: 1}}>
            <FlatList
                data = {props.containerLocation.getLocations()}
                keyExtractor = {(_, index) => index.toString()}
                ListHeaderComponent = {
                    <LocationSearch containerLocation = {props.containerLocation}/>
                }
                renderItem = {(location) => (
                    <Location
                        navigation = {props.navigation}
                        containerArticle = {props.containerArticle}
                        location = {location}
                    />
                )}
            />
        </View>
    );
}

export default LocationList;