import { useParams } from "react-router-dom";

export default function ViewProduct({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="container mt-4">
      <h3>Product Details</h3>
      <p><b>Name:</b> {product.name}</p>
      <p><b>Category:</b> {product.category}</p>
      <p><b>Price per unit:</b> ${product.price}</p>
      <p><b>Unit:</b> {product.unit}</p>
      <p><b>Subtotal:</b> ${product.subtotal}</p>
    </div>
  );
}
