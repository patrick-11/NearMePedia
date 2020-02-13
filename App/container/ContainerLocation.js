import React from "react";
import {AsyncStorage} from "react-native";
import {PersistContainer} from "unstated-persist";


export default class ContainerLocation extends PersistContainer {

    constructor(props) {
        super(props);

        this.state = {
            location: [{title: "Test", coord: {latitude: 46.49782636201107, longitude: 11.352520870004525}}]
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
}