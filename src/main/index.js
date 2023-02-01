import React from 'react';
import './index.css'
import axios from 'axios';

function MainPage() {
    // 목서버를 get으로 가져옴
    axios
        .get("https://b552ca02-e190-4618-87df-e926921932fb.mock.pstmn.io/products")
        .then(function (result) {
            console.log(result);
        }).catch(function (error) {
            console.error('에러발생', error);
        });
    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <img src="images/icons/logo.png" />
                </div>
            </div>
            <div id="body">
                <div id="banner">
                    <img src="images/banners/banner1.png" />
                </div>
                <h1>판매되는 상품들</h1>
                <div id="product-list">
                    <div className='product-card'>
                        <div>
                            <img className='product-img' src="images/products/keyboard1.jpg" />
                        </div>
                        <div className='product-contents'>
                            <span className='prodcuct-name'>
                                키보드
                            </span>
                            <span className='product-price'>
                                50000원
                            </span>
                            <div className='product-seller'>
                                <img className='product-avatar' src="images/icon/avatar.png" />
                                <sapn>
                                    그랩
                                </sapn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer"></div>
        </div>
    )
}
export default MainPage;