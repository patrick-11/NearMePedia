import React from "react";
import {Text, View} from "react-native";
import {Subscribe} from "unstated";

import LocationList from "../components/LocationList";
import ContainerLocation from "../container/ContainerLocation";


const ScreenB = (props) => {
    return (
        <Subscribe to = {[ContainerLocation]}>
            {
                (containerLocation) => (
                    <LocationList
                        navigation = {props.navigation}
                        container = {containerLocation}
                    />
                )
            }
        </Subscribe>
    );
}

export default ScreenB;