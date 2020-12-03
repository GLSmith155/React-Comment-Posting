import React from 'react';

const CommentDetail = (props) => {
   return (
   <div className="comment">
    <a href="/" className="avatar">
        <img alt="avatar" src={props.fakerImage} />
    </a>
        <div className="content">
        <a href="/" className="author"> 
            {props.author}
        </a>
            <div ClassName="metadata">
                <span className="date">
                {props.timeAgo}
                </span>
            </div>
                 <div className="text">
                {props.commentMessage}      
                </div>
        </div>
    </div>
   );
}

export default CommentDetail;