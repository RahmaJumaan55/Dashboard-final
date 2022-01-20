import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function BookEditModal(props) {
  const { show, setShow, book } = props
  const { categories, editBook} = useContext(BooksContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editBook(e, book._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" defaultValue={book.title} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" defaultValue={book.description} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Poster
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="poster" defaultValue={book.poster} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              bookpdf
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="bookpdf" defaultValue={book.bookpdf} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            categories
            </Form.Label>
            <Col md="8">
              {categories.map(categoryObject => (
                <Row>
                  <Col md="2">
                    <Form.Check
                      type="radio"
                      name="category"
                      defaultChecked={book.category.find(categoryBook => categoryBook._id === categoryObject._id)}
                      value={categoryObject._id}
                    />
                  </Col>
                  <Col md="2">
                    <span>{categoryObject.name}</span>
                  </Col>
                </Row>
              ))}
            </Col>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default BookEditModal
