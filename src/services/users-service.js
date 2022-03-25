import { API_URL } from "../constants/page-constants";

export async function getUsers(query) {
  const url = API_URL + 'users?q' + query;
  const response = await fetch(url);
  if (response.status == 200) return await response.json();
  else return [];
}
