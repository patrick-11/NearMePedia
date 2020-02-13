import React from "react";
import {Subscribe} from "unstated";


import LocationList from "../components/LocationList";
import ContainerLocation from "../container/ContainerLocation";
import ContainerArticle from "../container/ContainerArticle";


const ScreenB = (props) => {
    return (
        <Subscribe to = {[ContainerLocation, ContainerArticle]}>
            {
                (containerLocation, containerArticle) => (
                    <LocationList
                        navigation = {props.navigation}
                        containerLocation = {containerLocation}
                        containerArticle = {containerArticle}
                    />
                )
            }
        </Subscribe>
    );
}

export default ScreenB;