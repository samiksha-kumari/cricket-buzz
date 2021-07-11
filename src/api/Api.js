const API_KEY = "FoBBWOqHSKd9HqIrTXJ0609tfFU2";

//get all the upcoming matches

export const getMatches = () => {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log("Error:", error))
}

//get the score of the cuurent match
export const getMatchDetail = (id) => {
    const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`
    return fetch(url)
            .then(response => response.json())
            .catch(error => console.log("Error Details: ", error))
}