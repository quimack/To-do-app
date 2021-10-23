import { Payload } from "../../../types";
import { api } from "../../../utils/axios";


const addNewTask = async (data: Payload) => {
    console.log(`this is addNewtask: api post ${data.user}`)
    await api.post("/tasks.json", data);
}

export { addNewTask }