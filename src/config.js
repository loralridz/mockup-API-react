import axios from "axios";

const baseURL = `https://608199c473292b0017cddddb.mockapi.io/`;
export const getCollection = async (collection) => {
  try {
    const response = await axios.get(`${baseURL}/${collection}`, {
      "Content-Type": "application/x-www-form-urlencoded"
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
