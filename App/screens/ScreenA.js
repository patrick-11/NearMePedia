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
                        screen = {true}
                        articles = {containerArticle.getArticles()}
                        containerArticle = {containerArticle}
                        containerSaved = {containerSaved}
                    />
                )
            }
        </Subscribe>
    );
}

export default ScreenA;