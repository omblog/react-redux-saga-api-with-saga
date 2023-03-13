import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component", data);

 useEffect(() => {
  dispatch(productList())
 }, []) 
  return (
    <div>
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>

      <div className="product-container">
        {
          data.map((item) => <div className="product-item" key={item.id}>
            <img src={item.photo} alt="Samsung"/>
            <div className="item-name">Name: {item.name}</div>
            <div className="item-name">Color: {item.color}</div>
            <div className="item-name">Price: {item.price}</div>
            <div className="item-name">Category: {item.category}</div>
            <div className="item-name">Brand: {item.brand}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
              <button onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;
