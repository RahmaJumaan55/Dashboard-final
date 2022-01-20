import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function BookAddModal(props) {
  const { show, setShow } = props
  const { categories, addBook } = useContext(BooksContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addBook}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Poster
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="poster" required />
             </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              bookpdf
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="bookpdf" required />
             </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            Category
            </Form.Label>
            <Col md="8">
              {categories.map(categoryObject => (
                <Row>
                  <Col md="2">
                    <Form.Check type="radio" name="categories" value={categoryObject._id} />
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
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add book
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default BookAddModal
