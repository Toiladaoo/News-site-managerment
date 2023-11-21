import axios from "../config/axios";

export async function getNewsList() {
  try {
    const data = await axios.get("/api/news");
    return data;
  } catch (error) {
    return error;
  }
}

export async function getNewsTypeDropdownData() {
  try {
    const data = await axios.get("/api/news/types");
    return data;
  } catch (error) {
    return error;
  }
}
export async function getNewsListByAction(actionCode) {
  try {
    const data = await axios.get("/api/news/action/" + actionCode);
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

export async function setAction(id, actionCode) {
  try {
    const data = await axios.put(`/api/news/${id}/action/${actionCode}`);
    return data;
  } catch (error) {
    return error;
  }
}
