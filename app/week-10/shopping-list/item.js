export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li className="w-full p-2 border rounded-sm cursor-pointer hover:bg-blue-50" onClick={() => onSelect({ name, quantity, category })}>
      <div>
        {name}
        <br />
        Quantity: {quantity}
        <br />
        Category: {category}
      </div>
    </li>
  );
}
