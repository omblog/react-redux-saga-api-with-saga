import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import {productSearch} from "../redux/productAction";

const Header =()=>{
  
    const result = useSelector((state)=>state.cartData);
    const dispatch = useDispatch(); 
    console.warn("data in header", result);
    return(
        <div className="header">
            <Link to="/"><h1>E-Com</h1></Link>
            <div className="search-box">
                    <input type="text" placeholder="Search Product" onChange={(e)=> dispatch(productSearch(e.target.value))}/>
                </div>
            <Link to="/cart">

            <div className="cart-div">
                <span>{result.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt=""/>
            </div>
            </Link>
        </div>
    )
}

export default Header;