import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditUser({ users, setUsers }) {
  const { id } = useParams();
  const user = users.find((u) => u.id == id);
  const [edit, setEdit] = useState(user);
  const navigate = useNavigate();

  const update = () => {
    setUsers(users.map((u) => (u.id == id ? edit : u)));
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h3>Edit User</h3>
      <input className="form-control mb-2" value={edit.first}
        onChange={(e) => setEdit({ ...edit, first: e.target.value })} />
      <input className="form-control mb-2" value={edit.last}
        onChange={(e) => setEdit({ ...edit, last: e.target.value })} />
      <input className="form-control mb-2" value={edit.email}
        onChange={(e) => setEdit({ ...edit, email: e.target.value })} />
      <button onClick={update} className="btn btn-primary">Update</button>
    </div>
  );
}
