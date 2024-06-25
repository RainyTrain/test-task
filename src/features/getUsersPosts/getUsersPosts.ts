import { Post } from "@entities";

const url = "https://jsonplaceholder.typicode.com/posts";

export const getUsersPosts = async () => {
  const response = await fetch(url, { method: "GET" });

  const data = await response.json();

  return data as Post[];
};
