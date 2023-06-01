import './order.scss'
import Orderlink from '../../Components/Orderlink/orderlink'
import uber from '../../assets/uber-eats.png'
import deliveroo from '../../assets/deliveroo.png'
import livraison  from '../../assets/livraison.png'
import { useEffect } from 'react'
export default function Order(){
    const ubereatslink = "https://www.ubereats.com/store/le-45/N_iS9p7PTgebt7xysAUwnA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkxlJTIwNDUlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKZGVGYVozeDc1a2NSanR4VFdyR1l3NVUlMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDguNzg2NjI3NDk5OTk5OTklMkMlMjJsb25naXR1ZGUlMjIlM0EyLjIyNDc4NzA5OTk5OTk5OSU3RA%3D%3D&ps=1"
    const deliveroolink = "https://deliveroo.fr/fr/menu/Paris/meudon-la-foret/le-45-meudon?day=today&geohash=u09td9qp878f&time=1915"
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <section className="order">
            <div className="order__header">
                <h1>Livraison & À emporter</h1>
                <p>Le 45 - Meudon-la-fôret</p>
            </div>
            <img className='order__imglivraison' src={livraison} alt="" />
            <h3 className='order__texte'>Vous pouvez également commander au <a className='tel' href="tel:+33975224803">09 75 22 48 03</a> ( à emporter uniquement )</h3>
            <section className="order__section">
            <Orderlink link={ubereatslink} logo={uber} name={"Uber"} texte={"Livraison"}/>
            <Orderlink link={deliveroolink} logo={deliveroo} name={"Deliveroo"} texte={"Livraison"}/>
            </section>
        </section>
    )
}