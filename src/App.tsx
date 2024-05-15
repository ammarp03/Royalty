import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MacBookPro16 from "./pages/MacBookPro16";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);


  return (
    <Routes>
      <Route path="/" element={<MacBookPro16 />} />
    </Routes>
  );
}
export default App;
