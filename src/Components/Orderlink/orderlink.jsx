import { Link } from "react-router-dom";
import './orderlink.scss'
import right from '../../assets/right-arrow.png'
export default function Orderlink( {link,logo,name,texte}){
    return(
        <Link to={link} className='orderlink'>
            <img src={logo} alt={name} className="orderlink__img" />
            <div className="orderlink__descript">
                <h2 className="orderlink__descript--title">{name}</h2>
                <p className="orderlink__descript--p">{texte}</p>
            </div>
            <div className="orderlink__right">
                <img className="orderlink__right_img" src={right} alt="" />
            </div>
        </Link>
    )
}