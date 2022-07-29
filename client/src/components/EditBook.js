import internal_api from "../services/internal";
import { useState, useEffect } from "react";
import { categories } from "../utils/categories";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [onebook, setBook] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    internal_api.getGeneric("id", params.id).then((res) => {
      setBook(res?.[0]);
    });
  }, [params.id]);

  const EditBookHandle = (e) => {
    e.preventDefault();
    let book = onebook;
    if (book) {
      let categories = [];

      for (let x of e.currentTarget.parentNode) {
        if (x.type === "checkbox" && x.checked) {
          categories.push(x.value);
        }

        onebook.categories = categories;
      }

      internal_api
        .updateBook(book.id, {
          title: document.forms[0].title.value,
          description: document.forms[0].text.value,
          categories: categories,
          img: document.forms[0].img.value,
        })
        .then(navigate("/edit/" + params.id));
    }
  };

  return (
    <form>
      <h1>{onebook?.title}</h1>
      <img src={onebook?.img} alt="" />

      <div className="categories">
        <h4>CATEGORIES</h4>

        {categories.map((x) => {
          return (
            <div>
              <label htmlFor={x}>{x}</label>
              <input
                type="checkbox"
                id={x}
                name="categories"
                value={x}
                defaultChecked={onebook?.categories?.includes(x) && "checked"}
              />
            </div>
          );
        })}
      </div>

      <div>
        <label htmlFor="img">Image:</label>
        <input type="text" name="img" defaultValue={onebook?.img} />
      </div>

      <div>
        <label htmlFor="text">
          <h4>DESCRIPTION</h4>
        </label>
        <br />
        <textarea
          name="text"
          id="text"
          cols="30"
          rows="10"
          defaultValue={onebook?.description}
        ></textarea>
      </div>

      <input type="submit" value="Edit book" onClick={EditBookHandle} />
    </form>
  );
};

export default EditBook;
