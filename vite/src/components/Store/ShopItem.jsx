export const ShopItem = ({ item }) => {
    console.log(item);
    return (
        <div className="shop-item">
         <img src={item.img} alt={item.name} />
         <h2>{item.name}</h2>
         <p>{item.color}</p>
         <p>${item.price}</p>
         <button>ADD TO CART</button>
        </div>
    );
    };
    
export default ShopItem;