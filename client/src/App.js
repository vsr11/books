import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import EditBook from "./components/EditBook";
import DeleteBook from "./components/DeleteBook";
import Main from "./components/Main";
import AddBook from "./components/AddBook";
import BookInfo from "./components/BookInfo";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/info/:id" element={<BookInfo />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />

        <Route path="*" element={<p>There's nothing here!</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
