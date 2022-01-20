
import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function CategoryDeleteModal(props) {
  const { deletecategory } = useContext(BooksContext)
  const { show, setShow, categoryId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this Category ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deletecategory(categoryId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CategoryDeleteModal
