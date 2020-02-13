const ArticleFetch = (coord) => {

    let url = "https://en.wikipedia.org/w/api.php";

    const params = {
        action: "query",
        list: "geosearch",
        gscoord: coord.latitude + "|" + coord.longitude,
        gsradius: "10000",
        gslimit: "50",
        format: "json"
    };

    url = url + "?origin=*";

    Object.keys(params).forEach(function(key){
        url += "&" + key + "=" + params[key];
    });

    return fetch(url)
        .then(response => response.json())
        .then(articles => articles.query.geosearch.map(article => {
            return {
                title: article.title,
                dist: article.dist,
                coord: {latitiude: article.lat, longitude: article.lon},
                thumbnail: article.thumbnail
            }
        }))
        .catch(error => console.log(error))
}