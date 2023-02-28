import React from 'react'
import propTypes from 'prop-types'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toogleBtn} />
                    <label className={`form-check-label text-${props.mode == 'light' ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">{`${props.mode == 'light' ? 'Dark' : "Light"} Mode`}</label>
                </div>
            </div>
        </nav>
    )
}

//* Proptype
Navbar.propTypes = {
    title: propTypes.string.isRequired, //! isRequired ensures that the value should be passed. If not it throws error. If default props is defined then it will not throw an error
    aboutText: propTypes.string.isRequired
}

//* Default Props
Navbar.defaultProps = {
    title: "Default Text Utils",
    aboutText: "About Us"
}