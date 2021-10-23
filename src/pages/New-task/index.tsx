import { FC, FormEvent, useState } from "react";
import { addNewTask } from "..";

const AddTask: FC = () =>{
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [creationDate, setCreationDate] = useState<string>("");
    const [startDate, setStartDate] = useState<string>("");
    const [endingDate, setEndingDate] = useState<string>("");
    const [user, setUser] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    
        addNewTask({ title, description, state, creationDate, startDate, endingDate, user });
    };

    return (
        <>
        <h1>Add a new task</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}/>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" 
            onChange={(e) => {
                setDescription(e.target.value);
            }}/>
            <label htmlFor="state">State</label>
            <select name="state" id="state"
            onChange={(e) => {
                setState(e.target.value);
            }}>
                <option value="pending">Pending</option>
                <option value="in-process">In process</option>
                <option value="finished">Finished</option>
                <option value="cancelled">Cancelled</option>
                <option value="postpone">Postpone</option>
            </select>
            <label htmlFor="creationDate">Creation date</label>
            <input type="date" name="creationDate" id="creationDate" 
            onChange={(e) => {
                setCreationDate(e.target.value);
            }}/>
            <label htmlFor="startDate">Start date</label>
            <input type="date" name="startDate" id="startDate" 
            onChange={(e) => {
                setStartDate(e.target.value);
            }}/>
            <label htmlFor="endingDate">Ending date</label>
            <input type="date" name="endingDate" id="endingDate" 
            onChange={(e) => {
                setEndingDate(e.target.value);
            }}/>
            <label htmlFor="user">User</label>
            <input type="text" name="user" id="user" 
            onChange={(e) => {
                setUser(e.target.value);
            }}/>
            <button type="submit">SAVE TASK</button>
        </form>
        </>
    )
}

export { AddTask };