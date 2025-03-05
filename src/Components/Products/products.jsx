import "./products.scss";

export default function Products({ product }) {
  return (
    <div className="product">
      <div className="product__boxinfos">
        <div className="product__infos__name">
          <p>{product.name}</p>
        </div>
        <div className="product__infos__prix">
          {product.prix && <p>{parseFloat(product.prix).toFixed(2)}€</p>}
        </div>
        <div className="product__infos__desc">
          <p>{product.description}</p>
        </div>
      </div>
      <div className="product__boximg">
        <img className="product__img" src={product.picture} alt="" />
      </div>
    </div>
  );
}
