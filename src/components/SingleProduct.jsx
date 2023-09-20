import "./singleproduct.style.scss"
import { useContext } from "react"
import { DataContext } from "../context/DataCTX"
import { useParams, Link } from "react-router-dom"

const SingleProduct = () => {

   
    const {id} = useParams()
    const {data, dispatchData} = useContext(DataContext)
    
    const {model, year, img, price, brand, ram} = data.find(elem => elem.id == id)
console.log(data)

  return (
<>
<article>
        <h4>{model}</h4>
        <div className="image-container">
        <img src={"/img" + img} alt="" />
        </div>
        <hr />
<p>Lorem {year} ipsum dolor sit amet consectetur adipisicing elit. Beatae placeat accusantium nobis debitis {ram} in, aut praesentium doloremque aspernatur alias unde tenetur. Aspernatur eum unde nam. Laudantium aperiam sequi incidunt sint?</p>
        
        <h5>{price}</h5>
        <button>BUY</button>    
        <div className="fork">
        <Link to={`/brands/${brand}`}>More from <b>{brand}</b></Link>
        <Link to=".."><u>Go Up!!</u></Link>
        </div>
        </article>

        </>
  )
}

export default SingleProduct