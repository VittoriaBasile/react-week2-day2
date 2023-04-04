import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { useState, useEffect } from "react";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzIyOTY4MzQzMTAwMTRkZWE3NWQiLCJpYXQiOjE2ODA1MjM4MTcsImV4cCI6MTY4MTczMzQxN30.cl_8_IXTwcTmqSKAWw2IIGMg3EQd50hLb9Hwb3xKF0g",
        },
      });

      if (response.ok) {
        const commentsArr = await response.json();
        setComments(commentsArr);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [props.asin]);

  return (
    <div>
      <AddComment asin={props.asin} fetchComments={fetchComments} />
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentArea;
