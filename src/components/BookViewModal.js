import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function BookViewModal(props) {
  const { show, setShow, book } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Title:</strong> {book.title}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Description:</strong> {book.description}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Poster:</strong>{" "}
            <img src={book.poster} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>categories:</strong>
            <ListGroup>
              {book.category.map(category => (
                <ListGroup.Item>{category.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default BookViewModal
