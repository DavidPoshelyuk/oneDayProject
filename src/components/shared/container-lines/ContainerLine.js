import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {NavLink} from "react-router-dom";

function ContainerLine() {

    const containerLine = [
        {
            "id": 1,
            "to": "/",
            "icon": "map-marker-alt",
            "textBefore": "Our Address",
            "textAfter": "Drive Chicago, IL 60607"
        },

        {
            "id": 2,
            "to": "/",
            "icon": "phone-alt",
            "textBefore": "Call Us",
            "textAfter": "360-779-2228"
        },
        {
            "id": 3,
            "to": "/",
            "icon": "envelope",
            "textBefore": "Our Mail",
            "textAfter": "yourname@mail.com"
        }
    ]





    return (
        <div className="container">
            <div className="row contact-details">
                {
                    containerLine.map(todo => {
                        return (
                            <div className="col-lg-4 contact-details__address-line" key={todo.id}>
                                <NavLink to={`${todo.to}`}><FontAwesomeIcon icon={todo.icon}/></NavLink>
                                <div>
                                    <p>{todo.textBefore}</p>
                                    <p>{todo.textAfter}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ContainerLine;