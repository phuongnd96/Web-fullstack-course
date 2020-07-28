import React from 'react';
export const SpecialBtnHorizontal=(props)=>{
    const heigh=props.height;
    const width=props.width;
    const color=props.color;
    const number=props.number;
    return(
        <span style={{
            height:heigh,
            width:width,
            backgroundColor:color
        }} className="special-btn-horizontal">
                <div className="number">
                        {number}
                </div>
        </span>
    );
}