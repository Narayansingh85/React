import React from 'react'
import Button from './Button'


export const Header = ({onAdd,toggle}) => {
    return (
        <div className='Header'>
            <h1>Add Your Task</h1>
            <Button onAdd={onAdd} toggle={toggle}/>
        </div>
    )
}
