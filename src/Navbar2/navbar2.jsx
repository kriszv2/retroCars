import "./navbar2.css"
import { Link } from "react-router-dom";


function navbar2(){
    return(
    <>
    <nav className="navbar2">
        <div className="subnav">
            <button>Cars</button>
            <div className="subnav-content">
                <Link to="c" alt="#">New cars</Link>
                <Link to="c" alt="#">Used cars</Link>
                <Link to="c" alt="#">Car lease</Link>
                <Link to="c" alt="#">Rent your car</Link>
            </div>
        </div>
        <div className="subnav">
            <button>Bikes</button>
            <div className="subnav-content">
                <Link to="c" alt="#">New Bikes</Link>
                <Link to="c" alt="#">Used Bikes</Link>
                <Link to="c" alt="#">Bikes lease</Link>
                <Link to="c" alt="#">Rent your Bikes</Link>
            </div>
        </div>
        <div className="subnav">
            <button>Vans</button>
            <div className="subnav-content">
                <Link to="c" alt="#">New Vans</Link>
                <Link to="c" alt="#">Used Vans</Link>
                <Link to="c" alt="#">Vans lease</Link>
                <Link to="c" alt="#">Rent your Vans</Link>
            </div>
        </div>
        <div className="subnav">
            <button>Trucks</button>
            <div className="subnav-content">
                <Link to="c" alt="#">New Trucks</Link>
                <Link to="c" alt="#">Used Trucks</Link>
                <Link to="c" alt="#">Trucks lease</Link>
                <Link to="c" alt="#">Rent your Trucks</Link>
            </div>
        </div>
        <div className="subnav">
            <button>Caravans</button>
            <div className="subnav-content">
                <Link to="c" alt="#">New Caravans</Link>
                <Link to="c" alt="#">Used Caravans</Link>
                <Link to="c" alt="#">Caravans lease</Link>
                <Link to="c" alt="#">Rent your Caravans</Link>
            </div>
        </div>
        
    </nav>
    </>
    )}
export default navbar2;