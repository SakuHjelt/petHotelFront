import React, { Component } from 'react'
import logo1 from '../images/logo1.jpg'
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';



export default class Navbar extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-center">
                        <Link to="/"><img src={logo1} alt="elainhotelli" /></Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/" onClick={this.handleToggle}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={this.handleToggle}>About</Link>
                        </li>
                        <li>
                            <Link to="/pets" onClick={this.handleToggle}>Login /<br/>SignUp</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
