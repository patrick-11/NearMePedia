import React from "react";
import {Text, View, FlatList, ActivityIndicator} from "react-native";

import Article from "./Article";
import style from "../style/style"


const ArticleList = (props) => {
    return (
        <View style = {{flex: 1}}>
            {props.articles.length > 0 ?
                props.containerArticle.getLoading() ?
                    <ActivityIndicator style = {style.loader}/>
                    :
                    <FlatList
                        data = {props.articles}
                        keyExtractor = {(_, index) => index.toString()}
                        renderItem = {(article) => (
                            <Article
                                screen = {props.screen}
                                article = {article}
                                containerSaved = {props.containerSaved}
                            />
                        )}
                    />
            :
            <View style = {style.center}>
                {props.screen ?
                    <Text>Select a Location!</Text>
                :
                    <Text>Save an Article!</Text>
                }
            </View>
            }
        </View>
    );
}

export default ArticleList;