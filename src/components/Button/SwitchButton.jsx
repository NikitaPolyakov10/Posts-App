import React from 'react'
import './SwitchButton.css'

const SwitchButton = ({changeTheme}) => {
    return (
        <>
        <input type="checkbox" id="switch" onClick={changeTheme}/><label htmlFor="switch"></label>
        </>
    )
}

export default SwitchButton;