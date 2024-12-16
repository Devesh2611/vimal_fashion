import { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';  
import Item from '../Components/Item/Item'; 

function ShopCategory({ category }) {
    const {Product} = useContext(ShopContext);

    return (
        <div className="shop-category">
            <h1>{category} Collection</h1>
            <hr/>
            <div className="shopcategory-products">
                {Product.map((item, i) => {
                    if (item.category.includes(category)) {
                        return (
                            <Item 
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                description={item.description} 
                                price={item.price}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default ShopCategory;
