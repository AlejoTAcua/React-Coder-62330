import { products } from "../mock/mockData";

export const getProducts = (category) => {

    let filteredProducts = [...products]
    
    if (category) {
        filteredProducts = products.filter((products) =>
            products.category.includes(category)
        );
    } 

    return new Promise((resolve,reject)=>{
        if (products.length >0) {
            setTimeout(() => {
                resolve(filteredProducts);
            }, 2000);
        } else{
            reject("No hay productos disponibles")
        }
    });
};

export const getProductById = (id) => {

    let filteredProducts = [...products]
    
    

    return new Promise((resolve,reject)=>{
        const product = products.find((product) => product.id === parseInt(id));

        setTimeout(() => {
            if (product) {
                resolve(product);
            } else {
                reject("No hay productos disponibles");
            }
        }, 1000);
});}