import React from "react";
import {Subscribe} from "unstated";

import ArticleList from "../components/ArticleList";
import ContainerArticle from "../container/ContainerArticle";
import ContainerSaved from "../container/ContainerSaved";


const ScreenC = () => {
    return (
        <Subscribe to = {[ContainerArticle, ContainerSaved]}>
            {
                (containerArticle, containerSaved) => (
                    <ArticleList
                        screen = {false}
                        articles = {containerSaved.getSaved()}
                        containerArticle = {containerArticle}
                        containerSaved = {containerSaved}
                    />
                )
            }
        </Subscribe>
    );
}

export default ScreenC;