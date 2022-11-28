import React, {useState} from 'react'
import "../components/Sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { SidebarData } from '../data/data'

function Sidebar() {
    const [selected, setSelected] = useState(0)
    return (
        <div className='sidebar'>
            {/* logo */}
            <div className='logo'>
                <div className='logo-first'>
                    <span><div className='line-one'>
                        <span><div className='line-two'>
                            <span><div className='line-three'></div></span>
                        </div></span>
                    </div></span>
                </div>
                <div className='logo-second'>
                    <p>Chart</p>
                </div>

            </div>
            {/* profile */}
            <div className='profile'>
                <div className='profile-img'>
                    <img src="https://images.pexels.com/photos/9784225/pexels-photo-9784225.jpeg?auto=compress&cs=tinysrgb&w=400" />
                    <button className='profile-btn'>
                        <FontAwesomeIcon icon={faClock} className="fa-clock" />
                        <p>28h</p>
                    </button>
                </div>
                <div className='profile-info'>
                    <p className='name'>Precious Omondi</p>
                    <p className='email'>precious@gmail.com</p>
                </div>
            </div>

            <div className='nav'>
                {
                    SidebarData.map((item, index) => {
                        return(
                            <div key={index} className={selected === index ? "nav-item active" : "nav-item"} onClick={() => setSelected(index)}>
                               <FontAwesomeIcon icon=
                               {item.icon}/>
                                <span>
                                    {item.heading}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar