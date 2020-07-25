import React from 'react';
export const StudentCard = (props) => {
    let avatar=props.avatar;
    let name=props.name;
    let myClass=props.myClass;
    let grade=props.grade;
    return (
        
            <div id="card">
                <img src={avatar} />
                <div>
                    <h3>Tên: {name}</h3>
                    <h3>Lớp: {myClass}</h3>
                    <h3>Điểm: {grade}</h3>
                </div>
            </div>
        

    )
}