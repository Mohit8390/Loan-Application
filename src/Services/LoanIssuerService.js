import axios from 'axios';
import React, { Component } from 'react'

class LoanIssuerService extends Component {
    Login(email,password) {
        return axios.get(`http://localhost:8080/login/${email}/${password}`);
    }
    viewAllLoans(){
        return axios.get(`http://localhost:8080/viewAllLoanApplications`);
    }
    viewLoan(loanId){
        return axios.get(`http://localhost:8080/loanApplication/viewLoanApplicationByLoanId/${loanId}`);
    }
    setStatus(loanId,status){
        return axios.put(`http://localhost:8080/setStatus/${loanId}/${status}`);
    }
}
export default new LoanIssuerService;

