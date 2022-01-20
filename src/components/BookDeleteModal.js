import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function BookDeleteModal(props) {
  const { deleteBook } = useContext(BooksContext)
  const { show, setShow, bookId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this book ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteBook(bookId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default BookDeleteModal
