import React from "react";
import {Container} from "unstated";


export default class ContainerArticle extends Container {

    state = {articles: null};

    setArticles = (articles) => {
        this.setState({articles: articles});
    }

    getArticles = () => {
        return this.state.articles;
    }
}
