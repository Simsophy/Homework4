import { Link } from "react-router-dom";

export default function UserList({ users, setUsers }) {
  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="container mt-4">
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th>#</th><th>Name</th><th>Category</th><th>Telephone Number</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={u.id}>
              <td>{i + 1}</td>
              <td>{u.name}</td>
              <td>{u.category}</td>
              <td>{u.tel_num}</td>
              <td>
                <Link to={`/view/${u.id}`} className="btn btn-primary btn-sm me-1">View</Link>
                <Link to={`/edit/${u.id}`} className="btn btn-outline-primary btn-sm me-1">Edit</Link>
                <button onClick={() => deleteUser(u.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr><td colSpan="5">No Products</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
