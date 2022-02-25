import React, { useState, useEffect } from "react";
import './addnewblog.scss';
import axios from "axios";
const AddNewBlog = (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const handleClickAddNewBlog = async (event) => {
        event.preventDefault();
        if(!title) {
            alert('Please enter title');
            return;
        }
        if(!body) {
            alert('Please enter body');
            return;
        }
        let data  = {
            userId: 1,
            title: title,
            body: body
        }
        let response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        let item = response && response.data ? response.data : [];
        props.handleAddNewBlog(item);
        setBody('');
        setTitle('');
    }
    return (
        <div className="form">
            <form onSubmit={handleClickAddNewBlog}>
                <div className="input-value">
                    <label className="label-name" htmlFor="title" >Title </label>
                    <input
                        onChange={(event) => setTitle(event.target.value)}
                        className="input-name"
                        value={title}
                        type="text" id="title" name="title" />
                </div>
                <div className="input-value">
                    <label className="label-name" htmlFor="body">Body </label>
                    <input
                        onChange={(event) => setBody(event.target.value)}
                        className="input-name"
                        value={body}
                        type="text" id="body" name="body" />
                </div >
                <button
                    type="submit"
                    onClick={handleClickAddNewBlog}
                    className="submit-button">Submit</button>
            </form>
        </div>
    )
}

export default AddNewBlog;