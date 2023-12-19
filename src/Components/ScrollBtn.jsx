import { useState } from "react";

export default function ScrollBtn() {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  const scrollTo = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <i
      className={`scroll  fa-solid fa-arrow-up ${scroll ? "active" : ""}`}
      onClick={scrollTo}
    ></i>
  );
}
