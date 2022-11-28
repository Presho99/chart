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