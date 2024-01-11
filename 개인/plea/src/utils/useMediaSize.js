import { useMediaQuery } from "react-responsive";

const useMediaSize = () => {
  const isPc = useMediaQuery({
    query: "(min-width: 768px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)"
  })
  return {isPc, isMobile}
}

export default useMediaSize;

