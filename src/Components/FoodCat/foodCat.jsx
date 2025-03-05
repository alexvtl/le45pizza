import Products from "../Products/products";
import "./foodCat.scss";
export default function FoodCat({ title, items, soustitle }) {
  return (
    <div className="foodcat">
      <div className="foodcat__title">
        <h2>{title}</h2>
        {soustitle ? <h3>{soustitle}</h3> : null}
      </div>
      <div className="foodcat__items">
        {items?.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
