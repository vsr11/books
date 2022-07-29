import { Routes, Route } from "react-router-dom";

// import './App.css';

import EditBook from "./components/EditBook";
import DeleteBook from "./components/DeleteBook";
import FindBookInternally from "./components/FindBookInternally";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FindBookInternally />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Routes>
    </div>
  );
}

export default App;
