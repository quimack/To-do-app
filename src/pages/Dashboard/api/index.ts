import { api } from "../../../utils/axios"; 
import { TaskType } from "../../../types";

const mapToArray = (object: any) => {
    const array = [];
  
    for (const elem in object) {
      array.push({
        id: elem,
        ...object[elem],
      });
    }
  
    return array;
};
  

const getTasks = async (): Promise<TaskType[]> => {
    const response = await api.get("/tasks.json");
    return mapToArray(response.data);
};
  
export { getTasks };
