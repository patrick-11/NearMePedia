import React from "react";
import {Subscribe} from "unstated";

import ArticleList from "../components/ArticleList";
import ContainerArticle from "../container/ContainerArticle";


const ScreenA = (props) => {
    return (
        <Subscribe to = {[ContainerArticle]}>
            {
                (containerArticle) => (
                    <ArticleList articles = {containerArticle.getArticles()}/>
                )
            }
        </Subscribe>
    );
}

export default ScreenA;