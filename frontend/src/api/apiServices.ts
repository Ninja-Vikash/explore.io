import axios from "axios";

export const getSearchResultsApi = async (query: string) => {
    try {
        const res = await axios.get(`/api/${query}`);
        return res
    } catch (error) {
        console.log(`Error while fetching data from server: ${error}`);
    }
};
