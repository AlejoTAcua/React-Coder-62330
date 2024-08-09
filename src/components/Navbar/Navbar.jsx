import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import NavbarLink from "./NavbarLink";
import "./Navbar.css";
import { categories } from "../../mock/mockData";

const Navbar = ({ title }) => {

    return(
        <>
            <div className="header">
                <div className="logo">
                    <Link to={`/`}>
                        <img src="https://res.cloudinary.com/jualbe/image/upload/v1722397929/8504bc4b-621c-45d3-9a08-7468418d3561_teewrs.jpg" alt="Logo"></img>
                    </Link>

                    <h1> {title} </h1>
                </div>
                <nav className="navItems">
                    {categories.map((element,index)=>{
                        return <NavbarLink key={index} category={element} />
                    })}
                </nav>
                <CartWidget />
            </div>
        </>
    );
};

export default Navbar;