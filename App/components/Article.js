import React, { useState } from "react";
import {Text, TouchableOpacity} from "react-native";
import {ListItem, Right, Body, Icon} from "native-base";


import ArticleOpen from "../data/ArticleOpen";

const Article = (props) => {
    if(props.screen)
        return ArticleScreenA(props);
    else
        return ArticleScreenC(props);
}

const ArticleScreenA = (props) => {
    const article = props.article.item;

    return (
        <ListItem onPress = {() => {ArticleOpen(article.title)}}>
            <Body>
                <Text style = {{fontWeight: "bold"}}>{article.title}</Text>
                <Text>Distance: {article.dist} m</Text>
            </Body>
            <Right>
                {props.containerSaved.findSaved(article.title) ?
                    null
                :
                    <TouchableOpacity onPress = {() => {props.containerSaved.addSaved(article)}}>
                        <Icon name = "md-arrow-down" style = {{fontSize: 40}}/>
                    </TouchableOpacity>
                }
            </Right>
        </ListItem>
    );
}

const ArticleScreenC = (props) => {
    const article = props.article.item;

    return (
        <ListItem onPress = {() => {ArticleOpen(article.title)}}>
            <Body>
                <Text style = {{fontWeight: "bold"}}>{article.title}</Text>
                <Text>Distance</Text>
            </Body>
            <Right>
                <TouchableOpacity onPress = {() => {props.containerSaved.removeSaved(article.title)}}>
                    <Icon name = "ios-trash" style = {{fontSize: 40}}/>
                </TouchableOpacity>
            </Right>
        </ListItem>
    );
}


export default Article;