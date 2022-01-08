import React, { Component } from 'react'
import LoanIssuerService from '../Services/LoanIssuerService'

export default class ViewLoanCustomer extends Component {
   constructor(props) {
       super(props)
       this.state = {
        loanId1:this.props.lid12,
        loanApplication: {
            loanId: this.props.lid12.value,
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
    LoanIssuerService.viewLoan(this.state.loanId1).then((res) => {
        console.log(res.data)
        
        this.setState({ loanApplication: res.data })
        
    })
}
    render() {
        return (
            <div>
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
                                </div>
                            </div>
                            </div>
            </div>
        )
    }
}

