import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { 
      faHouse, 
      faChartPie,
    faListCheck,
    faSquarePollVertical,
    faGear
 } 
      from '@fortawesome/free-solid-svg-icons'

      export const SidebarData = [
        {
           icon: faHouse,
           heading: "Dashboard" 
        },
        {
            icon: faChartPie,
            heading: "Analytics",
        },
        {
            icon: faListCheck,
            heading: "Task List",
        },
        {
            icon: faSquarePollVertical,
            heading: "Tracking",
        },
        {
            icon: faGear,
            heading: "Setting"
        }
    ]

    export const CardsData = [
        {
            title: "Web Development",
            color: {
                backGround: "#70387C",
                boxShadow: "0px 10px 20px 0px #70387C"
            },
            value: "10",
            participants: "+7",
            images: [
                {
                  first: "https://images.pexels.com/photos/9784225/pexels-photo-9784225.jpeg?auto=compress&cs=tinysrgb&w=400",
                  second: "https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&w=400",  
                }
            ]
        },
        {
            title: "Mobile App Design",
            color: {
                backGround: "#95CFD5",
                boxShadow: "0px 10px 20px 0px #95CFD5"
            },
            value: "12",
            participants: "+9",
            images: [
                {
                  first: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400",
                  second: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",  
                }
            ]
        },
        {
            title: "Twitter Brand UI Kit",
            color: {
                backGround: "#F67D4F",
                boxShadow: "0px 10px 20px 0px #F67D4F"
            },
            value: "22",
            participants: "+3",
            images: [
                {
                  first: "https://images.pexels.com/photos/4156467/pexels-photo-4156467.jpeg?auto=compress&cs=tinysrgb&w=400",
                  second: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",  
                }
            ]
        },
    

    ]