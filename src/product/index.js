import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    // useeffect 라는 익명함수를 통해 네트워크 통신이 한 번 이루어지도록 함.([])
    // product에는 처음 null이 들어감, 이후 네트워크 통신 이후 product가 정상적으로 들어감.
    useEffect(function () {
        axios
            .get(
                `https://39f35dc9-650b-42e1-b46b-44fe25623693.mock.pstmn.io/products/${id}`
            )
            .then(function (result) {
                setProduct(result.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    if (product === null) {
        return <h1>상품 정보를 받고 있습니다..</h1>
        //비동기 처리임으로 처음 코드가 실행될때 아래 코드가 실행되지 않고 null값이 출력된다. 따라사
        // 위에 if 문을 통해 (return) 정상적으로 아래 로직이 실행되게 된다.
    }

    return (
        <div>
            <div id="image-box">
                <img src={"/" + product.imageUrl} />
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png" />
                <span>{product.seller}</span>
            </div>
            <div id="content-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}원</div>
                <div id="creatAt">2023년 2월 4일</div>
                <div id="description">{product.description}</div>
            </div>
        </div>
    );
}

export default ProductPage;
