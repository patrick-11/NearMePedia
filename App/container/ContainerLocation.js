import React from "react";
import {AsyncStorage} from "react-native";
import {PersistContainer} from "unstated-persist";


export default class ContainerLocation extends PersistContainer {

    constructor(props) {
        super(props);

        this.state = {
            locations: [{title: "Piazza Domenicani, Bolzano, Italy", coord: {latitude: 46.49782, longitude: 11.35252}}]
        }
        //AsyncStorage.clear();
    }

	persist = {
		key: "Location",
		storage: AsyncStorage
    }

    getLocations = () => {
        return this.state.locations;
    }

    addLocation = (location) => {
        if(this.findLocation(location.title))
            alert("Address exists already!")
        else
            this.setState((curr) => ({locations: [...curr.locations, location]}));
    }

    removeLocation = (locationTitle) => {
        const locations = this.state.locations.filter(location => location.title !== locationTitle);
        this.setState({locations: locations});
    }

    findLocation = (locationTitle) => {
        for(let i = 0; i < this.state.locations.length; i++) {
            if(this.state.locations[i].title === locationTitle)
                return true;
        }
        return false;
    }
}