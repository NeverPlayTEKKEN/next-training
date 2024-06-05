'use client'

import { useState } from "react";
import ReactStarRating from 'react-awesome-stars-rating';

const StarRating = () => {

    const [value, setValue] = useState(3);
    
    const onChange = (value) => {
        setValue(value)
    }

    return (
        <div>
            <ReactStarRating onChange={onChange} value={value} isHalf={false}/>
        </div>
    )
}

export default StarRating;