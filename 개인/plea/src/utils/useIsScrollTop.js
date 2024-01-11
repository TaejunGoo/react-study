import { useState, useEffect } from "react";

const useIsScrollTop = () => {
  const [isScrollTop, setIsScrollTop] = useState(false);
  useEffect(() => {
    const top = 20;
    const getScroll = () => {
      if(window.scrollY < top){
        setIsScrollTop(true)
      }else{
        setIsScrollTop(false)
      }
    };
    getScroll();
    window.addEventListener("scroll", getScroll);
    return () => window.removeEventListener("scroll", getScroll);
  }, []);

  return isScrollTop;
}

export default useIsScrollTop;