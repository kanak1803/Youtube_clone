import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
            process.env.REACT_APP_YOUTUBE_API_KEY || "eef8dd0e63mshf472f7b44d58ff3p1695e1jsnb318d6aa6445",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
