import NewItem from "./new-item";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen p-4 text-center">
      < h1 className="text-2xl text-center mt-5 font-bold mb-5" >Week 7 - New Item</h1 >
      <div className="w-100 inline-block text-left space-y-2">
        <NewItem />
        <ItemList />
      </div>
    </main >
  );
}