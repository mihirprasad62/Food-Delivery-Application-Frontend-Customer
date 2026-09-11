import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./foodItem.css"
import { assets } from "../../assets/assets"
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ item, index }) => {
    const { increaseQuantity, decreaseQuantity, quantities } = useContext(StoreContext)
    return (
        <>
            <div key={item.id} className='food-card'>
                <div>
                    <img src={item.imageUrl} alt="" height={120} width={120} />
                </div>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <div >
                    <Link to={`/food/${item.id}`}>View Food</Link>

                </div>
                <div className='action-section'>
                    {
                        quantities[item.id] > 0 ?
                            <div>
                                <button onClick={()=>decreaseQuantity(item.id)}>
                                    <img src={assets.remove_icon_red} alt="" width={25} height={25} />
                                </button>
                                <span style={{margin:"10px"}}>{quantities[item.id]}</span>
                                <button onClick={()=>increaseQuantity(item.id)}>
                                    <img src={assets.add_icon_green} alt="" width={25} height={25} />
                                </button>
                            </div> :
                            <div>
                                <button onClick={()=>increaseQuantity(item.id)}>
                                    <img src={assets.add_icon_green} alt="" width={25} height={25} />
                                </button>
                            </div>


                    }

                </div>
            </div>
        </>
    )
}

export default FoodItem