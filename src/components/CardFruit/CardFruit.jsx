import "./style.css";

export const CardList = ({ fruit, isNegative = false }) => {
  return (
    <>
      <p>
        Nome: {fruit.name} , qtd :{" "}
        {isNegative === true ? Number(fruit.quantity) * -1 : fruit.quantity} ,
        valor : R$ {fruit.price}
      </p>
    </>
  );
};

export default CardList;
