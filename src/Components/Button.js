import React from 'react';

const Button = ({onAdd,toggle}) => {
    return <button className="Btn" onClick={onAdd} >{toggle? 'Close' :'Add'} </button>
};

export default Button;
