import axios from "axios";

export const fetchData = (str) => {
  const apiEp = "https://www.omdbapi.com/?apikey=4d4d632d&t=" + str;
  const response = axios(apiEp);

  return response;
};
