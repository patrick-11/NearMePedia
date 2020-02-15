import React, { useEffect } from "react";
import {Text, View, FlatList} from "react-native";

import Article from "./Article";


const ArticleList = (props) => {
    return (
        <View style = {{flex: 1}}>
            {props.articles ?
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
                props.screen ?
                    <Text>Select a Location!</Text>
                :
                    <Text>Save an Article!</Text>
            }
        </View>
    );
}

export default ArticleList;