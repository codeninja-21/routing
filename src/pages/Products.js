import { Link } from "react-router-dom";

export default function Products() {
  const items = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Keyboard" },
    { id: 3, name: "Mouse" },
  ];

  return (
    <div>
      <h1>Daftar Produk</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
