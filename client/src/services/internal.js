import { DB_HOST_URL } from "../constants";

const internal_api = {
  getVote: (idUser, idBook) => {
    return fetch(
      HOST_URL_BASE + "/votes?user_id=" + idUser + "&book_id=" + idBook
    )
      .then((res) => res.json())
      .catch((e) => {
        console.log(e);
      });
  },

  doVote: (user_id, book_id, rating = 0, comment = "") => {
    return fetch(HOST_URL_BASE + "/votes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id, book_id, rating, comment }),
    })
      .then((res) => res.json())
      .catch((e) => console.log(e));
  },

  updateVote: (vote_id, rating, comment) => {
    return fetch(HOST_URL_BASE + "/votes/" + vote_id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating, comment }),
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

  getAll: () => {
    return fetch(DB_HOST_URL)
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
