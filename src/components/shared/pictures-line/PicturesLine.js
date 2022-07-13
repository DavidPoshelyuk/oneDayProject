import React from 'react';

function PicturesLine() {

    const picturesLineImage = [
        {
            "id": 1,
            "images": "./assets/images/slide-img-6.jpg"
        },
        {
            "id": 2,
            "images": "./assets/images/slide-img-1.jpg"
        },
        {
            "id": 3,
            "images": "./assets/images/slide-img-2.jpg"
        },
        {
            "id": 4,
            "images": "./assets/images/slide-img-3.jpg"
        },
        {
            "id": 5,
            "images": "./assets/images/slide-img-4.jpg"
        }
    ]

    return (
        <div className="pictures-line">
            <div className="pictures-line__content">
                <div className="pictures-line__content-images">
                    {
                        picturesLineImage.map(todo => {
                            return (
                                <div className="images" key={todo.id}><img src={todo.images} alt="img"
                                                                           className="photo"/></div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default PicturesLine;