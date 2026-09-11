import React, { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const ExploreFood = () => {
  const [category, setCategory] = useState('All')
  const [searchText, setSearchText] = useState('');
  return (
    <>
      <div>
        <form action="" onSubmit={(e)=>e.preventDefault()}>
           <label htmlFor="category">Category</label>

        <select name="category" id="category" onChange={(e)=>setCategory(e.target.value)} >
          <option value="All">All</option>
          <option value="Rolls">Rolls</option>
          <option value="Deserts">Deserts</option>
          <option value="Salad">Salad</option>
          <option value="Sandwich">Sandwich</option>
          <option value="Cake">Cake</option>
          <option value="Pure Veg">Pure Veg</option>
          <option value="Pasta">Pasta</option>
          <option value="Noodles">Noodles</option>


        </select>

        <input type="text" placeholder='search food name' onChange={(e)=>setSearchText(e.target.value)} value={searchText} />
        <input type="submit" value="Search" />
        </form>
       
      </div>

      <FoodDisplay category={category} searchText={searchText} />
    </>
  )
}

export default ExploreFood