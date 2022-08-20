import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const ScrollToTop = (props) => {
  const url = useParams();
  const [q] = useSearchParams();
  useEffect(() => {
    window.scroll(0, 0);
  }, [url, q]);

  return props.children;
};

export default ScrollToTop;
