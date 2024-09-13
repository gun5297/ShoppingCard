const ShoppingMini = ({ item, changeOnData }) => {
    const { id, img, title, isShow } = item;
    return (
        <li className={isShow ? 'active' : ''} onClick={() => changeOnData(id)}>
            <img src={img} alt={title} />
        </li>
    );
};

export default ShoppingMini;
