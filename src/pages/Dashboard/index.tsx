import { CardGroup } from "react-bootstrap";
import { Task } from "./Task";
import { Layout } from "../../components"

const Tasks = () => {
    return (
        <Layout page="tasks">
            <h1>Tasks</h1>
            <CardGroup>
                <Task />
            </CardGroup>
        </Layout>
    )
}

export { Tasks }