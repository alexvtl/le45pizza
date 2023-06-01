import './menu.scss'
import cover from '../../assets/pizza final/pizzeria.jpeg'
import FoodCat from '../../Components/FoodCat/foodCat';
import OrderButton from '../../Components/OrderButton/orderButton';

import { useEffect } from 'react';
import { useState } from 'react';

export default function Menu(){
    const [Data,setData] = useState();
    
      useEffect(() => {
        const getData = async () => {
            return await fetch('/../../API/api.json')
                .then((response) => response.json())
                .then((data) => {
                  setData(data)
                })
                .catch((error) => console.log(error));
            };
        getData();
      }, []);

    return(
        <div className="menu">
            <header className='menu__header'>
                <ul className='menu__header_ul'>
                    <li>
                    Produits fait maison
                    </li>
                    <li>
                    Ingrédients frais
                    </li>
                    <li>
                    Sans fritures
                    </li> 
                </ul>
            </header>
            <img className='menu__cover' src={cover} alt="" />
            <section className='menu__section1'>
                {
                    Data?.map((element,index) => (
                        <FoodCat key={index} title={element.title} items={element.items}/>
                    )
                    )
                }
                <div className='menu__section1__orderbtn'>
                <OrderButton lien={"/commandes"} texte={"Commander maintenant"}/>
                </div>
            </section>
                
        </div>
    )
}