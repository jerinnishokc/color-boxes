import React from 'react';

const Box = (props) => {
    return (
        <div className="box" id={props.id} style={{'width':'100px', 'height':'100px', 'backgroundColor':props.color}} onClick={props.onClickHandler}></div>
    );
};

export default Box;