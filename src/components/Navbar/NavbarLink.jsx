import { NavLink } from "react-router-dom";

export const NavbarLink = ({category}) => {
    return (
        <NavLink to={`/category/${category}`} className="navItem">
            {category}
        </NavLink>
    )
};

export default NavbarLink;