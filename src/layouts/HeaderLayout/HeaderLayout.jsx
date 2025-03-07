import React from "react"
import './HeaderLayout.css'
import HeaderLogo from "./components/HeaderLogo"
import HeaderNavbar from "./components/HeaderNavbar"
import HeaderLanguage from "./components/HeaderLanguage"
import HeaderHidden from "./components/HeaderHidden"
export default function HeaderLayout() {
    return (
        <div>
            <header className="header">
                <div className="container header__container">
                    <HeaderLogo />
                    <HeaderNavbar />
                    <HeaderLanguage />
                </div>
                <HeaderHidden />
            </header>
        </div>
    )
}