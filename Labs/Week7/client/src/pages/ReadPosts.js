import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client'; // Import supabase

const ReadPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Asynchronously fetch posts from the database
        const fetchPosts = async () => {
            const { data } = await supabase
                .from('Posts')
                .select();
            setPosts(data); // Update the posts state with fetched data
        };

        fetchPosts(); // Call the fetchPosts function
    }, []); // Dependency array is empty, so this runs once on mount

    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post, index) => 
                   <Card 
                       key={post.id} // Added key for list rendering
                       id={post.id} 
                       title={post.title} 
                       author={post.author} 
                       description={post.description}
                   />
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    );
};

export default ReadPosts;
