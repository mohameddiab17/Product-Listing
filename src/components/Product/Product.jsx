const Product = ({ product }) => {
  return (
    <>
      <div className="w-75 h-100">
        <img className="w-100 h-50" src={product.image} alt={product.title} />
        <h1 className="fs-3 text-muted pt-sm-3">
          {product.title.split(" ", 2).join(" ")}
        </h1>
        <div className=" px-1">
          <span className="fw-bold d-block">{product.price} EGP</span>
          <span>rate: {product.rating.rate}</span>
        </div>
      </div>
    </>
  );
};

export default Product;
