import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold text-center">Shopping List</h1>
      <ItemList />
    </main>
  );
}
