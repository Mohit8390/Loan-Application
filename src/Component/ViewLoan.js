import React, { Component } from 'react'
import LoanIssuerService from '../Services/LoanIssuerService'

export default class ViewLoan extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loanId: localStorage.getItem("loanId"),
            loanApplication: {
                loanId: 0,
                amount: 0,
                emi: 0,
                loanRepayPeriod: 0,
                monthlyIncome: 0,
                loanStatus: '',
                repayAmount: 0,
                loanTypeId: {
                    loanTypeId: 0,
                    loanName: '',
                    rateOfInterest: 0
                },
                customerId: {
                    customerId: 0,
                    firstName: '',
                    lastName: '',
                    password: '',
                    email: '',
                    gender: '',
                    age: 0,
                    mobileNumber: 0
                }
            }
        }
    }
    componentDidMount() {
        LoanIssuerService.viewLoan(this.state.loanId).then((res) => {
            console.log(res.data)
            this.setState({ loanApplication: res.data })
        })
    }

    setStatus=(status)=>{
        LoanIssuerService.setStatus(this.state.loanId,status).then(
            (response)=>{
                alert("Application "+status+" sucessfully")
                this.props.history.push("viewAllLoans")
            }
        )
    }
    render() {
        return (

            <div>
                <div className="container-fluid mt-4" >
                    <div className="shadow-lg p-3 mb-5 bg-white rounded" style={{ backgroundImage: `url('/images/bg-01.jpg')` }}>
                        <h3 className="fst-normal text-center mb-4"><b>Customer Loan Application</b></h3>
                        <div className="card">
                            <div className="card-body">
                                <div class="container">

                                    <div className="row mb-4">
                                        <div className="col-sm-4">
                                            Customer Id : {this.state.loanApplication.customerId.customerId}
                                        </div>
                                        <div className="col-sm-4">
                                            Customer Name : {this.state.loanApplication.customerId.firstName} {this.state.loanApplication.customerId.lastName}
                                        </div>
                                        <div className="col-sm-4">
                                            Email-Id : {this.state.loanApplication.customerId.email}
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-sm-4">
                                            Mobile No : {this.state.loanApplication.customerId.mobileNumber}
                                        </div>
                                        <div className="col-sm-4">
                                            Gender : {this.state.loanApplication.customerId.gender}
                                        </div>
                                        <div className="col-sm-4">
                                            Age : {this.state.loanApplication.customerId.age}
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-sm-4">
                                            Loan Id : {this.state.loanApplication.loanId}
                                        </div>
                                        <div className="col-sm-4">
                                            Amount : {this.state.loanApplication.amount} RS
    </div>
                                        <div className="col-sm-4">
                                            Loan Type : {this.state.loanApplication.loanTypeId.loanName}
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-sm-4">
                                            Rate Of Intrest : {this.state.loanApplication.loanTypeId.rateOfInterest}
                                        </div>
                                        <div className="col-sm-4">
                                            EMI : {this.state.loanApplication.emi} Rs/Month
    </div>
                                        <div className="col-sm-4">
                                            Loan Status : {this.state.loanApplication.loanStatus}
                                        </div>
                                    </div>
                                    <div className="row  mb-2">
                                        <div className="col-sm-12 text-center">
                                            Monthly Income : {this.state.loanApplication.monthlyIncome} Rs
      </div>
                                    </div>
                                    <div className="row pt-4 mb-4">
                                        <div className="col-sm-6 text-right">
                                        <button type="button" class="btn text-right btn-outline-success" onClick={()=>this.setStatus("Approved")}>Accept</button>
                                        </div>
                                        <div className="col-sm-6">
                                        <button type="button" class="btn  btn-outline-danger" onClick={()=>this.setStatus("Rejected")}>Reject</button>
                                        </div>
                                    </div>
                                    <div className="row mb-4 text-center">
                                        <div className="col-sm-12">
                                        <button type="button" class="btn btn-outline-warning" onClick={()=>this.props.history.push("viewAllLoans")}>Back</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                hey folks {this.state.loanId}
            </div>
        )
    }
}
