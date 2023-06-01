import './header.scss'
import menuburger from '../../assets/menu-burger-v1.png'
import headerlogo from '../../assets/logo pro v3.png'
import { NavLink } from 'react-router-dom'
import { styled,keyframes } from 'styled-components'
import close from '../../assets/close.png'
import { useState } from 'react'

const MenuHeader = styled.div`
backdrop-filter: blur(2px);
background-color: rgba(0,0,0,0.2);
top:0;
left:0px;
width:100vw;
height:100vh;
z-index:8;
position:absolute;
cursor:pointer;
`
const bounce = keyframes`
0%{transform:translate(-100%)};
100%{transform:translate(0%)}`

const NavListContainer = styled.div`
display:flex;
z-index:20;
 animation: ${bounce} 800ms ease forwards ;
`

export default function Header(){
    const [openMenu,setopenmenu] = useState(false)
    const [openundermenu,setundermenu] = useState(false)
    
    function toggleUnderMenu(){
        openundermenu ? setundermenu(false) : setundermenu(true)
        
    }
    function togglemenu(){
        setundermenu(false)
        openMenu ? setopenmenu(false) : setopenmenu(true)
        
     }
    return (
        <>
        { openMenu &&( 
            <div className='back'>
        <MenuHeader onClick={togglemenu}/>
            <div className='menu__home__container'>
                <NavListContainer>
                <ul className='nav__menu__container'>
                    <li><NavLink to={"/"}  onClick={togglemenu} className="navlink_menu">Accueil</NavLink></li>
                    <li><NavLink className="navlink_menu établissements" to={"/"} onClick={toggleUnderMenu}>Établissements</NavLink></li>
                    <li><NavLink to={"/menu"}  onClick={togglemenu} className="navlink_menu">Menu</NavLink></li>
                    <li><NavLink to={"/commandes"} onClick={togglemenu} className="navlink_menu">Livraison & À emporter</NavLink></li>
                    <li><NavLink to={"mailto:chafeik@hotmail.fr"} className="navlink_menu">Contact ✉️</NavLink></li>
                </ul>
                { 
                    openundermenu && (
                        <div className='undermenu'>
                            <ul className='nav__undermenu__container'>
                                <li><a className='navlink_undermenu' href="#section5" onClick={togglemenu}>Meudon-La-Fôret</a></li>
                            </ul>
                        </div>
                    )
                }
                <div className='close__container'>
                <img className='close' src={close} alt="" onClick={togglemenu} />
                </div>
                </NavListContainer>
            </div>
            
            </div>
        )}
        <header className='header1'>
            <img className='menu__burger' src={menuburger} alt="#" onClick={togglemenu} />
            <div className='box__logo'>
                <NavLink to={"/"}>
                <img className='logo' src={headerlogo} alt="#" />
                </NavLink>
            </div>
        </header>
        </>
    )
}

