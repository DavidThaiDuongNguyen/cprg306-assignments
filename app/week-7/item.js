export default function Item({ name, quantity, category }) {
  return (
    <li className="w-full p-2 border rounded-sm">
      <div>
        {name}
        <br />
        Quantity: {quantity}
        <br />
        Category: {category}
      </div>
    </li >
  );
}