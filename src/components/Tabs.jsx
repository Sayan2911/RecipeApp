// import React from 'react'
import {CiPizza} from 'react-icons/ci'
import {GiFruitBowl , GiNoodles,GiCheckMark} from 'react-icons/gi'
import {MdOutlineIcecream} from 'react-icons/md'
import { pizza,Noodles ,Dessert,IceCream} from '../StaticFunc'






function Tabs() {

    
    
    return (
        <div className="container2">
        <h1 className='recipeHeading'>What would you like to have!</h1>
        <div className="tabs">
                <div className="tablist  pizza active" onClick={pizza}>
                    <CiPizza />
                    <span>Pizza</span>
                </div>
                <div className="tablist  noodles" onClick={Noodles}>
                    <GiNoodles />
                    <span>Noodles</span>
                </div>
                <div className="tablist dessert" onClick={Dessert}>
                    <GiFruitBowl />
                    <span>Desert</span>
                </div>
                <div className="tablist icecream" onClick={IceCream}>
                    <MdOutlineIcecream />
                    <span>IceCream</span>
                </div>
            
        </div>
        <div className='recipe_banner'>
                <div className="left-col">
                    <span className='badge'>italian </span>
                    <h1 className='h1'>chicken pizza</h1>
                    <p><strong>Recipe by:</strong><small>  Sayan Das</small></p>
                    <h3>Ingredients</h3>
                    <div className='ingredients'>
                        <ul>
                            <li className='flex' ><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span className='li1'>Prepare Dough</span></li>
                            <li  className='flex'><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span className='li2'>Roll Dough Thin</span></li>
                            <li  className='flex'><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span className='li3'>Add Sauce</span></li>
                            <li  className='flex'><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span className='li4'> Top with Toppings</span></li>
                            <li  className='flex'><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span className='li5'>Cheese Layer</span></li>
                            <li  className='flex'><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span className='li6'>Bake and Enjoy</span></li>
                        </ul>
                    </div>
                </div>
                <div className="right-col">
                    <div className="image-wrapper">
                    < img src="https://images.unsplash.com/photo-1618213837799-25d5552820d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMHBpenphfGVufDB8fDB8fHww" className='img1' alt="" />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Tabs