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
      <input className="form-control mb-2" value={edit.name}
        onChange={(e) => setEdit({ ...edit, name: e.target.value })} />
      <input className="form-control mb-2" value={edit.category}
        onChange={(e) => setEdit({ ...edit, category: e.target.value })} />
      <input className="form-control mb-2" value={edit.tel_num}
        onChange={(e) => setEdit({ ...edit, tel_num: e.target.value })} />
      <button onClick={update} className="btn btn-primary">Update</button>
    </div>
  );
}
