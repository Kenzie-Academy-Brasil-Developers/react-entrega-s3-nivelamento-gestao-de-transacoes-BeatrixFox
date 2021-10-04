export const CardList = ({ fruit }) => {
  return (
    <>
      <p>
        Nome: {fruit.name} , qtd : {fruit.quantity} , valor : R$ {fruit.price}
      </p>
    </>
  );
};

export default CardList;
