import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct({ products, setProducts }) {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    unit: 0,
    subtotal: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedProduct = { ...product, [name]: value };

    // Recalculate subtotal if price or unit changes
    if (name === "price" || name === "unit") {
      const price = Number(updatedProduct.price);
      const unit = Number(updatedProduct.unit);
      updatedProduct.subtotal = price * unit;
    }

    setProduct(updatedProduct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.name || !product.category || !product.price || !product.unit) {
      alert("Please fill all fields");
      return;
    }

    const price = Number(product.price);
    const unit = Number(product.unit);
    const subtotal = price * unit;

    // Check if product exists
    const existingIndex = products.findIndex(
      (p) => p.name === product.name && p.category === product.category
    );

    let updatedProducts;

    if (existingIndex >= 0) {
      // Increase unit and subtotal
      const existingProduct = products[existingIndex];
      const newUnit = existingProduct.unit + unit;
      const newSubtotal = existingProduct.price * newUnit;
      updatedProducts = [...products];
      updatedProducts[existingIndex] = { ...existingProduct, unit: newUnit, subtotal: newSubtotal };
    } else {
      const newProduct = { ...product, id: Date.now(), price, unit, subtotal };
      updatedProducts = [...products, newProduct];
    }

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <table width="100%" cellPadding="8">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Unit</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No</td>
              <td>
                <input name="name" value={product.name} onChange={handleChange} placeholder="Name" />
              </td>
              <td>
                <input name="category" value={product.category} onChange={handleChange} placeholder="Category" />
              </td>
              <td>
                <input name="price" type="number" value={product.price} onChange={handleChange} placeholder="Price" />
              </td>
              <td>
                <input name="unit" type="number" value={product.unit} onChange={handleChange} placeholder="Unit" />
              </td>
              <td>
                <input name="subtotal" type="number" value={product.subtotal} readOnly placeholder="Subtotal" />
              </td>
              <td>
                <button type="submit">Save</button>
                <button type="button" onClick={() => navigate("/")}>Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
