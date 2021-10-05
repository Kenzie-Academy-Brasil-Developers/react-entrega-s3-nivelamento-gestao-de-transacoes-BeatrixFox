import { useState } from "react";
import "./style.css";

function FormExit({ exitList, setExitList, transactions, setTransactions }) {
  const [nameFruit, setNameFruit] = useState("");
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();

  const AddList = (nameFruit, quantity, price) => {
    setExitList([
      ...exitList,
      { name: nameFruit, quantity: quantity, price: price },
    ]);
    setTransactions([
      ...transactions,
      { name: nameFruit, quantity: quantity, price: price },
    ]);
  };

  return (
    <div className="Form-section">
      <h4>Digite as saídas</h4>
      <input
        type="text"
        value={nameFruit}
        onChange={(event) => setNameFruit(event.target.value)}
        className="Form-input"
        placeholder="Name"
      />
      <input
        type="text"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
        className="Form-input"
        placeholder="Quantity"
      />
      <input
        type="text"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        className="Form-input"
        placeholder="Price"
      />
      <button
        className="Form-button"
        onClick={() => {
          AddList(nameFruit, quantity, price);
        }}
      >
        Enviar
      </button>
    </div>
  );
}

export default FormExit;
