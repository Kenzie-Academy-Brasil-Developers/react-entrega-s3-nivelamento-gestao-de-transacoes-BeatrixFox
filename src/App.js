import "./App.css";
import Display from "./components/Display/Display";
import { useState } from "react/cjs/react.development";
import FormEnt from "./components/FormEnt/FormEnt";
import FormExit from "./components/FormExit/FormExit";

function App() {
  const [exitList, setExitList] = useState([
    { name: "morango", quantity: -10, price: 2 },
  ]);
  const [entryList, setEntryList] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);
  return (
    <div className="App">
      <main className="App-header">
        <FormEnt
          entryList={entryList}
          setEntryList={setEntryList}
          transactions={transactions}
          setTransactions={setTransactions}
        />
        <FormExit
          exitList={exitList}
          setExitList={setExitList}
          transactions={transactions}
          setTransactions={setTransactions}
        />
        <Display
          entryList={entryList}
          exitList={exitList}
          transactions={transactions}
        />
      </main>
    </div>
  );
}

export default App;
