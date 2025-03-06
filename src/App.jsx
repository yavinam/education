import "./App.css";
import React from "react";
import HeaderLayout from './layouts/HeaderLayout/HeaderLayout';
import HomePage from './pages/HomePage'
import FooterLayout from './layouts/FooterLayout/FooterLayout';
export default function App() {
    return (
        <main>
            <HeaderLayout />
            <HomePage />
            <FooterLayout />
        </main>
    )
}