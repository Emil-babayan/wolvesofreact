import "./singleproduct.style.scss"
import { useParams, useLocation, Link } from "react-router-dom"

const SingleProduct = () => {

    const {state : {id, brand, model, price, img, ram, year, color}} = useLocation()
    const param = useParams()


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
        <button>Get</button>    
        <div className="fork">
        <Link to={`/brands/${brand}`}>More from <b>{brand}</b></Link>
        <Link to=".."><u>Go Up!!</u></Link>
        </div>
        </article>

        </>
  )
}

export default SingleProduct