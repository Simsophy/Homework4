import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUser({ users, setUsers }) {
  const [user, setUser] = useState({ first: "", last: "", email: "" });
  const navigate = useNavigate();

  const submit = () => {
    setUsers([...users, { ...user, id: Date.now() }]);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h3>Add User</h3>
      <input className="form-control mb-2" placeholder="First Name"
        onChange={(e) => setUser({ ...user, first: e.target.value })} />
      <input className="form-control mb-2" placeholder="Last Name"
        onChange={(e) => setUser({ ...user, last: e.target.value })} />
      <input className="form-control mb-2" placeholder="Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <button onClick={submit} className="btn btn-primary">Save</button>
    </div>
  );
}
