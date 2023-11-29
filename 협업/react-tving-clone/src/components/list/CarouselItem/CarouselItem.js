import React from 'react';

export default function CarouselItem({ item }) {
    return (
        <div>
            <div>
                <img src={item.imageUrl} alt={item.title} />
                <h3>{item.title}</h3>
                {/* Render other properties as needed */}
            </div>
        </div>
    );
}
