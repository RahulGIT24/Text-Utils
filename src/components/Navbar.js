import React from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode == 'light' ? "light" : props.mode == 'warning' ? 'light' : "dark"} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" >{props.aboutText}</Link>
                        </li>
                    </ul>
                </div>
                <div className="dropdown mx-5">
                    <button className={`btn btn-${props.mode == 'light' ? "light" : props.mode == 'danger' ? 'danger' : props.mode == 'warning' ? 'warning' : props.mode == 'primary' ? 'primary' : "dark"} dropdown-toggle text-${props.mode == 'light' ? "dark" : props.mode == 'warning' ? 'dark' : "light"}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Custom Themes
                    </button>
                    <ul className={`dropdown-menu bg-${props.mode == 'light' ? "light" : props.mode == 'danger' ? 'danger' : props.mode == 'warning' ? 'warning' : props.mode == 'primary' ? 'primary' : "dark"} text-${props.mode == 'light' ? "dark" : props.mode == 'warning' ? 'dark' : "light"}`} >
                        <div className="form-check mx-2 " >
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" onClick={props.red} />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Red
                            </label>
                        </div>
                        <div className="form-check mx-2 ">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option1" onClick={props.blue} />
                            <label className="form-check-label " htmlFor="exampleRadios1">
                                Blue
                            </label>
                        </div>
                        <div className="form-check mx-2 ">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option1" onClick={props.yellow} />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Yellow
                            </label>
                        </div>

                    </ul>
                </div>
                <div className="form-check form-switch">
                    <input className={`form-check-input bg-${props.mode}`} type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toogleBtn} />
                    <label className={`form-check-label text-${props.mode == 'light' ? "dark" : props.mode == 'warning' ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">{`${props.mode == 'dark' ? 'Light' : "Dark"} Mode`}</label>
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