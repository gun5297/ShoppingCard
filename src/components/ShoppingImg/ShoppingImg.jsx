import { useEffect, useState } from 'react';
import './ShoppingImg.scss';
import ShoppingMini from './ShoppingMini';
const ShoppingImg = ({ data, img, title, prev, next, changeOnData }) => {
    return (
        <div className='ShoppingImg'>
            <div className='big-img-wrap'>
                <img src={img} alt={title} />
            </div>
            <ul className='mini-img-wrap'>
                {data.map((item) => (
                    <ShoppingMini key={item.id} item={item} changeOnData={changeOnData} />
                ))}
            </ul>
            <div className='btn-wrap'>
                <div className='prev' onClick={prev}>
                    <img src='./images/prev.svg' alt='prev' />
                </div>
                <div className='next' onClick={next}>
                    <img src='./images/next.svg' alt='next' />
                </div>
            </div>
        </div>
    );
};

export default ShoppingImg;
