import {Linking} from "react-native";


const ArticleOpen = (title) => {
    let url = "https://en.wikipedia.org/wiki/";
    url = url + title.split("_").join("_");
    Linking.openURL(url);
}

export default ArticleOpen;