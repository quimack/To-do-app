import axios from "axios";

const api = axios.create({
  baseURL: "https://todoapp-c6dc1-default-rtdb.firebaseio.com/",
});

export { api };