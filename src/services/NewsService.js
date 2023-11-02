import axios from "../config/axios";

export async function getNewsList() {
  try {
    const data = await axios.get("/api/news");
    return data;
  } catch (error) {
    return error;
  }
}
export async function getNewsListByAction(actionCode) {
  try {
    const data = await axios.get("/api/news/action/" + 0);
    return data;
  } catch (error) {
    return error;
  }
}
export async function getActionList() {
  try {
    const data = await axios.get("/api/action");
    return data;
  } catch (error) {
    return error;
  }
}
export async function getNewsDetail(id) {
  try {
    const data = await axios.get("/api/news/" + id);
    return data;
  } catch (error) {
    return error;
  }
}

// export async function insertNews({ code, name, des }) {
//   try {
//     const data = await axios.post("/api/news", {
//       code,
//       name,
//       des,
//     });
//     return data.status;
//   } catch (error) {
//     return error;
//   }
// }
// export async function deleteNews(id) {
//   try {
//     let data = await axios.put(`/api/news/${id}`);
//     return data;
//   } catch (error) {
//     return error;
//   }
// }
