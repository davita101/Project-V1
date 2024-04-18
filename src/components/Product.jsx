import React from 'react'
import { productText } from '../constants'

function Product() {
    return (
        <div>
            <div>
                <h2>Super Hot NFT's</h2>

                <ul>
                    {productText.map((item, index) => {
                        // Check if categoryJson exists before mapping over it
                        if (item.categoryJson && Array.isArray(item.categoryJson))
                            return item.categoryJson.map((category, index) => (
                                <li key={index}>{category.label}</li>
                            ));
                    })}
                </ul>

            </div>
        </div>
    )
}

export default Product
