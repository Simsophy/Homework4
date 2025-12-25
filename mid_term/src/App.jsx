import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import ViewUser from "./components/ViewUser";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users"));
    if (data) setUsers(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList users={users} setUsers={setUsers} />} />
        <Route path="/add" element={<AddUser users={users} setUsers={setUsers} />} />
        <Route path="/edit/:id" element={<EditUser users={users} setUsers={setUsers} />} />
        <Route path="/view/:id" element={<ViewUser users={users} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
