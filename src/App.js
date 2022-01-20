import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Books from "./pages/Books"
import BooksContext from "./utils/BooksContext"
import Login from "./pages/Login"
import Categories from "./pages/Categories"


function App() {
  const [books, setBooks] = useState([])
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  const getBooks = async () => {
    const response = await axios.get("http://localhost:5000/api/books")
    setBooks(response.data)
  }

  const getCategories = async () => {
    const response = await axios.get("http://localhost:5000/api/categories")
    setCategories(response.data)
  }

  useEffect(() => {
    getBooks()
    getCategories()
   
  }, [])

  const deleteBook = async bookId => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${bookId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardBooks,
        },
      })
      toast.success("book deleted")
      getBooks()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }


  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login/admin", adminBody)
      localStorage.tokenDashboardBooks = response.data
      toast.success("login success")
      navigate("/books")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editBook = async (e, bookId) => {
    e.preventDefault()
    try {
      const form = e.target
     
        const bookBody = {
          title: form.elements.title.value,
          description: form.elements.description.value,
          poster: form.elements.poster.value,
          category: [form.elements.category.value],
          bookpdf:form.elements.bookpdf.value,
        }
      await axios.put(`http://localhost:5000/api/books/${bookId}`, bookBody, {
        headers: {
          Authorization: localStorage.tokenDashboardBooks,
        },
      })
      getBooks()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addBook = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const categories = []
      form.elements.categories.forEach(category => {
        if (category.checked) {
          categories.push(category.value)
        }
      })

      const bookBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        poster: form.elements.poster.value,
        category: categories,
        bookpdf:form.elements.bookpdf.value,
      }
      await axios.post(`http://localhost:5000/api/books`, bookBody, {
        headers: {
          Authorization: localStorage.tokenDashboardBooks,
        },
      })
      getBooks()
      toast.success("add book success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addcategory = async e => {
    e.preventDefault()
    try {
      const form = e.target

     

      const categoryBody = {
        name: form.elements.name.value,
      }
      await axios.post(`http://localhost:5000/api/categories`, categoryBody, {
        headers: {
          Authorization: localStorage.tokenDashboardBooks,
        },
      })
      getCategories()
      toast.success("add category success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editCategory = async (e, categoryId) => {
    e.preventDefault()
    try {
      const form = e.target
     
        const categoryBody = {
          name: form.elements.name.value,
         
        }
      await axios.put(`http://localhost:5000/api/categories/${categoryId}`, categoryBody, {
        headers: {
          Authorization: localStorage.tokenDashboardBooks,
        },
      })
      getCategories()
      toast.success("edit category success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deletecategory = async categoryId => {
    try {
      await axios.delete(`http://localhost:5000/api/categories/${categoryId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardBooks,
        },
      })
      toast.success("category deleted")
      getCategories()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    books,
    categories,
    deleteBook,
    login,
    editBook,
    addBook,
    addcategory,
    editCategory,
    deletecategory,
  }

  return (
    <BooksContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route path="/books" element={<Books />} />
            <Route path="/login" element={<Login />} />
            <Route path="/categories" element={<Categories />} />

          </Routes>
        </Box>
      </Box>
    </BooksContext.Provider>
  )
}

export default App
