import axios from 'axios';
import React, { Component } from 'react'

 class CustomerService extends Component {
   login(email,password)
   {
       return axios.get(`http://localhost:8080/loanApplication/customer/loginCustomer/${email}/${password}`);
   }
   addCustomer(customer)
   {
       return axios.post(`http://localhost:8080/loanApplication/customer/addCustomer`,customer);
   }
   viewCustomer(customerId){
       return axios.get(`http://localhost:8080/loanApplication/viewLoanApplicationByCustId/${customerId}`)
   }
   viewLoanType(){
       return axios.get(`http://localhost:8080/loanApplication/customer/loanType`)
   }
   viewCustomerProfile(customerId){
       return axios.get(`http://localhost:8080/loanApplication/customer/viewCustomer/${customerId}`)
   }
   updateCustomer(customer){
       return axios.put(`http://localhost:8080/loanApplication/customer/updateCustomer`,customer)
   }
}
export default new CustomerService;