const { useLocation } = require("react-router-dom")

const usePathname = () => {
  const location = useLocation();
  const path = location.pathname;
  return path;
}

export default usePathname;