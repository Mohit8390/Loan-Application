import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                
                 <nav className="navbar navbar-expand-lg sticky-top bg-dark navbar-dark">
                                        <div className="container-fluid">
                                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                                <ul className="navbar-nav">
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link active" aria-current="page" onClick={()=>this.ApplysLoan} to="applyLoan">ApplyLoan</NavLink>                                                        
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="loanApplication">View My Loans</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Cancel Loan</a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
            </div>
        )
    }
}
