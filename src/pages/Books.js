import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"
import BookCell from "../components/BookCell"
import AddIcon from "@mui/icons-material/Add"
import BookAddModal from "../components/BookAddModal"

function Books() {
  const { books } = useContext(BooksContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Books</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Title</th>
            <th style={{ width: "18%" }}>Description</th>
            <th style={{ width: "18%" }}>Poster</th>
            <th style={{ width: "9%" }}>bookpdf</th>
            <th style={{ width: "36%" }}>category</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <BookCell key={book._id} book={book} />
          ))}
        </tbody>
      </Table>
      <BookAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Books
