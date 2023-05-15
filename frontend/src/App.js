import "./App.css";
import AddRecord from "./components/AddRecord";
import RecordList from "./components/RecordList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditRecord from "./components/EditRecord";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container p-32 bg-gray-200">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/records" element={<RecordList />} />
          {/* <Route path="/nav" element={<Navbar />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/add" element={<AddRecord />} />
          <Route path="/edit/:id" element={<EditRecord />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
