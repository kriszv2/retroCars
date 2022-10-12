import "./navbar.css"
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';


function navbar(){
    return(
    <>
    <nav className="navbar">
        <div className="left">
         <Link to="/"><img alt="Logo"></img></Link>
         
        </div>
        <div className="middle">
            <div>
                <input type="search" className="search"/>
                <SearchIcon style={{fontSize:34}} className="searchIcon"/></div>
        
        </div>
        <div className="right">
            
                <Link style={{textDecoration:"none"}} to="/login" ><button>Log in</button></Link>
                <Link style={{textDecoration:"none"}} to="/register" ><button>Register</button></Link>
            
            <ShoppingBasketOutlinedIcon style={{ fontSize: 30 , color:"#E0E2DB"}} className="menuIcon"/>
            <AccountCircleOutlinedIcon style={{ fontSize: 30 , color:"#E0E2DB"}} className="menuIcon"/>
        </div>
    </nav>
    </>
    )}
export default navbar;