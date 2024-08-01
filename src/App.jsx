import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const EmployeeDetail = lazy(() => import("./components/Cards/Details"));
const Home = lazy(() => import("./pages/Home/Home"));
import Loader from "./components/Loader/Loader";
function App() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee/:id" element={<EmployeeDetail />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
