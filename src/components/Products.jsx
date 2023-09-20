import "./products.style.scss"
import { useContext } from "react"
import { DataContext } from "../context/DataCTX"
import { Link } from "react-router-dom"



const Products = () => {

  const {data, dispatchData} = useContext(DataContext)

  return (
    <section className="products">

        {data.sort(()=> Math.random() - 0.5).map(({id, brand, model, price, img, ram, year, color}) => {
            return <Link key={id} to={`products/${id}`}>
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