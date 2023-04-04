import { Badge, ListGroup } from "react-bootstrap";

const SingleComment = (props) => (
  <ListGroup.Item key={props.comment._id} className="d-flex flex-wrap ">
    <span className=" text-truncate">{props.comment.author}</span>
    <span className="me-auto ms-5">{props.comment.comment}</span>
    <span>
      <Badge variant="dark">{props.comment.rate}</Badge>
    </span>
  </ListGroup.Item>
);

export default SingleComment;
