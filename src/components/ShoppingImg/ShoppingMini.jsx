const ShoppingMini = ({ item }) => {
    const { img, title, isShow } = item;
    return (
        <li className={isShow ? 'active' : ''}>
            <img src={img} alt={title} />
        </li>
    );
};

export default ShoppingMini;
