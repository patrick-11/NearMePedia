import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {ListItem, Right, Body, Icon} from "native-base";

import ArticleOpen from "../data/ArticleOpen";
import style from "../style/style"


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
                <Text style = {style.bold}>{article.title}</Text>
                <Text>Distance: {article.dist} m</Text>
            </Body>
            <Right>
                {props.containerSaved.findSaved(article.title) ?
                    null
                :
                    <TouchableOpacity style = {style.touchSize} onPress = {() => {props.containerSaved.addSaved(article)}}>
                        <Icon name = "md-arrow-down" style = {style.iconSize}/>
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
                <Text style = {style.bold}>{article.title}</Text>
                <Text>Distance</Text>
            </Body>
            <Right>
                <TouchableOpacity onPress = {() => {props.containerSaved.removeSaved(article.title)}}>
                    <Icon name = "ios-trash" style = {style.iconSize}/>
                </TouchableOpacity>
            </Right>
        </ListItem>
    );
}


export default Article;