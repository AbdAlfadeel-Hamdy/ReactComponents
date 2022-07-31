import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetails author="gonzalo" />
      <CommentDetails author="adham" />
      <CommentDetails author="hossam" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
