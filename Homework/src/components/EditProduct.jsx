import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function EditProduct({ products, setProducts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === Number(id));
  const [form, setForm] = useState(product || {
    name: "",
    category: "",
    price: 0,
    unit: 0,
    subtotal: 0
  });

  useEffect(() => {
    if (product) setForm(product);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedForm = { ...form, [name]: value };

    // Recalculate subtotal if price or unit changes
    if (name === "price" || name === "unit") {
      const price = Number(updatedForm.price);
      const unit = Number(updatedForm.unit);
      updatedForm.subtotal = price * unit;
    }

    setForm(updatedForm);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedProducts = products.map(p =>
      p.id === Number(id) ? form : p
    );

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    navigate("/");
  };

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Product</h2>

      <form onSubmit={handleUpdate}>
        <table border="1" width="100%" cellPadding="8">
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input name="name" value={form.name} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>Category</td>
              <td>
                <input name="category" value={form.category} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>Price</td>
              <td>
                <input name="price" type="number" value={form.price} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>Unit</td>
              <td>
                <input name="unit" type="number" value={form.unit} onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td>
                <input name="subtotal" type="number" value={form.subtotal} readOnly />
              </td>
            </tr>
          </tbody>
        </table>

        <button type="submit">Update</button>
        <button type="button" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
}

export default EditProduct;
