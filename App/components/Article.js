import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {ListItem, Right, Body, Icon} from "native-base";


import ArticleOpen from "../data/ArticleOpen";

const Article = (props) => {

    const article = props.article.item;

    return (
        <ListItem onPress = {() => {ArticleOpen(article.title)}}>
            <Body>
                <Text style = {{fontWeight: "bold"}}>{article.title}</Text>
                <Text>Distance: {article.dist} m</Text>
            </Body>
            <Right>
                <TouchableOpacity onPress = {() => {props.containerSaved.addSaved(article)}}>
                    <Icon name = "md-arrow-down" style = {{fontSize: 40}}/>
                </TouchableOpacity>
            </Right>
        </ListItem>
    );
}

export default Article;