import React from "react"
import Link from "next/link"

export default function Nav() {
    const [dropdownState, dropdownStateChange] = React.useState(true)

    function changeDropdownStateFunction(state) {
        dropdownStateChange(state)
    }

    if (typeof window !== "undefined") {
        !dropdownState ? document.body.style.overflow = "hidden" : document.body.style.overflow = "initial"
    }

    return (
        <>
            <nav>
                <a href="#home">
                    <div className="navGroup1">
                        <img src="logo.svg" alt="reybots logo" />
                        <p>Reybots</p>
                    </div>
                </a>
                <div className="navGroup2">
                    <a href="#home">
                        <div className="navElementContainer">
                            <p>Home</p>
                        </div>
                    </a>
                    <a href="#competitions">
                        <div className="navElementContainer">
                            <p>Competitions</p>
                        </div>
                    </a>
                    <a href="#sponsors">
                        <div className="navElementContainer">
                            <p>Sponsors</p>
                        </div>
                    </a>
                    <a href="#about">
                        <div className="navElementContainer">
                            <p>About</p>
                        </div>
                    </a>
                    <a href="#pricing">
                        <div className="navElementContainer">
                            <p>Pricing</p>
                        </div>
                    </a>
                </div>
                <div className="navGroup2">
                    <a href="#contact">
                        <div className="navElementContainer">
                            <p>Contact</p>
                        </div>
                    </a>
                </div>
                <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg" class={dropdownState ? "navHamburger" : "navHamburger navHamburgerOpen"} onClick={() => changeDropdownStateFunction(!dropdownState)}>
                    <rect width="27" height="4" rx="2"></rect>
                    <rect y="18" width="27" height="4" rx="2"></rect>
                    <rect x="11" y="9" width="16" height="4" rx="2"></rect>
                </svg>
            </nav>
            <div className={dropdownState ? "dropdown dropdownClosed" : "dropdown dropdownOpen"}>
                <div className="dropdownElements">
                    <a href="#home" onClick={() => changeDropdownStateFunction(!dropdownState)}>
                        <p className="dropdownElement">Home</p>
                    </a>
                    <a href="#competition" onClick={() => changeDropdownStateFunction(!dropdownState)}>
                        <p className="dropdownElement">Competitions</p>
                    </a>
                    <a href="#sponsors" onClick={() => changeDropdownStateFunction(!dropdownState)}>
                        <p className="dropdownElement">Sponsors</p>
                    </a>
                    <a href="#about" onClick={() => changeDropdownStateFunction(!dropdownState)}>
                        <p className="dropdownElement">About</p>
                    </a>
                    <a href="#pricing" onClick={() => changeDropdownStateFunction(!dropdownState)}>
                        <p className="dropdownElement">Pricing</p>
                    </a>
                    <a href="#contact" onClick={() => changeDropdownStateFunction(!dropdownState)}>
                        <p className="dropdownElement">Contact</p>
                    </a>
                    <div className="dropdownSocials">
                        <button className="socialButton">
                            <i class="fa-brands fa-instagram"></i>
                        </button>
                        <button className="socialButton">
                            <i class="fa-brands fa-youtube"></i>
                        </button>
                        <button className="socialButton">
                            <i class="fa-brands fa-twitter"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
        
    )
}