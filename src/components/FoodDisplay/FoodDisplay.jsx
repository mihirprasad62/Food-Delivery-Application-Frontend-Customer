import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import "./foodDisplay.css"
import { Link } from 'react-router-dom'
import FoodItem from '../Food Item/FoodItem'

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
                                    return <FoodItem item={item} index={index}/>
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