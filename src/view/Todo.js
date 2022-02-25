import React from "react";
import { useState } from "react";
const Todo = (props) => {
    const [input, setInput] = useState('');
    const handleChangeInput = (event) => {
        setInput(event.target.value);
    }
    const handleClick = () => {
        if (input) {
            props.AddTodo(input);
            setInput('');
        }
        else {
            alert('Please enter a todo');
        }
    }
    const handleDelete = (todo)  => {
        props.DeleteTodo(todo);
    }
    let todos = props.todos;
    return (
        <>
            <input type="text" onChange={(event) => handleChangeInput(event)} value={input} />
            <button onClick={() => handleClick()}>Click Me</button>
            {
                todos.map(
                    (todo, index) => (
                        <div  key={index}>
                            <span>{todo}</span>
                            <button onClick={() => handleDelete(todo)}>Remove</button>
                        </div>
                    )
                )
            }
        </>
    )
}

export default Todo;