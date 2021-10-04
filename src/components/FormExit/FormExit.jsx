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
      <input
        type="text"
        value={nameFruit}
        onChange={(event) => setNameFruit(event.target.value)}
        className="Form-input"
      />
      <input
        type="text"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
        className="Form-input"
      />
      <input
        type="text"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        className="Form-input"
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
