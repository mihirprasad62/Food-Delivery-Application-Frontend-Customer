import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import "./foodDisplay.css"
import { Link } from 'react-router-dom'

const FoodDisplay = ({category,searchText}) => {
    const { foodList } = useContext(StoreContext)
    console.log(foodList)
    const filteredFoodList=foodList.filter(food=>(
        (category==="All" || food.category===category) &&
        food.name.toLowerCase().includes(searchText.toLowerCase())
    ))
    return (
        <>
            <div className="container">
                <div className="food-box">
                    {
                        filteredFoodList.length > 0 ? (<>
                            {
                                filteredFoodList.map((item, index) => {
                                    return <div key={item.id} className='food-card'>
                                        <div>
                                            <img src={item.imageUrl} alt="" height={120} width={120} />
                                        </div>
                                        <p>{item.name}</p>
                                        <p>{item.description}</p>
                                        <p>{item.category}</p>
                                        <p>{item.price}</p>
                                        <div>
                                            <Link to={`/food/${item.id}`}>View Food</Link>
                                        </div>
                                    </div>
                                })
                            }


                        </>) : (<>
                            <h1>No food Available</h1>
                        </>)
                    }
                </div>
            </div>
        </>
    )
}

export default FoodDisplay