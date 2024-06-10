import ShopCard from './ShopCard';

export const CardsView = ({ cards }) => {
    return (
        <div className="cards-view">
        {cards.map((card, index) => (
            <ShopCard key={index} card={card} />
        ))}
        </div>
    );
    };

export default CardsView;