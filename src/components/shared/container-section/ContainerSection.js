import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function ContainerSection() {

    const sectionBlock = [
        {
            "id": 1,
            "icon": "stethoscope",
            "title": "Therapy",
            "titleLink": "/",
            "mainText": "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit.",
            "poUpText": "Read More",
            "poUpTextLink": "/",
            "iconArrowRight": "arrow-right"
        },
        {
            "id": 2,
            "icon": "user-nurse",
            "title": "Dentistry",
            "titleLink": "/",
            "mainText": "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit.",
            "poUpText": "Read More",
            "poUpTextLink": "/",
            "iconArrowRight": "arrow-right"
        },
        {
            "id": 3,
            "icon": "heartbeat",
            "title": "Virusology",
            "titleLink": "/",
            "mainText": "Lorem ipsum dolor sit amet consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit.",
            "poUpText": "Read More",
            "poUpTextLink": "/",
            "iconArrowRight": "arrow-right"
        },
        {
            "id": 4,
            "icon": "notes-medical",
            "title": "Pharmacology",
            "titleLink": "/",
            "mainText": "Lorem ipsum dolor sit amet consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit.",
            "poUpText": "Read More",
            "poUpTextLink": "/",
            "iconArrowRight": "arrow-right"
        }

    ]

    return (
        <div className="section-block">
            <div className="container">
                <div className="row">
                    {
                        sectionBlock.map(todo => {
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-12 aside" key={todo.id}>
                                    <div className="aside__block">
                                        <div className="aside__block-icon"><FontAwesomeIcon icon={todo.icon}/></div>
                                        <h5><a href={todo.titleLink}>{todo.title}</a></h5>
                                        <p>{todo.mainText}</p>
                                        <div className="aside__block-link">
                                            <a href="/" className="pop-up-text">{todo.poUpText}</a>
                                            <span><FontAwesomeIcon icon={todo.iconArrowRight}/></span></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div/>
            </div>
        </div>
    );
}

export default ContainerSection;