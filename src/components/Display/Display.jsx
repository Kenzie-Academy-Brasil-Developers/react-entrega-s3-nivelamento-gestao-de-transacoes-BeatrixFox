import { useState } from "react";
import ListFruit from "../ListFruit/ListFruit";
import "./style.css";

export const Display = ({ entryList, exitList, transactions }) => {
  const [isViewEntry, setIsViewEntry] = useState(true);
  const [text, setText] = useState("Mostrar as saídas");

  const HandlerChangeDisplay = () => {
    setIsViewEntry(!isViewEntry);
    isViewEntry === true
      ? setText("Mostrar as saídas")
      : setText("Mostrar as entradas");
  };

  return (
    <div className="display">
      <h1>Display</h1>
      <button onClick={HandlerChangeDisplay}>{text}</button>

      <ListFruit
        entryList={entryList}
        exitList={exitList}
        transactions={transactions}
        isViewEntry={isViewEntry}
      />
    </div>
  );
};

export default Display;
