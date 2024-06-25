import { User } from "@entities";

const url = "https://jsonplaceholder.typicode.com/users";

export const getUserList = async () => {
  const response = await fetch(url, { method: "GET" });

  const data = await response.json();

  return data as User[];
};
