import CardList from "../CardFruit/CardFruit";
import "./style.css";

export const ListFruit = ({
  entryList,
  exitList,
  transactions,
  isViewEntry,
}) => {
  const total = exitList
    .reduce((total, item) => {
      let totalFruit = Number(item.quantity);
      if (totalFruit >= 0) {
        return total + Number(item.price) * totalFruit;
      } else {
        totalFruit = totalFruit * -1;
        return total + Number(item.price) * totalFruit;
      }
    }, 0)
    .toFixed(2);

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
      <h5 className="valueTotal">Valor total : {total}</h5>
    </section>
  );
};

export default ListFruit;
