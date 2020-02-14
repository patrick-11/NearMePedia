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
                            article = {article}
                            containerSaved = {props.containerSaved}
                        />
                    )}
                />
            :
                <Text>Select a location!</Text>
            }
        </View>
    );
}

export default ArticleList;