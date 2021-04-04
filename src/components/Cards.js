import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import nineImage from '../images/img-9.jpg'
import secondImage from '../images/img-2.jpg'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={nineImage}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label='Adventure'
                        path='/services'/>
                        <CardItem 
                        src={secondImage}
                        text="Travel through the Islands of Bali in a Private Cruise"
                        label='Luxury'
                        path='/products'/>
                        <CardItem 
                        src={secondImage}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label='Adventure'
                        path='/sign-up'/>
                        </ul>
                        <ul className="cards__items">
                        <CardItem 
                        src={secondImage}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label='Adventure'
                        path='/services'/>
                        <CardItem 
                        src={secondImage}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label='Adventure'
                        path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards
