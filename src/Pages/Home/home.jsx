import "./home.scss";
import photohome from "../../assets/pizza-exemple-3-.png";
import photohome2 from "../../assets/photo pizza ingredients.png";
import photohome3 from "../../assets/photo cover 3.png";
import photohome4 from "../../assets/photo cover 4.png";
import logoocover from "../../assets/logo pro v1.png";
import logoocover2 from "../../assets/logo pro v4.png";
import right from "../../assets/right-arrow-white.png";
import down from "../../assets/down.png";
import place from "../../assets/place.png";
import phone from "../../assets/phone.png";
import city from "../../assets/planle45.png";
import OrderButton from "../../Components/OrderButton/orderButton";
import pizzaAmericaine from "../..//assets/pizza final/pizza_americaine_v1.png";
import croque from "../../assets/pizza final/croque jambon v2.png";
import pizzaAlger from "../../assets/pizza final/pizza algerienne 1 oeuf pro.png";
import pizzafrom from "../../assets/pizza final/pizza 4 fromages pro.png";
import pizzaleg from "../../assets/pizza final/pizza leg v6.png";
import tiramisu from "../../assets/pizza final/tiramisu chocolate speculos.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main id="home">
      <header className="Home__header">
        <ul className="Home__header_ul">
          <li>Pizzas à partir de 5,50 €</li>
          <li>Viandes de boucherie (steak haché, merguez, poulet)</li>
          <li>Ingrédients frais, cuisinés, marinés</li>
        </ul>
      </header>
      <section id="section1" className="section1">
        <img className="photohome" src={photohome} alt="" />
        <img className="logocover" src={logoocover2} alt="" />
        <div className="section1__button">
          <OrderButton lien={"/commandes"} texte={"Commander maintenant"} />
        </div>
        <img className="section1__down" src={down} alt="down" />
      </section>
      <section className="section2">
        <div className="section2__box">
          <span>
            <h2>
              Bienvenue au 45 ! Retrouvez-nous dans notre restaurant à
              Meudon-la-forêt
            </h2>
          </span>
          <span>
            <p>
              Au 45 Pizza, vous pourrez retrouver une cuisine de qualité au
              meilleur prix, fait maison et avec des ingrédients frais . Testez
              ainsi nos délicieuses pizzas, nos tacos et burgers maison ou bien
              laissez-vous tenter par nos délicieux desserts. Vivez l’expérience
              en livraison ou à emporter ! A bientôt au 45 !
            </p>
          </span>
          <div className="section2__button">
            <OrderButton lien={"/commandes"} texte={"Commander maintenant"} />
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="section3__box1">
          <div className="section3__box1__img1">
            <img className="section3__img" src={pizzaAlger} alt="" />
          </div>
          <div className="section3__box1__img2">
            <img className="section3__img" src={pizzaAmericaine} alt="" />
          </div>
          <div className="section3__box1__img3">
            <img className="section3__img" src={pizzafrom} alt="" />
          </div>
        </div>
        <div className="section3__box2">
          <div className="section3__box2__img1">
            <img className="section3__img" src={pizzaleg} alt="" />
          </div>
          <div className="section3__box2__img2">
            <img className="section3__img" src={croque} alt="" />
          </div>
          <div className="section3__box2__img3">
            <img className="section3__img" src={tiramisu} alt="" />
          </div>
        </div>
      </section>
      <section className="section4">
        <Link to={"/menu"} className="menubutton">
          <div className="orderlink__descript">
            <p className="orderlink__descript__p">Voir la carte</p>
          </div>
          <div className="menubutton__right">
            <img className="menubutton__right_img" src={right} alt="" />
          </div>
        </Link>
      </section>
      <section id="section5" className="section5">
        <div className="section5__title">
          <h2>Infos</h2>
        </div>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10515.007411125991!2d2.2247871!3d48.7866275!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b7c675ae175%3A0x95c398b15a53dc8e!2sLe%2045!5e0!3m2!1sfr!2sfr!4v1685134198471!5m2!1sfr!2sfr" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <div className="plan__box">
          <img className="plan__img" src={city} alt="" />
          <div className="plan__btn">
            <OrderButton
              lien={
                "https://www.google.com/maps/dir//Le+45+45+Av.+du+G%C3%A9n%C3%A9ral+de+Gaulle+92360+Meudon/@48.7866275,2.2247871,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e67b7c675ae175:0x95c398b15a53dc8e!2m2!1d2.2247871!2d48.7866275?entry=ttu"
              }
              texte={"Itinéraire"}
            />
          </div>
        </div>
        <div className="infos__box">
          <div className="infos__box2">
            <img className="tel" src={phone} alt="" />
            <a href="tel:+33975224803">09 75 22 48 03</a>
          </div>
          <div className="infos__box2">
            <img className="place" src={place} alt="" />
            <p>45 Av. du Général de Gaulle, 92360 Meudon</p>
          </div>
        </div>
        <div className="horaires">
          <div className="horaires__box">
            <h4 className="horaires__day">Lundi</h4>
            <span className="horaires__box__time">
              <p>11:30 – 15:00</p>
              <p>18:30 – 22:00</p>
            </span>
          </div>
          <div className="horaires__box">
            <h4 className="horaires__day">Mardi</h4>
            <span className="horaires__box__time">
              <p>11:30 – 15:00</p>
              <p>18:30 – 22:00</p>
            </span>
          </div>
          <div className="horaires__box">
            <h4 className="horaires__day">Mercredi</h4>
            <span className="horaires__box__time">
              <p>11:30 – 15:00</p>
              <p>18:30 – 22:00</p>
            </span>
          </div>
          <div className="horaires__box">
            <h4 className="horaires__day">Jeudi</h4>
            <span className="horaires__box__time">
              <p>11:30 – 15:00</p>
              <p>18:30 – 22:00</p>
            </span>
          </div>
          <div className="horaires__box">
            <h4 className="horaires__day">Vendredi</h4>
            <span className="horaires__box__time">
              <p>11:30 – 14:00</p>
              <p>18:00 – 22:00</p>
            </span>
          </div>
          <div className="horaires__box">
            <h4 className="horaires__day">Samedi</h4>
            <span className="horaires__box__time">
              <p>11:30 – 15:00</p>
              <p>18:30 – 22:00</p>
            </span>
          </div>
          <div className="horaires__box dimanche">
            <h4 className="horaires__day ">Dimanche</h4>
            <span className="horaires__box__time">
              <p>18:30 - 22:00</p>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
