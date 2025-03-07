import React from "react"
import './HeaderLogo.css'
import open__burger from '../../../assets/icons/open__burger.svg'
export default function HeaderLogo() {
    return (
        <div>
            <button className="HeaderLogo__open-burger-button">
                <img className="HeaderLogo__open-burger-icon w-[38px] h-[38px]" src={open__burger} alt="open__burger-icon" />
            </button>
        </div>
    )
}