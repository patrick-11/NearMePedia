import React from "react";
import {AsyncStorage} from "react-native";
import {PersistContainer} from "unstated-persist";


export default class ContainerLocation extends PersistContainer {

    constructor(props) {
        super(props);

        this.state = {
            location: [{title: "Piazza Domenicani, Bolzano, Italy", coord: {latitude: 46.49782, longitude: 11.35252}}]
        }
        //AsyncStorage.clear();
    }

	persist = {
		key: "Location",
		storage: AsyncStorage
    }

    getLocations = () => {
        return this.state.location;
    }

    addLocation = (location) => {
        this.setState((curr) => ({location: [...curr.location, location]}));
    }
}