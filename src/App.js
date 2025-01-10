import { useState } from "react";

const items = [
  {
    name: "toamto",
    quantity: 2,
    price: 10,
  },
  { name: "apple", quantity: 1, price: 7 },
  { name: "watermelon", quantity: 1, price: 15 },
];

export default function App() {
  return (
    <div className="section">
      <div className="app">
        <ShoppingList />
        <StoreList />
      </div>
    </div>
  );
}

function ShoppingList() {
  return (
    <div className="shopping-list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.name} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <li className="item">
      You have {quantity} {item.name} for ${item.price}
      <button className="minus" onClick={() => setQuantity(quantity - 1)}>
        -
      </button>
      <button>Delete</button>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </li>
  );
}

function StoreList() {
  return <div className="store-list">salut</div>;
}
