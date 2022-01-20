import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"
import BookCell from "../components/BookCell"
import AddIcon from "@mui/icons-material/Add"
import BookAddModal from "../components/BookAddModal"
import CategorytypeRow from "../components/CategorytypeRow"
import CategoryAddModal from "../components/CategoryAddModal"

function Categories() {
  const { categories } = useContext(BooksContext)
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
            <th style={{ width: "20%" }}>#</th>
            <th style={{ width: "50%" }}>name</th>
            <th style={{ width: "30" }}>Action</th>

          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <CategorytypeRow key={category._id} category={category} />
          ))}
        </tbody>
      </Table>
      <CategoryAddModal show={show} setShow={setShow}/>
      
    </>
  )
}

export default Categories
