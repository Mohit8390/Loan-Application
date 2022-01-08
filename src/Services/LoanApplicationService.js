import axios from 'axios';
import React, { Component } from 'react'
class LoanApplicationService extends Component {
applyLoan(loan){
    return axios.post(`http://localhost:8080/loanApplication/applyLoan`,loan)
}
}
export default new LoanApplicationService; 
