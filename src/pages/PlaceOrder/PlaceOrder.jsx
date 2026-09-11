import React, { useContext } from 'react'
import "./placeOrder.css"
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
    const { foodList, quantities, setQuantities } = useContext(StoreContext)

    //cartItems
    const cartItems = foodList.filter(food => quantities[food.id] > 0)

    //calculating
    const subtotal = cartItems.reduce((acc, food) => acc + food.price * quantities[food.id], 0)

    const Shipping = subtotal === 0 ? 0.0 : 10;

    const tax = subtotal * 0.1;

    const total = subtotal + Shipping + tax;
    return (
        <>
            <div style={{ maxWidth: "1200px", width: "90%", margin: "50px auto", border: "2px solid purple", display: "flex", gap: "10px" }} className="order-container">

                {/* CUSTOMER ADDRESS  */}
                <div style={{ width: "49%", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }} className="customer-address">
                    <div className="customer-name">
                        <input placeholder='First Name' style={{ width: "50%" }} type="text" />
                        <input placeholder='Last Name' style={{ width: "50%" }} type="text" />
                    </div>
                    <div className="customer-email">
                        <input placeholder='Email' style={{ width: "100%" }} type="email" />
                    </div>
                    <div className="customer-address">
                        <input placeholder='Address' style={{ width: "100%" }} type="text" />
                    </div>
                    <div className="customer-mobile">
                        <input placeholder='Mobile No' style={{ width: "100%" }} type="Number" />
                    </div>
                    <div className="cutomer-country">
                        <input placeholder='Country' style={{ width: "33%" }} type="text" />
                        <input placeholder='State' style={{ width: "33%" }} type="text" />
                        <input placeholder='Zip' style={{ width: "33%" }} type="number" />

                    </div>
                    <div className="action">
                        <input style={{ width: "100%" }} type="Submit" value={"Continue to Checkout"} />
                    </div>
                </div>

                {/* ORDER SUMMERY  */}

                <div style={{ width: "49%", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }} className="order-summery">

                    {
                        cartItems.map((item, index) => {
                           return <div style={{ display: "flex", justifyContent: "space-evenly", gap: "10px" }} className="customer-name">
                                <p>{item.name}</p>
                                <p>{quantities[item.id]}</p>
                                <p>{item.price}</p>
                            </div>
                        })
                    }

                   
                    <div style={{ display: "flex", justifyContent: "space-evenly", gap: "10px" }} className="customer-name">
                        <p>SubTotal</p>
                            <p>&#8377;{subtotal.toFixed(2)}</p>
                    </div>
                     <div style={{ display: "flex", justifyContent: "space-evenly", gap: "10px" }} className="customer-name">
                       <p>Shipping</p>
                            <p>&#8377;{Shipping.toFixed(2)}</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-evenly", gap: "10px" }} className="customer-name">
                        <p>tax</p>
                            <p>&#8377;{tax.toFixed(2)}</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-evenly", gap: "10px" }}>
                            <p>total</p>
                            <p>&#8377;{total.toFixed(2)}</p>
                        </div>

                </div>

            </div>
        </>
    )
}

export default PlaceOrder