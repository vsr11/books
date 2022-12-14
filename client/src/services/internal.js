import { DB_HOST_URL, USERS_HOST_URL, HOST_URL_BASE } from "../constants";

const internal_api = {
  getVote: (idUser, idBook) => {
    return fetch(
      HOST_URL_BASE + "/votes?user_id=" + idUser + "&book_id=" + idBook
    )
      .then((res) => res.json())
      .catch((e) => console.log(e));
  },

  doVote: (user_id, book_id, rating = 0, review = "") => {
    return fetch(HOST_URL_BASE + "/votes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id, book_id, rating, review }),
    })
      .then((res) => res.json())
      .catch((e) => console.log(e));
  },

  updateVote: (vote_id, rating, review) => {
    return fetch(HOST_URL_BASE + "/votes/" + vote_id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating, review }),
    })
      .then((res) => res.json())
      .catch((e) => console.log(e));
  },

  addRead: (user_id, read_arr) => {
    return fetch(HOST_URL_BASE + "/users/" + user_id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ booksRead: read_arr }),
    })
      .then((res) => res.json())
      .catch((e) => console.log(e));
  },

  login: (email, password) => {
    return fetch(HOST_URL_BASE + "/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .catch((e) => console.log(e));
  },

  userExists: (email) => {
    return fetch(`${USERS_HOST_URL}?email=${email}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.length === 0) {
          return false;
        } else {
          return res;
        }
      })
      .catch((e) => console.log(e));
  },

  getAll: (type = "books") => {
    return fetch(HOST_URL_BASE + "/" + type)
      .then((res) => res.json())
      .catch((e) => console.log(e));
  },

  getById: (id) => {
    return fetch(DB_HOST_URL + "/" + id)
      .then((res) => res.json())
      .catch((e) => console.log(e));
  },

  getGeneric: (key, value) => {
    return fetch(`${DB_HOST_URL}?${key}=${value}`)
      .then((res) => res.json())
      .catch((e) => console.log(e));
  },

  deleteBook: (id) => {
    return fetch(`${DB_HOST_URL}/${id}`, { method: "DELETE" }).catch((e) =>
      console.log(e)
    );
  },

  updateBook: (id, data) => {
    return fetch(`${DB_HOST_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((e) => console.log(e));
  },

  addBook: (dataObj) => {
    return fetch(DB_HOST_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataObj),
    })
      .then((res) => res.json())
      .catch((e) => console.log(e));
  },

  findBookByIsbn: (isbn) => {
    return internal_api.getGeneric("isbn", isbn);
  },

  findBookById: (id) => {
    return internal_api.getGeneric("id", id);
  },

  getByCategories: (cat, value) => {
    return fetch(`http://localhost:5000/books/?${cat}_like=${value}`)
      .then((res) => res.json())
      .catch((err) => console.log("Handled error:" + err));
  },
};

export default internal_api;
