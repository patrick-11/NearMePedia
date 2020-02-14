import * as Location from "expo-location";
import * as Permissions from "expo-permissions";


const PermissionLocation = async () => {
    const {status} = await Permissions.askAsync(Permissions.LOCATION);
    if(status === "granted")
        return true;
    else
        return false;
}

const CoordFetch = (location) => {
    if(PermissionLocation) {
        return Location.geocodeAsync(location)
            .then(response => {
                return {
                    latitude: response[0].latitude,
                    longitude: response[0].longitude
                }
            })
            .catch(() => alert("Wrong Address!"));
    }
    else {
        alert("Location access not granted!");
    }
}

const ReverseCoordFetch = (coord) => {
    if(PermissionLocation) {
        return Location.reverseGeocodeAsync(coord)
            .then(response => {
                return {
                    title: response[0].street + ", " + response[0].city + ", " + response[0].country,
                    coord: coord
                }
            })
            .catch(error => console.log(error))
    }
    else {
        alert("Location access not granted!");
    }
}

export {CoordFetch, ReverseCoordFetch};