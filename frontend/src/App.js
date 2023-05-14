import "./App.css";
import AddRecord from "./components/AddRecord";
import RecordList from "./components/RecordList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditRecord from "./components/EditRecord";

function App() {
  return (
    <div className="container pt-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecordList />} />
          <Route path="/add" element={<AddRecord />} />
          <Route path="/edit/:id" element={<EditRecord />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
