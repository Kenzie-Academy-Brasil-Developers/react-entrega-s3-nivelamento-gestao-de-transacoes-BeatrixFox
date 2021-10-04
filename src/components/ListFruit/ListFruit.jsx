import CardList from "../CardFruit/CardFruit";

export const ListFruit = ({ entryList, exitList, transactions }) => {
  console.log(exitList, entryList, transactions);
  return (
    <section>
      {entryList.map((fruit, index) => (
        <section key={index}>
          <CardList fruit={fruit} />
        </section>
      ))}
      {exitList.map((fruit, index) => (
        <section key={index}>
          <CardList fruit={fruit} />
        </section>
      ))}
      {transactions.map((fruit, index) => (
        <section key={index}>
          <CardList fruit={fruit} />
        </section>
      ))}
    </section>
  );
};

export default ListFruit;
