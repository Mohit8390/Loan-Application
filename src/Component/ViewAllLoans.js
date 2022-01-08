import React, { Component } from 'react'
import LoanIssuerService from '../Services/LoanIssuerService'


export default class ViewAllLoans extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loans: [],
            modalShow: false
        }
    }

    componentDidMount() {
        LoanIssuerService.viewAllLoans().then((response) => {
            console.log(response.data)
            this.setState({ loans: response.data })
        })
    }
    viewLoan = (loanId) => {
        
         localStorage.setItem("loanId", loanId);
         this.props.history.push(`viewLoan`);
    }
    render() {
        return (
            <div>
                <div className="container-fluid mt-4 " >
                    <div className="shadow-lg p-3 mb-5 bg-white rounded" style={{ backgroundImage: `url('/images/bg-01.jpg')` }}>
                        <div className="row">
                            <div className="col-sm-10">
                            <h3 className="fst-normal text-center mb-4"><b>Customer Loan Applications</b></h3>
                            </div>
                            <div className="col-sm-2">
                                <button className="btn btn-danger" onClick={()=>this.props.history.push(`LoginIssuer`)}>Log Out</button>
                            </div>
                        </div>
                        
                        <div className="card">
                            <div className="card-body">

                                <div className="table-responsive">
                                    <table className="table  table-stripped">
                                        <thead style={{ backgroundColor: "black", color: 'white' }}>
                                            <tr>
                                                <th scope="col">Loan-Id</th>
                                                <th scope="col">Customer Name</th>
                                                <th scope="col">Loan Type</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Loan-Amout</th>
                                                <th scope="col">View</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.loans.map((loan) => (
                                                    <tr>
                                                        <td>{loan.loanId}</td>
                                                        <td>{loan.customerId.firstName} {loan.customerId.lastName}</td>
                                                        <td>{loan.loanTypeId.loanName}</td>
                                                        <td>{loan.loanStatus}</td>
                                                        <td>{loan.amount}</td>
                                                        <td><button className="btn btn-outline-dark" onClick={()=>this.viewLoan(loan.loanId)}>View</button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
