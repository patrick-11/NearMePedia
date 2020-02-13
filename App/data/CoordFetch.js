import * as Location from "expo-location";
import * as Permissions from "expo-permissions";


const coordFetch = async (location) => {
    const {status} = await Permissions.askAsync(Permissions.LOCATION)

    if(status === "granted") {
        return Location.geocodeAsync(location)
            .then(response => {
                return {
                    latitude: response[0].latitude,
                    longitude: response[0].longitude
                }
            })
            .catch(alert("Wrong Address!"));
    }
    alert("Access not granted!");
}

const ReverseCoordFetch = (coord) => {
    return Location.reverseGeocodeAsync(coord)
        .then(response => {
            return response[0].street + ", " + response[0] + ", " + response[0].country;
        })
        .catch(error => console.log(error))
}

export {coordFetch, ReverseCoordFetch};