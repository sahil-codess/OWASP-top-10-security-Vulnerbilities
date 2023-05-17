import AddRecord from "./components/AddRecord";
import RecordList from "./components/RecordList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditRecord from "./components/EditRecord";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AuthProvider } from "./components/utils/auth";
import RequireAuth from "./components/RequireAuth";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/records"
              element={
                <RequireAuth>
                  <RecordList />
                </RequireAuth>
              }
            />
            {/* <Route path="/nav" element={<Navbar />} /> */}
            <Route path="/" element={<Login />} />
            <Route
              path="/add"
              element={
                <RequireAuth>
                  <AddRecord />
                </RequireAuth>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <RequireAuth>
                  <EditRecord />
                </RequireAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
