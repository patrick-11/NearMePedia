import React from "react";
import {AsyncStorage} from "react-native";
import {PersistContainer} from "unstated-persist";


export default class ContainerArticle extends PersistContainer {

    constructor(props) {
        super(props);

        this.state = {
            articles: []
        }
        //AsyncStorage.clear();
    }

    persist = {
		key: "Article",
		storage: AsyncStorage
    }

    setArticles = (articles) => {
        this.setState({articles: articles});
    }

    getArticles = () => {
        return this.state.articles;
    }
}
