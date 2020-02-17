import {StyleSheet, Dimensions} from "react-native";


export default StyleSheet.create({

    flex: {
        flex: 1,
    },

    loader: {
        marginTop: Dimensions.get("window").height/3
    },

    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    bold: {
        fontWeight: "bold"
    },

    iconSize: {
        fontSize: 35
    },

    touchSize: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
    }
})