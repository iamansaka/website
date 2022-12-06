import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: "Bearer " + process.env.API_TOKEN,
  },
});

export async function findAll() {
  return await instance.get("/projets?populate=*").then((response) => response.data);
}
