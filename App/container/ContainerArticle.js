import React from "react";
import {Container} from "unstated";


export default class ContainerArticle extends Container {

    state = {
        articles: [],
        loading: false
    }

    setLoading = (state) => {
        this.setState({loading: state});
    }

    getLoading = () => {
        return this.state.loading;
    }

    setArticles = (articles) => {
        this.setState({articles: articles});
        this.setLoading(false);
    }

    getArticles = () => {
        return this.state.articles;
    }
}
