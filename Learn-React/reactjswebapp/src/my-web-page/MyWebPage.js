import React from 'react';
import {Card} from './Card.js';
import image from '/Users/maconline/Desktop/web-fullstack-course/Learn-React/reactjswebapp/src/my-web-page/public/laptop.jpg'
export function MyWebPage(){
    return(
        <div id="container">
            <div class="row" id="row-1">
            <Card imgPath={image} label="Máy tính hàng chính hãng giá rẻ" 
            price="2290000" discountPercentage="9" rating="4" comments="3"/>
            <Card imgPath={image} label="Máy tính hàng chính hãng giá rẻ" 
            price="2290000" discountPercentage="9" rating="5" comments="3"/>
            <Card imgPath={image} label="Máy tính hàng chính hãng giá rẻ" 
            price="2290000" discountPercentage="9" rating="1" comments="3"/>
            <Card imgPath={image} label="Máy tính hàng chính hãng giá rẻ" 
            price="2290000" discountPercentage="9" rating="2" comments="3"/>
            <Card imgPath={image} label="Máy tính hàng chính hãng giá rẻ" 
            price="2290000" discountPercentage="9" rating="3" comments="5"/>
            </div>
            <div class="row" id="row-2">
            <Card imgPath={image} label="Máy tính hàng chính hãng giá rẻ" 
            price="2290000" discountPercentage="9" rating="1" comments="34"/>
            <Card imgPath={image} label="Máy tính hàng chính hãng giá rẻ" 
            price="2290000" discountPercentage="9" rating="4" comments="3"/>
            <Card imgPath={image} label="Máy tính hàng chính hãng giá rẻ" 
            price="2290000" discountPercentage="9" rating="5" comments="3"/>
            <Card imgPath={image} label="Máy tính hàng chính hãng giá rẻ" 
            price="2290000" discountPercentage="9" rating="1" comments="3"/>
            <Card imgPath={image} label="Máy tính hàng chính hãng giá rẻ" 
            price="2290000" discountPercentage="9" rating="2" comments="3"/>
            </div><div class="row" id="row-3">
            <Card imgPath={image} label="Máy tính hàng chính hãng giá rẻ" 
            price="2290000" discountPercentage="9" rating="3" comments="3"/>
            <Card imgPath={image} label="Máy tính hàng chính hãng giá rẻ" 
            price="2290000" discountPercentage="9" rating="3" comments="3"/>
            <Card imgPath={image} label="Máy tính hàng chính hãng giá rẻ" 
            price="2290000" discountPercentage="9" rating="2" comments="3"/>
            <Card imgPath={image} label="Máy tính hàng chính hãng giá rẻ" 
            price="2290000" discountPercentage="9" rating="1" comments="3"/>
            <Card imgPath={image} label="Máy tính hàng chính hãng giá rẻ" 
            price="2290000" discountPercentage="9" rating="1" comments="3"/>
            </div>
        </div>
    )
}