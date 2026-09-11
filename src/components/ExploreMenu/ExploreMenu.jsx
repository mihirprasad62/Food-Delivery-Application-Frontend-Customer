import React from 'react'
import { assets, menu_list } from '../../assets/assets'
import "./exploreMenu.css"

const ExploreMenu = ({category,setCatagory}) => {
  return (
    <>
    <div className="container">
<h1>Explore Menu</h1>
    

    <div className="menu-list-container">
        {
            menu_list.map((item,index)=>(
                <div key={index} className={`text-center explore-menu-list-item`} onClick={()=>setCatagory(prev=>prev===item.menu_name?"All":item.menu_name)}>
                    <img src={item.menu_image} alt="" className={`${category === item.menu_name ? "select-menu" : ""} rounded-circle`} />
                    <p className='mt-2 fw-bold'>{item.menu_name}</p>
                    
                </div>
            ))
        }
        </div>
    </div>
    <hr />
    </>
  )
}

export default ExploreMenu