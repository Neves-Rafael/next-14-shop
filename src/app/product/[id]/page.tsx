export default function Product({ params }: { params: { id: string } }) {
  return <h1 className="text-red-700">Product {params.id}</h1>;
}
