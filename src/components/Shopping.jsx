import { useEffect, useState } from 'react';
import './Shopping.scss';
import ShoppingImg from './ShoppingImg/ShoppingImg';
import ShoppingList from './ShoppingList/ShoppingList';

const dataList = [
    {
        id: 1,
        img: './images/img1.jpeg',
        title: '[람보르기니] 우라칸 단종 확정!',
        body: '람보르기니 우라칸 모델 단종, 후속 모델 테메라리오 공개',
        price: {
            sale: 18,
            won: 3700000,
            hal: 2970000,
        },
        isShow: true,
    },
    {
        id: 2,
        img: './images/img2.jpeg',
        title: '[페라리] 볼륨과 개성을 지닌 스포츠카!',
        body: '스포츠카 컨버터블카 페라리 488 스파이더의 제원은 전장 4,568mm 전폭 1,952mm 전고 1,211mm 휠베이스 2,650mm입니다.',
        price: {
            sale: 18,
            won: 3700000,
            hal: 2970000,
        },
        isShow: false,
    },
    {
        id: 3,
        img: './images/img3.jpeg',
        title: '[멕라렌] 맥라렌 슈퍼 전기차 출시!',
        body: '람보르기니 우라칸 모델 단종, 후속 모델 테메라리오 공개',
        price: {
            sale: 18,
            won: 3700000,
            hal: 2970000,
        },
        isShow: false,
    },
    {
        id: 4,
        img: './images/img4.jpeg',
        title: '[아우디] 아우디 R8 판매량 부진 단종!',
        body: '람보르기니 우라칸 모델 단종, 후속 모델 테메라리오 공개',
        price: {
            sale: 18,
            won: 3700000,
            hal: 2970000,
        },
        isShow: false,
    },
    {
        id: 5,
        img: './images/img5.jpeg',
        title: '[포르쉐] 포르쉐 992 GT3 라인 예술적!',
        body: '람보르기니 우라칸 모델 단종, 후속 모델 테메라리오 공개',
        price: {
            sale: 18,
            won: 3700000,
            hal: 2970000,
        },
        isShow: false,
    },
];

const Shopping = () => {
    const [data, setData] = useState(dataList);
    const [onData, setOnData] = useState(data[0]);
    const [cnt, setCnt] = useState(1);

    const changeOnData = (id) => {
        setData(
            data.map((item) =>
                item.id == id ? { ...item, isShow: true } : { ...item, isShow: false }
            )
        );
        setOnData(data.find((item) => item.id == id));
        setCnt(id);
    };

    const prev = () => {
        setCnt((cnt) => (cnt > 1 ? cnt - 1 : data.length));
    };

    const next = () => {
        setCnt((cnt) => (cnt < data.length ? cnt + 1 : 1));
    };

    useEffect(() => {
        changeOnData(cnt);
    }, [cnt]);

    return (
        <div className='wrap'>
            <div className='inner'>
                <ShoppingImg
                    data={data}
                    {...onData}
                    changeOnData={changeOnData}
                    prev={prev}
                    next={next}
                />
                <ShoppingList data={data} changeOnData={changeOnData} />
            </div>
        </div>
    );
};

export default Shopping;
