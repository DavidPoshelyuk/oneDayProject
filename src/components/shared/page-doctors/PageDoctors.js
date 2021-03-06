import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../../store/store";

function PageDoctors() {
    const doctors = useAppSelector(state => state.doctorReducer)

    function getStatusTrue(arg) {

        let item = [];
        for (let i = 0; i <= arg - 1; i++) {
            item.push(<span>&#9733;</span>)
        }
        return item
    }

    function getStatusFalse(arg) {

        let item = [];
        for (let i = arg; i <= 4; i++) {
            item.push(<span>&#9734;</span>)
        }
        return item
    }

    return (
        <div className="section-page-doctors">
            <div className="container ">
                <div className="row">
                    {doctors.map(todo => {
                            return (
                                <div key={todo.key} className="col-lg-4 col-sm-6 doctor">
                                    <div className="doctor__wrapper">
                                        <div className="doctor__wrapper-image">
                                            <img src={todo.photo}/>
                                        </div>
                                        <div className="doctor__wrapper-detail">
                                            <h5><a href="">{todo.name}</a></h5>
                                            <span className="complete">{
                                                getStatusTrue(todo.assessmentQuality)
                                            }</span>
                                            <span className="blank">
                                            {
                                                getStatusFalse(todo.assessmentQuality)
                                            }</span>
                                            <p className="profession">
                                                <NavLink to="/">{todo.vocation}</NavLink></p>
                                            <p className="icon">
                                                <FontAwesomeIcon icon="search-location"/>{todo.location}</p>
                                            <button className="btn btn-primary">View More</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>

    );
}

export default PageDoctors;