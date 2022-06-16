import React from "react";
import { Navbar } from "../Navbar/Navbar";
import "./Menu.css";

const menu = [
    {
        link: "/faktury",
        name: "faktury",
    },
    {
        link: "/dokumenty",
        name: "dokumenty",
    },
    {
        link: "/odczyty",
        name: "odczyty",
    },
    {
        link: "/kontakt",
        name: "kontakt",
    },
];

function Menu() {
    const items = menu.map(({ link, name }) => (
        <>
            <li className="nav-items">
                <a href={link} className="nav-link">
                    {name}
                </a>
            </li>
        </>
    ));
    return (
        <div>
            <Navbar>
                <img src="https://www.devs-mentoring.pl/wp-content/uploads/logo-devs.png" alt="logo" className="logo" />
                <nav className="nav">
                    <ul className="nav-list">{items}</ul>
                </nav>
            </Navbar>
        </div>
    );
}

export default Menu;
