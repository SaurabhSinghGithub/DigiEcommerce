import React from 'react'
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({ stars, reviews }) => {

    const ratingstar = Array.from({ length: 5 }, (elem, index) => {

        return (
            <div className="stars" key={index}>
                {(stars >= index + 1) ? <BsStarFill /> : (stars >= index + .5) ? <BsStarHalf /> : <AiOutlineStar />
                }
            </div>
        )

    })

    return (
        <>

            {ratingstar}

            <div className="reviews">
                ({reviews} customer reviews)
            </div>

        </>
    )
}

export default Stars;