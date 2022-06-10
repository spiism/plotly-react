import "./App.scss";
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Blank from "./pages/Blank";
import BarChart from "./pages/BarChart";
import PieChart from "./pages/PieChart";
import AreaChart from "./pages/AreaChart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Blank />} />
          <Route path="/barchart" element={<BarChart />} />
          <Route path="/piechart" element={<PieChart />} />
          <Route path="//areachart" element={<AreaChart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
