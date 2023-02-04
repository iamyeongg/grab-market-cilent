import React from 'react';
import './index.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

function MainPage() {
    const [products, setProducts] = React.useState([]);
    // 목서버를 get으로 가져옴
    React.useEffect(function () {
        axios
            .get("https://39f35dc9-650b-42e1-b46b-44fe25623693.mock.pstmn.io/products")

            .then(function (result) {
                const products = result.data.products;
                setProducts(products);
            })
            .catch(function (error) {
                console.error('에러발생', error);
            });
    }, []);
    // []로 (네트워크 통신) rendering을 한번하여 products를 불러옴
    return (
        <div>

            <div id="banner">
                <img src="images/banners/banner1.png" />
            </div>
            <h1>판매되는 상품들</h1>
            <div id="product-list">
                {
                    products.map(function (product, index) {
                        return (
                            <div className='product-card'>
                                <Link className='product-link' to={`/products/${product.id}`}>
                                    <div>
                                        <img
                                            className='product-img'
                                            src={product.imageUrl}
                                        />
                                    </div>
                                    <div className='product-contents'>
                                        <span className='prodcuct-name'>{product.name}</span>
                                        <span className='product-price'>{product.price}원</span>
                                        <div className='product-seller'>
                                            <img
                                                className='product-avatar'
                                                src="images/icons/avatar.png"
                                            />
                                            <span> {product.seller}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>);
                    })
                }


            </div>

        </div>
    )
}
export default MainPage;