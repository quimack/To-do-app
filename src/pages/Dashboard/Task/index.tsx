import { getTasks } from "../api";
import { TaskType } from "../../../types";
import { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";



const Task = () => {
    const [tasks, setTasks] = useState<TaskType[] | undefined>(); 
    
    const getTasksData = async() => {
        const response = await getTasks();
        setTasks(response);
    }

    if(!tasks){
        getTasksData();
    }

    return (
        <>
            {tasks?.map((task) => {
                return (
                    <Card border="info" style={{ width: '18rem' }}>
                        <Card.Header>
                            <Card.Title>{task.title}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>{task.description}</Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>State: {task.state}</ListGroup.Item>
                                <ListGroup.Item>Creation Date: {task.creationDate}</ListGroup.Item>
                                <ListGroup.Item>Start Date: {task.startDate}</ListGroup.Item>
                                <ListGroup.Item>Ending Date: {task.endingDate}</ListGroup.Item>
                                <ListGroup.Item>User: {task.user}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                )
            })}
        </>
    )
}

export { Task }