import "../styles/Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <a href="https://www.goodreads.com/">
        <i className="fa-solid fa-book-open-reader"></i>Goodreads
      </a>

      <a href="https://books.google.com/">
        <i className="fa-solid fa-book-open"></i>Google Books
      </a>
    </div>
  );
};

export default Footer;
