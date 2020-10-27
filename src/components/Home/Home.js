import React from 'react';
import './Home.css';
import Product from "../Product/Product";

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">

                <img
                    className="home__image"
                    // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/BRND_MAY19_00000_MLP_1440x675_Final_en_CA_PVD2410_MLPUpdates._SY1200_FMJPG_.jpg"
                    alt=""
                />

                <div className="home__row">

                    <Product
                        key="12321341"
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />

                    <Product
                        key="49538094"
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />

                </div>

                <div className="home__row">

                    <Product
                        key="4903850"
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />

                    <Product
                        key="23445930"
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />

                    <Product
                        key="3254354345"
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />

                </div>

                <div className="home__row">

                    <Product
                        key="90829332"
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />

                    <Product
                        key="1603625744"
                        id="1603625744"
                        title='Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6" Full HD 144Hz 3ms IPS Display, 16GB Dual-Channel DDR4, 512GB NVMe SSD, Wi-Fi 6, RGB Keyboard, PH315-53-72XD'
                        price={1194.98}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC_SL1500_.jpg"
                    />

                </div>

            </div>

        </div>
    );
};

export default Home;