import { Link } from "react-router-dom";
import "./footer.scss";
import logo from "../../assets/logo pro v4.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__box3">
        <p>45 Av. du Général de Gaulle, 92360 Meudon</p>
        <p>© 45pizza.fr 2024</p>
        <br />
        <br />
        <div class="card">
          <a class="socialContainer containerOne" target="_blank" href="">
            <svg viewBox="0 0 16 16" class="socialSvg instagramSvg">
              {" "}
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>{" "}
            </svg>
          </a>

          <a
            class="socialContainer containerThree"
            target="_blank"
            href="https://www.google.com/search?sa=X&sca_esv=bb7cc7e513932651&tbm=lcl&sxsrf=ADLYWIJ9CiI68UyanwV518slVEKH7QGVuw:1720528407657&q=Le+45+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDC3NDQzNjcwtDQDYiA0tNjAyPiKkcsnVcHEVMGxLLN4ESsSBwDbJfwMNQAAAA&rldimm=10791637019601919118&hl=fr-FR&ved=2ahUKEwi2wsHk-5mHAxViUqQEHXujDMcQ9fQKegQIHBAF&biw=1309&bih=693&dpr=1.1#lkt=LocalPoiReviews&lrd=0x47e67b7c675ae175:0x95c398b15a53dc8e,3">
            <svg viewBox="0 0 448 512" class="socialSvg linkdinSvg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M326.331 274.255v109.761h181.49c-7.37 47.115-54.886 138.002-181.49 138.002-109.242 0-198.369-90.485-198.369-202.006 0-111.509 89.127-201.995 198.369-201.995 62.127 0 103.761 26.516 127.525 49.359l86.883-83.635C484.99 31.512 412.741-.012 326.378-.012 149.494-.012 6.366 143.116 6.366 320c0 176.884 143.128 320.012 320.012 320.012 184.644 0 307.256-129.876 307.256-312.653 0-21-2.244-36.993-5.008-52.997l-302.248-.13-.047.024z" />
              </svg>
            </svg>
          </a>

          <a
            class="socialContainer containerFour"
            target="_blank"
            href="https://www.tiktok.com/@le45pizzeria?lang=fr">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="socialSvg whatsappSvg">
              {" "}
              <path d="M382.31 103.3c-27.76-18.1-47.79-47.07-54.04-80.82-1.35-7.29-2.1-14.8-2.1-22.48h-88.6l-.15 355.09c-1.48 39.77-34.21 71.68-74.33 71.68-12.47 0-24.21-3.11-34.55-8.56-23.71-12.47-39.94-37.32-39.94-65.91 0-41.07 33.42-74.49 74.48-74.49 7.67 0 15.02 1.27 21.97 3.44V190.8c-7.2-.99-14.51-1.59-21.97-1.59C73.16 189.21 0 262.36 0 352.3c0 55.17 27.56 104 69.63 133.52 26.48 18.61 58.71 29.56 93.46 29.56 89.93 0 163.08-73.16 163.08-163.08V172.23c34.75 24.94 77.33 39.64 123.28 39.64v-88.61c-24.75 0-47.8-7.35-67.14-19.96z"></path>{" "}
            </svg>
          </a>
        </div>
      </div>
      <div className="footer__box2">
        <img className="footer__box2__img" src={logo} alt="" />
      </div>
      <div className="footer__box1">
        <ul className="list__pages">
          <h3 className="list__pages_title">Pages</h3>
          <li className="list__pages_li">
            <Link className="list__pages_li_link" to={"/"}>
              Accueil
            </Link>
          </li>
          <li className="list__pages_li">
            <Link className="list__pages_li_link" to={"/menu"}>
              Menu
            </Link>
          </li>
          <li className="list__pages_li">
            <Link className="list__pages_li_link" to={"/commandes"}>
              Livraison & À emporter
            </Link>
          </li>
          <li className="list__pages_li">
            <Link
              to={"mailto:chafeik@hotmail.fr"}
              className="list__pages_li_link">
              Contact ✉️
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
