import React, {useState} from 'react';
import {RatingBar} from './RatingBar.js';
export const Card = (props) => {
    const [toggle,changeToggle]=useState(false);
    let imgPath = props.imgPath;
    let label = props.label;
    let price = props.price;
    let discountPercentage = props.discountPercentage;
    let rating = props.rating;
    let comments = props.comments;
    const handleClick=()=>{
        changeToggle(!toggle)
    }
    return (
        <div onClick={handleClick} className="card-container">
            <div id="add-to-favorite">
            <i style={{display:toggle?"":"none"}} class="fa fa-heart-o"></i>
            </div>
            <div id="image">
                <img src={imgPath} />
            </div>
            <div id="label">
                {label}
            </div>
            <div id="price">
                <span >
                    {price} <span class="underline">đ</span>
                </span>
                <span id="discountPercentage">
                    -{discountPercentage}%
                </span>
            </div>
            <span id="old-price">
                <del>{Math.floor(price / (1 - discountPercentage / 100))}<span class="underline">đ</span></del>
            </span>
            <div id="star-here">
            <RatingBar rating={rating}/> <span className="comments">({comments} nhận xét)</span>
            </div>
        </div>
    )

}