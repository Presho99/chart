import React from 'react'
import "../components/Cards.css"
import Card from './Card'
import { CardsData } from '../data/data'

function Cards() {
  return (
    <div className='cards'>
        {CardsData.map((card,id) => {
            return(
                <div className='parent-container'>
                    <Card
                    title={card.title}
                    color={card.color}
                    barValue={card.barValue}
                    value={card.value}
                    images={card.images}
                    participants={card.participants}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards