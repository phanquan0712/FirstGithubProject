import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFecth from "../customize/fecth";
import './blog.scss';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AddNewBlog from './addnewblog';
const Blog = () => {
    const [newData, setNewData] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { data, isLoading } = useFecth(`https://jsonplaceholder.typicode.com/posts`);
    const navigate = useNavigate();
    const handleClickReadMore = (item) => {
        navigate(`/blog/${item.id}`);
    }
    useEffect(
        () => {
            if(data && data.length > 0) {
                const dataBlog = data && data.length > 0 ? data.slice(0, 12) : [];
                setNewData(dataBlog);
            }
        }, [data])
    const handleAddNewBlog = (item) => {
        if (item) {
            let data = newData;
            data.unshift(item);
            setShow(false);
            setNewData(data);
        }
    }
    const handleDeleteBlog = (blog) => {
        let data = newData;
        data = data.filter(item => item.id !== blog.id);
        setNewData(data);
    }
    return (
        <>
            <>
                <Button variant="primary my-4 setColor" onClick={handleShow}>
                    + Add New Blog
                </Button>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>New Blog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewBlog
                            handleAddNewBlog={handleAddNewBlog}
                        />
                    </Modal.Body>
                </Modal>
            </>
            <div className="blog">
                {
                    newData && newData.length > 0 && isLoading === false
                    && newData.map(
                        (item, index) => (
                            <div key={index} className="blog-item">
                                <h3 className="blog-item-title">Title: {item.title}</h3>
                                <p className="blog-item-body">Body: {item.body}</p>
                                <div className="blog-btn">
                                    <button
                                        className="blog-item-btn"
                                        onClick={() => handleClickReadMore(item)}
                                    >
                                        Read more!
                                    </button>
                                    <button
                                        onClick={() => handleDeleteBlog(item)}
                                        className="blog-item-btn"
                                    >
                                        Delete!
                                    </button>
                                </div>
                            </div>
                        )
                    )
                }
                {
                    isLoading === true && <div style={{ textAlign: "center" }}>Loading...</div>
                }
            </div>
        </>
    )
}

export default Blog;
