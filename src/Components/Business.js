import React from 'react'

function Business() {
    const businessModel = {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    }

    return (
        <div>
        <img src={businessModel.imageSrc} alt="image" />
        <h1>{businessModel.name}</h1>
        <h2>{businessModel.address}</h2>
        <h2>{businessModel.city}</h2>
        <h2>{businessModel.state}</h2>
        <h2>{businessModel.zipCode}</h2>
        <h2>{businessModel.category}</h2>
        <h2>{businessModel.rating}</h2>
        <h2>{businessModel.reviewCount}t</h2>
        </div>
    );
}

export default Business