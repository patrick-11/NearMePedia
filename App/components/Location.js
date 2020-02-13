import React from "react";
import {Text} from "react-native";
import {ListItem, Right, Body, Icon} from "native-base";

import ArticleFetch from "../data/ArticleFetch";


const Location = (props) => {

    const location = props.location.item;

    const onPress = () => {
        ArticleFetch(location.coord)
            .then(articles => props.containerArticle.setArticles(articles))
            .catch(error => console.log(error))
        props.navigation.navigate("Articles")
    }

    return (
        <ListItem onPress = {() => {onPress()}}>
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