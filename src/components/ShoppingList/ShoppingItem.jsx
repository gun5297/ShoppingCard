const ShoppingItem = ({ id, title, body, price, isShow, changeOnData }) => {
    return (
        <li className={isShow ? 'active' : ''} onClick={() => changeOnData(id)}>
            <h3>{title}</h3>
            <p>{body}</p>
            <div className='price-wrap'>
                <p className='sale'>
                    {price.sale}
                    <span>%</span>
                </p>
                <p className='won'>
                    {price.won.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    <span>원</span>
                </p>
                <p className='hal'>
                    {price.hal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    <span>원</span>
                </p>
            </div>
        </li>
    );
};

export default ShoppingItem;
