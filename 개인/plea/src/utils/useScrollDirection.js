import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);
  useEffect(() => {
    let prevScrollTop = 0;
    const getScrollDirection = () => {
      let nextScrollTop = window.scrollY;
      if (prevScrollTop < nextScrollTop) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
      prevScrollTop = nextScrollTop;
    };
    window.addEventListener("scroll", getScrollDirection);
    return () => window.removeEventListener("scroll", getScrollDirection);
  }, []);

  return isScrollDown;
}

export default useScrollDirection;