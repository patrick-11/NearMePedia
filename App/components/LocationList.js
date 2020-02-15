import React from "react";
import {View, FlatList, Button} from "react-native";

import LocationSearch from "../components/LocationSearch";
import Location from "./Location";
import {MyLocation} from "../data/CoordFetch";

const LocationList = (props) => {

    props.navigation.setOptions({
        headerRight: () => <Button title = "My Location" onPress = {() => {onPressMyLocation()}}/>
    });

    const onPressMyLocation = () => {
        MyLocation()
            .then(coord => ArticleFetch(coord)
                .then(articles => props.containerArticle.setArticles(articles))
                .catch(error => console.log(error))
            )
            .catch(error => console.log(error))
        props.navigation.navigate("Articles")
    }

    return (
        <View style = {{flex: 1}}>
            <FlatList
                data = {props.containerLocation.getLocations()}
                keyExtractor = {(_, index) => index.toString()}
                ListHeaderComponent = {<LocationSearch containerLocation = {props.containerLocation}/>}
                renderItem = {(location) => (
                    <Location
                        navigation = {props.navigation}
                        containerArticle = {props.containerArticle}
                        containerLocation = {props.containerLocation}
                        location = {location}
                    />
                )}
            />
        </View>
    );
}

export default LocationList;