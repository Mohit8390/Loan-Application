import React, { Component } from 'react'
import CustomerService from '../Services/CustomerService'
import LoanApplicationService from '../Services/LoanApplicationService'
import Navbar from './Navbar'
import Profile from './Profile'

export default class ApplyLoan extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loanType: [],
            amount: 0,                      
            customerId: localStorage.getItem("customerId"),                    
            loanRepayPeriod: 0,                    
            loanTypeId: 0,                    
            monthlyIncome: 0,                                  
        }
    }
    componentDidMount() {
        CustomerService.viewLoanType().then((response) => {
            this.setState({ loanType: response.data })
            console.log(response.data)
        })
    }

    amountHandler=(e)=>{
        this.setState({amount:e.target.value})
    }
    periodHandler=(e)=>{
        this.setState({loanRepayPeriod:e.target.value})
    }
    ltypeHandler=(e)=>{
        this.setState({loanTypeId:e.target.value})
        
    }
    incomeHandler=(e)=>{
        this.setState({monthlyIncome:e.target.value})
    }

    applyLoan=(e)=>{
        e.preventDefault()
        let loan={
            amount: this.state.amount,
            customerId: {                      
              customerId: this.state.customerId
            },                    
            loanRepayPeriod: this.state.loanRepayPeriod,                    
            loanTypeId: {
              loanTypeId: this.state.loanTypeId                    
            },
            monthlyIncome: this.state.monthlyIncome,  
        }
        
        LoanApplicationService.applyLoan(loan).then((response)=>{
            console.log(response.data)
            this.props.history.push("loanApplication")
        })
    }
    render() {
        return (
            <div className="limiter" style={{backgroundImage:`url(/images/bg-01.jpg)`,width:'100%',height:'38rem'}}>
                <div className="container-fluid pt-4 pb-5">
                    <div className="row mt-4">
                        <div className="col-sm-8">
                            <div className="card">
                                <div className="card-body">
                                    <Navbar></Navbar>

                                    <h3 className="text-center text-primary mt-3 mb-3"><b>APPLY LOAN</b></h3>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="row">
                                                <div className="col-sm-6 text-right mb-3">
                                                    <label className="fw-bold text-danger">Loan Amount :</label>
                                                </div>
                                                <div className="col-sm-6"><input type="text" className="form-control" onChange={this.amountHandler} style={{ width: "12rem", height: "1.9rem" }} />
                                                </div></div>
                                            <div className="row">
                                                <div className="col-sm-6 text-right">
                                                    <label className="fw-bold text-danger mb-3">Monthly Income :</label>
                                                </div>
                                                <div className="col-sm-6"><input type="text" className="form-control" onChange={this.incomeHandler} style={{ width: "12rem", height: "1.9rem" }} />
                                                </div></div>
                                            <div className="row mt-2">
                                                <div className="col-sm-6 text-right">
                                                    <label className="fw-bold text-danger mb-3">Repay Period :</label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <select class="form-select" aria-label="Default select example" onChange={this.periodHandler} style={{ width: "12rem", height: "2.2rem" }}>
                                                        <option selected>Open and Select</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                        <option value="4">Four</option>
                                                        <option value="5">Five</option>
                                                        <option value="6">Six</option>
                                                        <option value="7">Seven</option>
                                                        <option value="8">Eight</option>
                                                        <option value="9">Night</option>
                                                        <option value="10">Ten</option>
                                                    </select>
                                                </div></div>
                                            <div className="row mt-2">
                                                <div className="col-sm-6 text-right">
                                                    <label className="fw-bold text-danger mb-3">Loan Type :</label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <select class="form-select" aria-label="Default select example" onChange={this.ltypeHandler} style={{ width: "12rem", height: "2.2rem" }}>
                                                        <option selected>Open and Select</option>
                                                        {
                                                            this.state.loanType.map(ltype => (
                                                                <option value={ltype.loanTypeId}>{ltype.loanName}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div></div>
                                                <div className="row mt-3 mb-4">
                                                <div className="col-sm-6 text-right">
                                                    <button className="btn btn-info" onClick={this.applyLoan}>
                                                        Apply
                                                    </button>
                                                </div>
                                                <div className="col-sm-6">
                                                <button className="btn btn-warning">
                                                        Reset
                                                    </button>
                                                </div></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <Profile></Profile>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
