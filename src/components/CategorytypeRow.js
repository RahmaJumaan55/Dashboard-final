import { useState } from "react"
import { Button } from "react-bootstrap"
import React from "react"
import { FaRegEdit } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md"

import CategoryEditModal from "./CategoryEditModal"
import CategoryDeleteModal from "./CategoryDeleteModal"
function CategoryType(props) {
  const { category } = props
  const [editShow, setEditShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  return (
    <>
      <tr style={{ fontSize: "13px", fontWeight: "600", textAlign: "center", paddingTop: "200px" }}>
        <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{category._id}</td>
        <td style={{ paddingTop: "10px" }}>{category.name}</td>
        <td>
          <Button
            variant=""
            style={{ fontSize: "30px", fontWeight: "800" }}
            className="me-2"
            onClick={() => setEditShow(true)}
          >
            <FaRegEdit style={{fontSize:"20px", color:"green"}} />
          </Button>
          <Button style={{ fontSize: "25px", fontWeight: "bold" }} variant="" onClick={() => setDeleteShow(true)}>
            <MdDeleteForever style={{fontSize:"20px", color:"red"}} />
          </Button>
        </td>
        <CategoryEditModal show={editShow} setShow={setEditShow} category={category} />
        <CategoryDeleteModal  show={deleteShow} setShow={setDeleteShow}   categoryId={category._id} />
      </tr>
    </>
  )
}
export default CategoryType
