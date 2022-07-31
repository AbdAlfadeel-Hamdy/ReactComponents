import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        {" "}
        <CommentDetails
          author="gonzalo"
          timeAgo="Yesterday"
          content="Nice Topic!"
          img={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        {" "}
        <CommentDetails
          author="adham"
          timeAgo="Today"
          content="It is brilliant!"
          img={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="hossam"
          timeAgo="2 days ago"
          content="Woow!"
          img={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
