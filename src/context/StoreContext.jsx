import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { fetchFoodList } from "../services/foodService";


export const StoreContext=createContext(null)

export const StoreContextProvider=(props)=>{
    const [foodList,setFoodList]=useState([])

   

    const contextValue={
        foodList
    }

    useEffect(()=>{
        async function loadData(){
           const data= await fetchFoodList()
           console.log(data)
            setFoodList(data)
        }
        loadData()
         
    },[])


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}