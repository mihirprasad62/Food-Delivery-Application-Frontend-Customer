import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { fetchFoodList } from "../services/foodService";


export const StoreContext=createContext(null)

export const StoreContextProvider=(props)=>{
    const [foodList,setFoodList]=useState([])
    const[quantities,setQuantities]=useState({})

    const increaseQuantity=(foodId)=>{
        setQuantities(prev=>({...prev,[foodId]:(prev[foodId]|| 0)+1}))
    }

    const decreaseQuantity=(foodId)=>{
        setQuantities(prev=>({...prev,[foodId]:(prev[foodId]>0?prev[foodId]-1:0)}))
    }


   const removeFromCart = (foodId) => {
    console.log("delete cart:::",foodId)
    console.log("Object key:::",Object.keys(quantities).filter(id => id !== foodId))

    const updatedQuantities = Object.keys(quantities)
        .filter(id => id !== foodId)
        .reduce((acc, id) => ({
            ...acc,
            [id]: quantities[id]
        }), {})
        console.log("updated quantity:::",updatedQuantities)
    setQuantities(updatedQuantities)
}

    const contextValue={
        foodList,
        increaseQuantity,
        decreaseQuantity,
        quantities,
        removeFromCart,
        setQuantities
    }

    useEffect(()=>{
        async function loadData(){
           const data= await fetchFoodList()
           console.log(data)
            setFoodList(data)
        }
        loadData()
         
    },[])

    useEffect(()=>{
        console.log(quantities)
    },[quantities])


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}