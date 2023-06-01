import { Link } from 'react-router-dom'
import './footer.scss'
import logo from '../../assets/logo pro v4.png'

export default function Footer(){
    return (
        <div className="footer">
            <div className='footer__box3'>
                <p>
                45 Av. du Général de Gaulle, 92360 Meudon
                </p>
                <p>© Le 45 Pizza 2023</p>
            </div>
            <div className='footer__box2'>
                <img className='footer__box2__img' src={logo} alt="" />
            </div>
            <div className='footer__box1'>
                <ul className='list__pages'>
                <h3 className='list__pages_title'>
                        Pages
                    </h3>
                    <li className='list__pages_li'>
                        <Link className='list__pages_li_link' to={"/"}>Accueil</Link>
                    </li>
                    <li className='list__pages_li'>
                        <Link className='list__pages_li_link' to={"/menu"}>Menu</Link>
                    </li>
                    <li className='list__pages_li'>
                        <Link className='list__pages_li_link' to={"/commandes"}>Livraison & À emporter</Link>
                    </li>
                    <li className='list__pages_li'>
                        <Link to={"mailto:chafeik@hotmail.fr"} className='list__pages_li_link'>Contact ✉️</Link>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}