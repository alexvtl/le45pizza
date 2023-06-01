import { NavLink } from "react-router-dom";
import './orderButton.scss'

export default function OrderButton({lien,texte}){
     return (
        <NavLink to={lien} className="orderButton">
                {texte}
        </NavLink>
     )
}