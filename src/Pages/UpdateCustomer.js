import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ApplyLoan from '../Component/ApplyLoan'
import Navbar from '../Component/Navbar'
import ViewLoan from '../Component/ViewLoan'
import ViewLoanCustomer from '../Component/ViewLoanCustomer'
import CustomerService from '../Services/CustomerService'
import Bgimg from '../Assets/Login/images/bg-01.jpg'
import Profile from '../Component/Profile'
import Update from '../Component/Update'
export default class UpdateCustomer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lid:2,
            customerId: localStorage.getItem("customerId"),
            loanApplications: []
        }
    }
    componentDidMount() {
        CustomerService.viewCustomer(this.state.customerId).then((res) => {
            console.log(res.data)
            this.setState({ loanApplications: res.data })
        }
        )
    }
    viewLoan = (loanId) => {
        localStorage.setItem("loanId1", loanId);
        this.state.lid=loanId;
        localStorage.setItem("loanId1",loanId)
        console.log("1"+this.state.lid)
    }
     
    closeHandler=(event)=>{
        event.preventDefault();
        console.log("2"+this.state.lid)
        this.state.lid=0
        console.log("3"+this.state.lid)
        //localStorage.setItem("loanId1",0);
    }

    render() {
        return (
            <div style={{ backgroundImage: `url(/images/bg-01.jpg)`, width: '100%', height: '38rem' }}>
                <div className="container-fluid pt-4 pb-5">

                    <div className="row mt-4">
                        <div className="col-sm-8">
                            <div className="card">
                                <div className="card-body">
                                    <Navbar></Navbar>
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
                                                    this.state.loanApplications.map((loan) => (
                                                        <tr>
                                                            <td>{loan.loanId}</td>
                                                            <td>{loan.customerId.firstName} {loan.customerId.lastName}</td>
                                                            <td>{loan.loanTypeId.loanName}</td>
                                                            <td>{loan.loanStatus}</td>
                                                            <td>{loan.amount}</td>
                                                            <td><button className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => this.viewLoan(loan.loanId)}>View</button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <Update></Update>
                                    {/* <!-- Button trigger modal --> */}
                                    {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}
 <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Loan Application</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ViewLoanCustomer lid12={this.state.lid}></ViewLoanCustomer>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={this.closeHandler} data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
