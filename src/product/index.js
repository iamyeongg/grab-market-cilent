import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../config/constants";
import "./index.css";
import dayjs from "dayjs";
import { Button, message } from 'antd';

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const getProduct = () => {
        axios
            .get(`${API_URL}/products/${id}`)
            .then(function (result) {
                setProduct(result.data.product);
            })
            .catch(function (error) {
                console.error(error);
            });
    };
    // useeffect 라는 익명함수를 통해 네트워크 통신이 한 번 이루어지도록 함.([])
    // product에는 처음 null이 들어감, 이후 네트워크 통신 이후 product가 정상적으로 들어감.
    useEffect(function () {
        getProduct();
    }, []);

    if (product === null) {
        return <h1>상품 정보를 받고 있습니다..</h1>;
        //비동기 처리임으로 처음 코드가 실행될때 아래 코드가 실행되지 않고 null값이 출력된다. 따라사
        // 위에 if 문을 통해 (return) 정상적으로 아래 로직이 실행되게 된다.
    }


    const onClickPurchase = () => {
        axios
            .post(`${API_URL}/purchase/${id}`)
            .then((result) => {
                message.info(`구매가 완료 되었습니다.`);
                getProduct();
            }).catch((error) => {
                message.error(`에러가 발생했습니다. ${error.message}`)
            });
    };

    return (
        <div>
            <div id="image-box">
                <img src={`${API_URL}/${product.imageUrl}`} />
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png" />
                <span>{product.seller}</span>
            </div>
            <div id="content-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}원</div>
                <div id="creatAt">{dayjs(product.createdAt).format('YYYY년 MM월 DD일 ')}</div>
                <Button id="purchase-button" size="large" type="primary" danger onClick={onClickPurchase} disabled={product.soldout === 1 ? true : false}>
                    재빨리 구매하기
                </Button>
                <pre id="description">{product.description}</pre>
            </div>
        </div>
    );
}

export default ProductPage;
