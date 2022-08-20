import ScrollToTop from "./components/hoc/ScrollToTop";
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
import MyVoteList from "./components/MyVoteList";
import MyReviewList from "./components/MyReviewList";
import { useContext } from "react";
import Auth from "./contexts/Auth";
import "./App.css";

function App() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const auth = useContext(Auth);

  return (
    <div className="App">
      <Auth.Provider value={auth}>
        <ScrollToTop>
          <Header />
          <ErrorBoundary>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/info/:id" element={<BookInfo />} />

              <Route path="/add" element={<AddBook />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/edit/:id" element={<EditBook />} />
              <Route path="/delete/:id" element={<DeleteBook />} />

              <Route path="/mybooks" element={<MyBooks />} />
              <Route path="/myvote" element={<MyVote />} />
              <Route path="/myreview/:book_id" element={<MyReview />} />
              <Route path="/myvotelist" element={<MyVoteList />} />
              <Route path="/myreviewlist" element={<MyReviewList />} />

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
                element={<h1 className="err">Page not found!</h1>}
              />
            </Routes>
          </ErrorBoundary>
          <Footer />
        </ScrollToTop>
      </Auth.Provider>
    </div>
  );
}

export default App;
