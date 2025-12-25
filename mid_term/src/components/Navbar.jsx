import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary px-4">
      <h4 className="text-white">Product Management</h4>
      <Link to="/add" className="btn btn-outline-light">Add Product</Link>
    </nav>
  );
}
