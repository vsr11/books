import { API_KEY, BOOKS_BASE_URL } from "../constants";

const external_api = {
  getByIsbn: (isbn) => {
    return fetch(BOOKS_BASE_URL + "?q=isbn:" + isbn + "&key=" + API_KEY)
      .then((res) => res.json())
      .catch((e) => console.log(e));
  },

  extactBookData: (bookObj, extraDataToAdd = {}) => {
    const newData = bookObj?.items?.[0];
    const onebook = {
      id: newData?.id,
      title: newData?.volumeInfo?.title,
      authors: newData?.volumeInfo?.authors,
      publisher: newData?.volumeInfo?.publisher,
      publishedDate: newData?.volumeInfo?.publishedDate,
      pageCount: newData?.volumeInfo?.pageCount,
      img: newData?.volumeInfo?.imageLinks?.thumbnail || "",
      rating: [0, 0, 0, 0, 0],
      description: newData?.volumeInfo?.description,
      language: newData?.volumeInfo?.language,
      ...extraDataToAdd,
    };
    return onebook;
  },
};

export default external_api;
