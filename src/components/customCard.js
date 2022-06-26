import React from 'react';

const CustomCard = ({text, img, type}) => {
    return (
        <div className='customCard' variant={type}>
            <img src={img} alt={text} />
            <p>{text}</p>
        </div>
    );
}

export default CustomCard;