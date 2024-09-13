import ShoppingItem from './ShoppingItem';
import './ShoppingList.scss';
const ShoppingList = ({ data, changeOnData }) => {
    return (
        <div className='ShoppingList'>
            <ul className='list-wrap'>
                {data.map((item) => (
                    <ShoppingItem key={item.id} {...item} changeOnData={changeOnData} />
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;
