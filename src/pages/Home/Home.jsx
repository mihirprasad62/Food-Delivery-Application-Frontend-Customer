import React, { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

  const [category,setCatagory]=useState("All")

  return (
    <>
    <ExploreMenu category={category} setCatagory={setCatagory}/>
    <FoodDisplay category={category}/>
    </>
  )
}

export default Home