import { useState } from "react"
import { Button } from "react-bootstrap"
import BookDeleteModal from "./BookDeleteModal"
import BookEditModal from "./BookEditModal"
import BookViewModal from "./BookViewModal"
import { FaRegEdit } from "react-icons/fa"
import { BsDisplay} from "react-icons/bs"
import { MdDeleteForever } from "react-icons/md"


function BookCell(props) {
  const { book } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{book._id}</td>
      <td>{book.title}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{book.description}</td>
      <td>
        <img src={book.poster} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      
        <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
          {book.bookpdf}
        </td>
      

      <td>
        <Button variant="primary" className="me-2" onClick={() => setViewShow(true)}>
        <BsDisplay />
        </Button>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
        <FaRegEdit style={{fontSize:"17px"}} />
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
        <MdDeleteForever />
        </Button>
      </td>
      <BookViewModal show={viewShow} setShow={setViewShow} book={book} />
      <BookDeleteModal show={deleteShow} setShow={setDeleteShow} bookId={book._id} />
      <BookEditModal show={editShow} setShow={setEditShow} book={book} />
    </tr>
  )
}

export default BookCell
