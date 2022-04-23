import React from 'react';
import Button from "./UI/button/Button";


const Post = (props) => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                <strong>{props.number}  {props.post.title}</strong>
                <div className="post__btns"  >
                <div>
                    {props.post.body}
                </div>

                </div>
                </div>
                <Button onClick={()=>props.remove(props.post)} >delete</Button>
            </div>
        </div>


    );
};

export default Post;