import React, { useContext, useEffect, useState } from 'react'
import "./foodDetails.css"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { fetchFoodDetails } from '../../services/foodService'
import { toast } from 'react-toastify'
import { StoreContext } from '../../context/StoreContext'

const FoodDetails = () => {
    const {id} =useParams()

    const [data,setData]=useState({})
    const {  increaseQuantity } = useContext(StoreContext)

   const navigate= useNavigate()

    const addToCart=()=>{
        increaseQuantity(data.id)
        navigate("/cart")
    }


    useEffect(()=>{

        const loadFoodDetails=async ()=>{
            try {
                 const foodData=await fetchFoodDetails(id)
                 console.log(foodData)
                 setData(foodData)
            } catch (error) {
                toast.error("error in displaying food details.")
            }
        }

        loadFoodDetails()
       
    },[id])
  return (
    <>
    <div className="food-details-box">
        <div className='food-details-image'>
            <img src={data.imageUrl} alt="" />
        </div>
        <div className="food-details-desc">
        <p>{data.name}</p>
        <p>{data.price}</p>
        <p>{data.category}</p>
        <p>{data.description}</p>

        <button onClick={addToCart}>Add To cart</button>
        </div>
    </div>
    </>
  )
}

export default FoodDetails