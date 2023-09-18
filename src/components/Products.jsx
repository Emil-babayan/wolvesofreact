import "./products.style.scss"
import { data } from "../data/data"
import { useState } from "react"
import { Link } from "react-router-dom"

const init = (obj) => {
    return Object.values(obj).flat()
}

const Products = () => {

    const [products,setProducts] = useState(() => init(data))

  return (
    <section className="products">

        {products.map(({id, brand, model, price, img, ram, year, color}) => {
            return <Link key={id} to={`products/${id}`} state={products.find(elem => elem.id == id)}>
            <figure >
                <h6 style={{backgroundColor: color == "black"? "white": color }}>{brand}</h6>
                <figcaption>{model}</figcaption>
                <img src={"/img" + img} alt="" />
     <div className="specs">
     <span>Year: {year}</span>
                <span>RAM: {ram}</span>
     </div>
     <h5>${price}</h5>


            </figure>
        </Link>
        })}
        
    </section>
  )
}

export default Products