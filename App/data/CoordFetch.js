import * as Location from "expo-location";
import * as Permissions from "expo-permissions";


const PermissionLocation = async () => {
    const {status} = await Permissions.askAsync(Permissions.LOCATION);
    if(status !== "granted")
        return true;
    else
        return false;
}

const CoordFetch = (location) => {
    if(PermissionLocation) {
        return Location.geocodeAsync(location)
            .then(response => {
                if(response !== "undefined") {
                    return {
                        latitude: response[0].latitude,
                        longitude: response[0].longitude
                    }
                }
                else {
                    throw new Error(response);
                }
            })
    }
    else {
        alert("Location access not granted!");
    }
}

const ReverseCoordFetch = (coord) => {
    if(PermissionLocation) {
        return Location.reverseGeocodeAsync(coord)
            .then(response => {
                if(response !== "undefined") {
                    return {
                        title: response[0].street + ", " + response[0].city + ", " + response[0].country,
                        coord: coord
                    }
                }
                else {
                    throw new Error(response);
                }
            })
    }
    else {
        alert("Location access not granted!");
    }
}

const MyLocation = () => {
    if(PermissionLocation) {
        return Location.getCurrentPositionAsync()
            .then(response => {
                if(response !== "undefined") {
                    return {
                        latitude: response.coords.latitude,
                        longitude: response.coords.longitude
                    }
                }
                else {
                    throw new Error(response);
                }
            })
    }
    else {
        alert("Location access not granted!");
    }
}

export {CoordFetch, ReverseCoordFetch, MyLocation};