import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Statistics from "./modules/dashboard/pages/Statistics";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Statistics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
