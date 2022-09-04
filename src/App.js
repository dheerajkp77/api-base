import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanel from "./AdminPanel/AdminPanel";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
