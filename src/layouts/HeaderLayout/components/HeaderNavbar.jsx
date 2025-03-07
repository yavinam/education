import React from "react"
import './HeaderNavbar.css'
import logo from '../../../assets/icons/logo.svg'
export default function HeaderNavbar() {
    return (
        <div>
            <a className="HeaderNavbar__logo-link" href="">
                <img className="HeaderNavbar__logo-image" src={logo} alt="logo__image" />
            </a>
        </div>
    )
}