import { formatDate } from "./utils";

export function NewsTableFromJson(data) {
  // Ánh xạ key cũ sang key mới
  const newData = {
    ID: data.id,
    Title: data.title,
    Content: data.sub_content,
    Type: data.news_type_name,
    Author: data.user_name,
    Update: data.updated ? formatDate(data.updated) : "",
  };

  // Chuyển đổi kết quả thành JSON mới
  return newData;
}
