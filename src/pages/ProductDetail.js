import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Detail Produk</h2>
      <p>Anda sedang melihat detail produk dengan ID: {id}</p>
    </div>
  );
}
