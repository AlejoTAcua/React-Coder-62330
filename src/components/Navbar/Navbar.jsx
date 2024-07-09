import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = ({ categories, title }) => {

    return(
        <>
            <div>
                <h1> {title} </h1>
            </div>
            <nav className="navItems">
                <a href="#" className="navItem"> {categories[0]} </a>
                <a href="#" className="navItem"> {categories[1]} </a>
                <a href="#" className="navItem"> {categories[2]} </a>
                <a href="#" className="navItem"> {categories[3]} </a>
                <a href="#" className="navItem"> {categories[4]} </a>
                <a href="#" className="navItem"> {categories[5]} </a>
                <a href="#" className="navItem"> {categories[6]} </a>
                <a href="#" className="navItem"> {categories[7]} </a>
                <a href="#" className="navItem"> {categories[8]} </a>
            </nav>
            <CartWidget />
        </>
    );
};

export default Navbar;