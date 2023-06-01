import Products from "../Products/products"
import './foodCat.scss'
export default function FoodCat({title,items}){
    return(
        <div className="foodcat">
            <div className="foodcat__title">
            <h2>{title}</h2>
            </div>
            <div className="foodcat__items">
            {
                items?.map((product)=>(
                    <Products key={product.id} product={product}/>
                ))
            }
            </div>
        </div>
    )
}