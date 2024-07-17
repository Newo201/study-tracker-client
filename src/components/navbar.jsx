import { GoHome, GoGraph } from "react-icons/go";
import { MdOutlineEventNote } from "react-icons/md";


export default function NavBar() {
    return (
        <div className = "study-links sticky-top">
            <nav className="navbar study-nav flex-column">
                    <a className = "nav-link pt-5"><GoHome /> Home</a>
                    <a className = "nav-link"><GoGraph/> Study Tracker</a>
                    <a className = "nav-link"><MdOutlineEventNote /> Study Planner</a>
            </nav>
            <div className = "d-flex flex-column justify-content-end pb-5" style = {{'height': "70%"}}>Copyright 2024</div>
        </div>
    )
}