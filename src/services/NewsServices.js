import axios from "../config/axios";

export async function insertNews(dataSent) {
  try {
    console.log(dataSent);
    const data = await axios.post("/api/news", dataSent);
    return data.status;
  } catch (error) {
    return error;
  }
}
