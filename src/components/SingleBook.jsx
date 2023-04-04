import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <>
      <Card
        className="mb-2"
        onClick={() => props.changeSelectedBook(props.book.asin)}
        style={{ border: props.selectedBook === props.book.asin ? "3px solid red" : "3px solid #ebebeb" }}
      >
        <Card.Img className="cardImg" variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title className="fs-6 fw-normal text-truncate" style={{ color: "black" }}>
            {props.book.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
