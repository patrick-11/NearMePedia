import React from "react";
import {Subscribe} from "unstated";

import ArticleList from "../components/ArticleList";
import ContainerSaved from "../container/ContainerSaved";

const ScreenC = () => {
    return (
        <Subscribe to = {[ContainerSaved]}>
            {(containerSaved) => (<ArticleList articles = {containerSaved.getSaved()}/>)}
        </Subscribe>
    );
}

export default ScreenC;