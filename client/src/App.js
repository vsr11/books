import { useNavigate, Routes, Route } from "react-router-dom";

import EditBook from "./components/EditBook";
import DeleteBook from "./components/DeleteBook";
import Main from "./components/Main";
import Default from "./components/Default";
import AddBook from "./components/AddBook";
import BookInfo from "./components/BookInfo";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Categories from "./components/Categories";
import MyBooks from "./components/MyBooks";
import MyVote from "./components/MyVote";
import MyReview from "./components/MyReview";
// import RatingStars from "./components/RatingStars";

// import internal_api from "../services/internal";
import { useContext } from "react";
// import SortCount from "./components/SortCount";
// import SortAv from "./components/SortAv";
// import MainList from "./components/MainList";

import Auth from "./contexts/Auth";
import "./App.css";
// import internal_api from "./services/internal";
// import Big from "./components/Big";

function App() {
  // Keep! -- login/logout breaks without this!
  const navigate = useNavigate();
  const auth = useContext(Auth);

  return (
    <div className="App">
      <Auth.Provider value={auth}>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/delete/:id" element={<DeleteBook />} />
          <Route path="/info/:id" element={<BookInfo />} />
          <Route path="/mybooks" element={<MyBooks />} />
          <Route path="/myvote" element={<MyVote />} />
          <Route path="/myreview/:book_id" element={<MyReview />} />
          {/* <Route path="/ratingstars" element={<RatingStars />} /> */}

          <Route path="/" element={<Main />}>
            <Route path="categories/:category" element={<Categories />} />
            <Route index element={<Default />} />
          </Route>
          <Route path="*" element={<p>There's nothing here!</p>} />
        </Routes>
        <Footer />
      </Auth.Provider>
    </div>
  );
}

export default App;
