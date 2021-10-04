import ListFruit from "../ListFruit/ListFruit";

export const Display = ({ entryList, exitList, transactions }) => {
  return (
    <>
      <h1>Display</h1>
      <button>Mostrar saidas</button>
      <button>Mostras entradas</button>

      <ListFruit
        entryList={entryList}
        exitList={exitList}
        transactions={transactions}
      />
    </>
  );
};

export default Display;
