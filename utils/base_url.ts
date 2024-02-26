import axios from "axios";

export const base_url = axios.create({
  baseURL: "https://youtube-v31.p.rapidapi.com",
});
