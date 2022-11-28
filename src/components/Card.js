import React, { useState } from 'react'
import "../components/Card.css"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { AnimateSharedLayout } from "framer-motion"

function Card(props) {
    const [expanded, setExpanded] = useState(false)
    return (
        <AnimateSharedLayout>
            {
                expanded ? (
                    "Expanded"
                ) :
                    <CompactCard param={props} />
            }
        </AnimateSharedLayout>
    )
}

function CompactCard({ param }) {
    return (
        <div className='compact-card' style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}>
            <div className='detail'>
                <div className='detail-images'>
                    <div className='circle one' >
                        <span>{param.participants}</span>
                    </div>
                    <div className='circle two' style={{background: param.color.backGround}}>
                        <img src={param.images[0].first} />
                    </div>
                    <div className='circle three' style={{background: param.color.backGround}}>
                        <img src={param.images[0].second} />
                    </div>
                </div>
                <span className='detail-title'>{param.title}</span>
                <p className='task'>{`${param.value} tasks`}</p>
            </div>
            <div className='radial-bar'>
                <CircularProgressbar
                value={param.barValue}
                text={`${param.barValue}%`}
                />
            </div>
        </div>

    )

}

export default Card