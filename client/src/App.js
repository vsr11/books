import { useNavigate, Routes, Route, useSearchParams } from "react-router-dom";
import EditBook from "./components/EditBook";
import Edit from "./components/Edit";
import DeleteBook from "./components/DeleteBook";
import ErrorBoundary from "./components/ErrorBoundary";
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
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const auth = useContext(Auth);

  return (
    <div className="App">
      <Auth.Provider value={auth}>
        <Header />
        <ErrorBoundary>
          <Routes>
            {/* All allowed */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/info/:id" element={<BookInfo />} />

            {/* Admin allowed */}
            <Route path="/add" element={<AddBook />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/edit/:id" element={<EditBook />} />
            <Route path="/delete/:id" element={<DeleteBook />} />

            {/* Logged-in user allowed */}
            <Route path="/mybooks" element={<MyBooks />} />
            <Route path="/myvote" element={<MyVote />} />
            <Route path="/myreview/:book_id" element={<MyReview />} />

            <Route path="/" element={<Main />}>
              <Route
                path="categories/:category"
                element={<Categories view={searchParams.get("view")} />}
              />

              <Route
                index
                element={<Default view={searchParams.get("view")} />}
              />
            </Route>
            <Route
              path="*"
              element={
                // <p>There's nothing here!</p>
                <h1 className="err">Page not found!</h1>
              }
            />
          </Routes>
        </ErrorBoundary>
        <Footer />
      </Auth.Provider>
    </div>
  );
}

export default App;
