import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const navigate=useNavigate()

    const { foodList, increaseQuantity, decreaseQuantity, quantities, removeFromCart } = useContext(StoreContext)
    //cartItems
    const cartItems = foodList.filter(food => quantities[food.id] > 0)

    //calculating
    const subtotal = cartItems.reduce((acc, food) => acc + food.price * quantities[food.id], 0)

    const Shipping = subtotal === 0 ? 0.0 : 10;

    const tax = subtotal * 0.1;

    const total = subtotal + Shipping + tax;
    return (
        <>
            <div style={{ maxWidth: "1200px", width: "90%", margin: "50px auto", border: "1px solid purple" }} className="cart-container">
                <h1 style={{ textAlign: "center" }}>Your Shopping Cart</h1>
                <div style={{ padding: "20px", display: "flex", justifyContent: "center", gap: "20px" }} className='cart-content-box'>

                    {
                        cartItems.length === 0 ? <h2>Your Cart is empty</h2> : <>

                            {/* PRODUCT DETAILS SECTION  */}
                            <div style={{ width: "48%", border: "1px solid black", display: "flex", flexDirection: "column", gap: "1", }} className="cart-details">
                                {
                                    cartItems.map((item, index) => (


                                        <div key={index} style={{ padding: "10px", height: "120px", display: "flex", justifyContent: "space-between", gap: "20px" }}>
                                            <div>
                                                <img src={item.imageUrl} alt="" height={75} width={75} />
                                            </div>
                                            <div>
                                                <h4>{item.name}</h4>
                                                <p>{item.category}</p>
                                            </div>
                                            <div>
                                                <button onClick={() => decreaseQuantity(item.id)}>
                                                    <img src={assets.remove_icon_red} alt="" width={25} height={25} />
                                                </button>
                                                <span>{quantities[item.id]}</span>
                                                <button onClick={() => increaseQuantity(item.id)}>
                                                    <img src={assets.add_icon_green} alt="" width={25} height={25} />
                                                </button>
                                            </div>
                                            <div>
                                                <p>{item.price}</p>
                                                <div>
                                                    <button onClick={() => removeFromCart(item.id)}>
                                                        <img src={assets.cross_icon} alt="" width={25} height={25} />
                                                    </button>
                                                </div>
                                            </div>

                                        </div>



                                    ))
                                }
                            </div>



                        </>
                    }
                    {/* PRICING SECTION  */}
                    <div style={{ width: "45%", border: "1px solid red", display: "flex", flexDirection: "column", gap: "1px" }} className="cart-pricing">

                        <h4 style={{ textAlign: "center" }}>Order Summery</h4>
                        <div style={{ padding: "20px", display: "flex", justifyContent: "space-between", gap: "20px" }}>
                            <p>SubTotal</p>
                            <p>&#8377;{subtotal.toFixed(2)}</p>
                        </div>
                        <div style={{ padding: "20px", display: "flex", justifyContent: "space-between", gap: "20px" }}>
                            <p>Shipping</p>
                            <p>&#8377;{Shipping.toFixed(2)}</p>
                        </div>
                        <div style={{ padding: "20px", display: "flex", justifyContent: "space-between", gap: "20px" }}>
                            <p>tax</p>
                            <p>&#8377;{tax.toFixed(2)}</p>
                        </div>
                        <hr />
                        <div style={{ padding: "20px", display: "flex", justifyContent: "space-between", gap: "20px" }}>
                            <p>total</p>
                            <p>&#8377;{total.toFixed(2)}</p>
                        </div>
                        <div >
                            <button onClick={()=>navigate('/order')} disabled={cartItems.length == 0} style={{ width: "100%", padding: "10px" }}>
                                Proceed To checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart