import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUser({ users, setUsers }) {
  const [user, setUser] = useState({ name: "", category: "", tel_num: "" });
  const navigate = useNavigate();

  const submit = () => {
    setUsers([...users, { ...user, id: Date.now() }]);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h3>Add Product</h3>
      <input className="form-control mb-2" placeholder="Name"
        onChange={(e) => setUser({ ...user, name: e.target.value })} />
      <input className="form-control mb-2" placeholder="Category"
        onChange={(e) => setUser({ ...user, category: e.target.value })} />
      <input className="form-control mb-2" placeholder="Telephone Number"
        onChange={(e) => setUser({ ...user, tel_num: e.target.value })} />
      <button onClick={submit} className="btn btn-primary">Save</button>
    </div>
  );
}
