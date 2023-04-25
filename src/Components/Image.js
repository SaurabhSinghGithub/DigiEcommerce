import React from 'react'
import { useState } from 'react'

const Image = ({ images = [{ url: "" }] }) => {

    const [image, setImage] = useState(images[0])


    return (
        <>
            <div className="multi-image">
                {images.map((curElem, index) => {

                    return <img src={curElem.url} alt="" key={index}
                        onClick={() => setImage(curElem)}
                    />

                })}
            </div>

            <div className="main-image">
                <img src={image.url} alt="" />
            </div>
        </>
    )
}

export default Image;