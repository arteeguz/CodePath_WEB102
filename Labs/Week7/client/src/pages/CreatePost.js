import React, { useState } from 'react';
import './CreatePost.css';

// Importing supabase to interact with the database
import { supabase } from '../client.js';

const CreatePost = () => {
    const [post, setPost] = useState({title: "", author: "", description: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]: value,
            }
        });
    }

    // Asynchronous function to handle form submission and interact with the database
    const createPost = async (event) => {
        event.preventDefault(); // Preventing the default form submission behavior

        // Inserting the post data into the 'Posts' table in the database
        await supabase
            .from('Posts')
            .insert({title: post.title, author: post.author, description: post.description})
            .select(); // Selecting the inserted data (not mandatory for the insert operation)

        window.location = "/"; // Redirecting to the homepage after insertion
    };

    return (
        <div>
            {/* Modified form to use onSubmit instead of onClick on the submit button */}
            <form onSubmit={createPost}>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" onChange={handleChange}>
                </textarea>
                <br/>
                {/* Removed onClick from here and used onSubmit in the form */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default CreatePost;
