const PriceTable = ({ cartMovies }) => {
  const subTotal = cartMovies
    .reduce((total, { price }) => total + Number(price), 0)
    .toFixed(2);
  const msc = "5.10";
  const totalPrice = (Number(subTotal) + Number(msc)).toFixed(2);

  return (
    <div className="price-container">
      <div>
        <h3>Subtotal:</h3>
        <span>${subTotal}</span>
      </div>
      <div>
        <h3 className="msc">Shipping Fee:</h3>
        <span>${msc}</span>
      </div>
      <hr />
      <div>
        <h1>Order Total:</h1>
        <strong>${totalPrice}</strong>
      </div>
    </div>
  );
};

export default PriceTable;
