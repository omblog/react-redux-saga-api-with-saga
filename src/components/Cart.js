import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Cart = () => {
const cartData = useSelector((state) => state.cartData);
let amount = cartData.length &&  cartData.map((item) => item.price).reduce((prev, next) => prev+next)
console.warn(amount);
  return (
    <div>
         <Link to="/">Product List</Link>
     <h1>Cart Page</h1>
     <div className="cart-page-container">
        <table>
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Photo</th>
                </tr>
            </thead>
            <tbody>
                {
                    cartData.map((item, index) => <tr key={item.id}>  
                   <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.color}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>{item.brand}</td>
                    <td><img src={item.photo} alt="Samsung"/></td>
                </tr>)
                }
            </tbody>
        </table>
        <div className="price-details">
            <div className="adjust-price"><span>Amount</span><span>{amount}</span></div>
            <div className="adjust-price"><span>Discount</span><span>{amount/10}</span></div>
            <div className="adjust-price"><span>Tax</span><span>0000</span></div>
            <div className="adjust-price"><span>Total</span><span>{amount-(amount/10)}</span></div>
        </div>
     </div>
    </div>
  )
}

export default Cart