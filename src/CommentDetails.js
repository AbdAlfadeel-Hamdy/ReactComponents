import React from "react";
import faker from "faker";

const CommentDetails = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.image()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadta">
          <span className="date">Today at 7:19</span>
        </div>
        <div className="text">Nice post!</div>
      </div>
    </div>
  );
};

export default CommentDetails;
