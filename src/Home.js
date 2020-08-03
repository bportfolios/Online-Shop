import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://st2.depositphotos.com/2977159/6297/i/950/depositphotos_62970837-stock-photo-hand-giving-chemical-fertilizer-to.jpg"
                alt=""
            />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="12345"
                    title="The Liquid Chemical"
                    price={11.96}
                    rating={5}
                    image="https://st2.depositphotos.com/3889193/7641/i/450/depositphotos_76415689-stock-photo-gardener-work-table.jpg"
                />
                <Product
                    id="12345"
                    title="The Liquid Chemical"
                    price={11.96}
                    rating={5}
                    image="https://st2.depositphotos.com/3889193/7641/i/450/depositphotos_76415689-stock-photo-gardener-work-table.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="12345"
                    title="The Liquid Chemical"
                    price={11.96}
                    rating={5}
                    image="https://st2.depositphotos.com/3889193/7641/i/450/depositphotos_76415689-stock-photo-gardener-work-table.jpg"
                />
                <Product
                    id="12345"
                    title="The Liquid Chemical"
                    price={11.96}
                    rating={5}
                    image="https://st2.depositphotos.com/3889193/7641/i/450/depositphotos_76415689-stock-photo-gardener-work-table.jpg"
                />
                <Product
                    id="12345"
                    title="The Liquid Chemical"
                    price={11.96}
                    rating={5}
                    image="https://st2.depositphotos.com/3889193/7641/i/450/depositphotos_76415689-stock-photo-gardener-work-table.jpg"
                />
            </div>
            <div className="home__row">
            <Product
                    id="12345"
                    title="The Liquid Chemical"
                    price={11.96}
                    rating={5}
                    image="https://st2.depositphotos.com/3889193/7641/i/450/depositphotos_76415689-stock-photo-gardener-work-table.jpg"
                /> 
            </div>
        </div>
    )
}

export default Home
