import React, { useEffect } from "react";
import {Text, View, FlatList} from "react-native";

import Article from "./Article";


const ArticleList = (props) => {
    return (
        <View style = {{flex: 1}}>
            {props.articles ?
                <FlatList
                    data = {props.articles}
                    renderItem = {(article) => <Article article = {article}/>}
                    keyExtractor = {(_, index) => index.toString()}
                />
            :
                <Text>Select a location!</Text>
            }
        </View>
    );
}

export default ArticleList;