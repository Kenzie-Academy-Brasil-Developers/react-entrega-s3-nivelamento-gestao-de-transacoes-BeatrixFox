import CardList from "../CardFruit/CardFruit";
import "./style.css";

export const ListFruit = ({
  entryList,
  exitList,
  transactions,
  isViewEntry,
}) => {
  return (
    <section className="sectionList">
      <h4>Movimentações</h4>
      {isViewEntry &&
        entryList.map((fruit, index) => (
          <section key={index}>
            <CardList fruit={fruit} />
          </section>
        ))}
      {!isViewEntry &&
        exitList.map((fruit, index) => (
          <section key={index}>
            <CardList fruit={fruit} isNegative={true} />
          </section>
        ))}
      <h4>Todas as transações</h4>
      {transactions.map((fruit, index) => (
        <section key={index}>
          <CardList fruit={fruit} />
        </section>
      ))}
      <h5>Quantidade de Saida: {exitList.length} </h5>
      <h5 className="valueTotal">
        Valor total:
        {exitList
          .reduce((total, item) => total + Number(item.price), 0)
          .toFixed(2)}
      </h5>
    </section>
  );
};

export default ListFruit;
