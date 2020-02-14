import React from "react";
import {AsyncStorage} from "react-native";
import {PersistContainer} from "unstated-persist";


export default class ContainerSaved extends PersistContainer {

    constructor(props) {
        super(props);

        this.state = {
            saved: []
        }
        //AsyncStorage.clear();
    }

	persist = {
		key: "Location",
		storage: AsyncStorage
    }

    getSaved = () => {
        return this.state.saved;
    }

    addSaved = (saved) => {
        this.setState((curr) => ({saved: [...curr.saved, saved]}));
    }

    removeSaved = (savedTitle) => {
        const saved = this.state.saved.filter(saved => saved.title !== savedTitle);
        this.setState({saved: saved});
    }
}