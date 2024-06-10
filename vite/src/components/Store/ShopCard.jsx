export const ShopCard = ({ card }) => {
    
    return (
        <div className="shop-card">
            <div className="shop-card-wrapper">
                <h2>{card.name}</h2>
                <p>{card.color}</p>
                <img src={card.img} alt={card.name} />
                <div className="purchase">
                    <div>${card.price}</div>
                    <button>ADD TO CART</button>
                </div>
            </div>
         </div>
    );
};
    
export default ShopCard;