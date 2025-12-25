import { useParams } from "react-router-dom";

export default function ViewUser({ users }) {
  const { id } = useParams();
  const user = users.find((u) => u.id == id);

  return (
    <div className="container mt-4">
      <h3>User Details</h3>
      <p><b>First Name:</b> {user.first}</p>
      <p><b>Last Name:</b> {user.last}</p>
      <p><b>Email:</b> {user.email}</p>
    </div>
  );
}
