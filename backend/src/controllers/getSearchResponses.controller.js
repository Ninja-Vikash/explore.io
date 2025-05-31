import axios from "axios";

export const getSearchResponses = async (req, res) => {
    const { query } = req.params;

    const API_KEY = process.env.API_KEY;
    const API_HOST = process.env.API_HOST;
    const API_URL = process.env.API_URL;

    const options = {
        method: "GET",
        url: API_URL,
        params: {
            query: `${query}`,
            limit: "10",
            related_keywords: "true",
        },
        headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": API_HOST,
        },
    };

    try {
        const response = await axios.request(options);
        res.send(response.data.results);
    } catch (error) {
        console.log(`Error while fetching data from api: ${error}`);
    }
};
