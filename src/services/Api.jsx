import axios from "axios";
require("dotenv").config();

//const BASE_URL = "https://bioseta-api.herokuapp.com/api/v1/";
// export const BASE_URL = "http://localhost:3003/api/v1/";
// export const BASE_URL = "https://app-bioseta.azurewebsites.net/api/v1/";
export const BASE_URL = "https://app-homologacao-e9habgh6dkb8hgh4.brazilsouth-01.azurewebsites.net/api/v1/";


export const httpRequest = async (path, config) => {
  const headers = config.token
    ? {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.token}`,
      }
    : { "Content-Type": "application/json" };
  const conf = {
    // validateStatus: (status) => status <= 511,
    method: config.method,
    data: config.body,
    headers,
  };

  const response = await axios(`${BASE_URL}${path}`, conf);
  return { status: response.status, body: response.data };
};
