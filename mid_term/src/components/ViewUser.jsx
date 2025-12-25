import { useParams } from "react-router-dom";

export default function ViewUser({ users }) {
  const { id } = useParams();
  const user = users.find((u) => u.id == id);

  return (
    <div className="container mt-4">
      <h3>User Details</h3>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Category:</b> {user.category}</p>
      <p><b>Telephone Number:</b> {user.tel_num}</p>
    </div>
  );
}
