import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {ListItem, Right, Body, Icon} from "native-base";

import ArticleFetch from "../data/ArticleFetch";
import style from "../style/style"


const Location = (props) => {

    const location = props.location.item;

    const onPressLocation = () => {
        ArticleFetch(location.coord)
            .then(articles => props.containerArticle.setArticles(articles))
            .catch(error => console.log(error))
        props.containerArticle.setLoading(true);
        props.navigation.navigate("Articles")
    }

    return (
        <ListItem onPress = {() => {onPressLocation()}}>
            <Body>
                <Text style = {style.bold}>{location.title}</Text>
                <Text>{location.coord.latitude} | {location.coord.longitude}</Text>
            </Body>
            <Right>
                <TouchableOpacity style = {style.touchSize} onPress = {() => {props.containerLocation.removeLocation(location.title)}}>
                    <Icon name = "ios-trash" style = {style.iconSize}/>
                </TouchableOpacity>
            </Right>
        </ListItem>
    );
}

export default Location;