// isTransparent, isScrollTop, isScrollDown, location
import { useEffect, useState } from "react";
import usePathname from "./usePathname";
import useIsScrollTop from "./useIsScrollTop";
import useScrollDirection from "./useScrollDirection";

export const useUIState = () => {
  const isScrollTop = useIsScrollTop();
  const isScrollDown = useScrollDirection();
  const isMain = usePathname() === '/';
  const [UIState, setUIState] = useState({
    isMain: false,
    isScrollDown: false,
    isScrollTop: false,
    isTransparent: false
  })
  useEffect(() => {
    const getUIState = () => {
      setUIState({
        isMain: isMain,
        isScrollDown: isScrollDown,
        isScrollTop: isScrollTop,
        isTransparent: isScrollTop && isMain,
      });
    }
    getUIState();
  },[isMain, isScrollDown, isScrollTop])
  return UIState;
}