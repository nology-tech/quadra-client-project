<<<<<<< HEAD
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
=======
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

>>>>>>> bcfa3621e49517cfb86e3b4db7bd93d458dc32ff
import "./styles/main.scss";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
