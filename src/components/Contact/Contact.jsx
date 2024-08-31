import { useCartContext } from "../../context/CartContext";

const Contact = () => {
    const { titulo } = useCartContext();
    return <h1>Contact Form {titulo}</h1>;
};

export default Contact;