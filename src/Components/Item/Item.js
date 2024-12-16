import './Item.css';

function Item(props) {
    return (
        <div className='item'>
            <div className='image'>
                <img src={props.image} alt="Product Image"/>
            </div>
            <p>{props.name}</p>
            <p className='item-price'>&#8377;{props.price}</p>
            <a href="https://wa.me/9811861670" target='blank'><button type='submit'>Buy Now</button></a>
        </div>
    );
}

export default Item;