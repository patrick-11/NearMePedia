import React from "react";
import {Subscribe} from "unstated";

import ArticleList from "../components/ArticleList";
import ContainerArticle from "../container/ContainerArticle";
import ContainerSaved from "../container/ContainerSaved";


const ScreenA = () => {
    return (
        <Subscribe to = {[ContainerArticle, ContainerSaved]}>
            {
                (containerArticle, containerSaved) => (
                    <ArticleList
                        articles = {containerArticle.getArticles()}
                        containerSaved = {containerSaved}
                    />
                )
            }
        </Subscribe>
    );
}

export default ScreenA;