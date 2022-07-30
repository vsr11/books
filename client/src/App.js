import { Routes, Route } from "react-router-dom";

// import './App.css';

import EditBook from "./components/EditBook";
import DeleteBook from "./components/DeleteBook";
import Main from "./components/Main";
import AddBook from "./components/AddBook";
import BookInfo from "./components/BookInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/info/:id" element={<BookInfo />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Routes>
    </div>
  );
}

export default App;
