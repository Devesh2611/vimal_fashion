import { createContext } from "react";
import Product from '../Components/Assets/products_data';

export const ShopContext = createContext();

function ShopContextProvider(props) {
    const contextValue = { Product };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;