import { useState, useEffect } from 'react';

const Post = () => {
    useEffect(() => {
        console.log("Post component has mounted")
    }, [])}

    return (
        <div className="post">
            <img src="" alt="" />
        </div>
    )
}